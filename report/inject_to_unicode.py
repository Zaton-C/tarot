# -*- coding: utf-8 -*-
"""
为 PDF 中缺失 /ToUnicode 的 Type0/Identity-H 中文字体注入 ToUnicode CMap。

背景
----
XeLaTeX 的 xdvipdfmx 嵌入 OTF/CFF 中文正文字体（FandolSong / FandolHei /
FandolKai / FandolFang）时，生成的是 ``CIDFontType0 + /Identity-H`` 编码，
并且**不会**写出 ``/ToUnicode``。结果是：部分 PDF 文本提取工具（例如 pypdf）
读出的中文是乱码，无法逐字核对报告正文。

原理
----
这些字体的 descendant 声明 ``CIDSystemInfo = Adobe / GB1 / 5``，
也就是说内容流里的 2 字节码就是 Adobe-GB1 的 CID，
可以用 Adobe-GB1 的 CID -> Unicode 表反查回对应汉字。
本脚本据此为每个字体补写 ``/ToUnicode`` CMap。

写入方式
--------
使用 pypdf 的**增量更新**（incremental=True）：原 PDF 的字节流被完整保留，
仅在文件末尾追加被修改的字体对象与新增的 CMap 流，
因此链接注释、书签大纲、页面结构、版式与渲染结果都不受任何影响。

依赖
----
``pypdf`` 与 ``pdfminer.six``（后者提供 Adobe-GB1 的 CID->Unicode 表）。

用法
----
    python inject_to_unicode.py <源PDF> <输出PDF>

不传参数时，默认处理同目录下的 ``Experimental_Report.pdf`` 并原地更新。
"""
import os
import sys
from collections import defaultdict

from pypdf import PdfReader, PdfWriter
from pypdf.generic import ContentStream, DecodedStreamObject, NameObject
from pdfminer.cmapdb import CMapDB

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_SRC = os.path.join(HERE, "Experimental_Report.pdf")
DEFAULT_DST = DEFAULT_SRC


def raw_bytes(op):
    """取 PDF 字符串操作数的原始字节。"""
    if isinstance(op, bytes):
        return bytes(op)
    ob = getattr(op, "original_bytes", None)
    if isinstance(ob, (bytes, bytearray)):
        return bytes(ob)
    try:
        return bytes(op)
    except Exception:
        return b""


def collect_codes(reader):
    """遍历所有页面，返回 ({字体对象号: {2 字节码集合}}, {字体对象号: 字体字典})。"""
    codes_by_obj = defaultdict(set)
    font_dict = {}
    for pno, page in enumerate(reader.pages, 1):
        res = page.get("/Resources")
        fonts = res.get("/Font") if res else None
        if not fonts:
            continue
        local = {}
        for rname, ref in fonts.items():
            local[rname] = ref.idnum
            font_dict.setdefault(ref.idnum, ref.get_object())
        try:
            cs = ContentStream(page.get_contents(), reader)
        except Exception as exc:
            print("  [warn] 第 %d 页内容流解析失败: %s" % (pno, exc))
            continue
        cur = None
        for operands, operator in cs.operations:
            if operator == b"Tf":
                cur = operands[0]
                continue
            if cur not in local:
                continue
            target = local[cur]
            chunks = []
            if operator in (b"Tj", b"'", b'"'):
                chunks.append(raw_bytes(operands[-1]))
            elif operator == b"TJ":
                for item in operands[0]:
                    if isinstance(item, (int, float)):
                        continue
                    chunks.append(raw_bytes(item))
            for data in chunks:
                if not data:
                    continue
                for i in range(0, len(data) - 1, 2):
                    codes_by_obj[target].add(data[i:i + 2])
    return codes_by_obj, font_dict


def build_cmap(entries):
    """entries: [(2 字节源码 bytes, unicode str)] -> ToUnicode CMap 字节流。"""
    out = [
        "/CIDInit /ProcSet findresource begin",
        "12 dict begin",
        "begincmap",
        "/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def",
        "/CMapName /Adobe-Identity-UCS def",
        "/CMapType 2 def",
        "1 begincodespacerange",
        "<0000> <FFFF>",
        "endcodespacerange",
    ]
    entries = sorted(entries)
    for i in range(0, len(entries), 100):
        chunk = entries[i:i + 100]
        out.append("%d beginbfchar" % len(chunk))
        for code, uni in chunk:
            dst = uni.encode("utf-16-be").hex().upper()
            out.append("<%s> <%s>" % (code.hex().upper(), dst))
        out.append("endbfchar")
    out += [
        "endcmap",
        "CMapName currentdict /CMap defineresource pop",
        "end",
        "end",
    ]
    return ("\n".join(out) + "\n").encode("ascii")


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    dst = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_DST

    reader = PdfReader(src)
    codes_by_obj, font_dict = collect_codes(reader)
    umap = CMapDB.get_unicode_map("Adobe-GB1", False)

    targets = []
    for objnum, f in sorted(font_dict.items()):
        if f.get("/Subtype") != "/Type0" or "/ToUnicode" in f:
            continue
        try:
            desc = f["/DescendantFonts"][0].get_object()
            csi = desc.get("/CIDSystemInfo", {})
        except Exception:
            continue
        reg = str(csi.get("/Registry", "")).lstrip("/")
        order = str(csi.get("/Ordering", "")).lstrip("/")
        if (reg, order) == ("Adobe", "GB1"):
            targets.append((objnum, f))

    print("待注入字体 %d 个" % len(targets))
    if not targets:
        print("无需注入（所有字体均已带 /ToUnicode）")
        return 0

    writer = PdfWriter(src, incremental=True)
    total_missing = 0
    for objnum, f in targets:
        entries, missing = [], []
        for code in sorted(codes_by_obj.get(objnum, ())):
            cid = int.from_bytes(code, "big")
            try:
                uni = umap.get_unichr(cid)
            except KeyError:
                uni = None
            if not uni:
                missing.append(cid)
                continue
            entries.append((code, uni))
        total_missing += len(missing)
        print("  %-46s 码数=%5d 映射=%5d 未映射=%3d" %
              (str(f.get("/BaseFont", "?")), len(codes_by_obj.get(objnum, ())),
               len(entries), len(missing)))
        if missing[:5]:
            print("      未映射 CID 示例: %s" % missing[:5])

        stream = DecodedStreamObject()
        stream.set_data(build_cmap(entries))
        if hasattr(stream, "compress"):
            stream.compress()
        ref = writer._add_object(stream)

        writer._objects[objnum - 1][NameObject("/ToUnicode")] = ref

    if os.path.abspath(src) == os.path.abspath(dst):
        tmp = dst + ".tmp"
        with open(tmp, "wb") as fh:
            writer.write(fh)
        os.replace(tmp, dst)
    else:
        with open(dst, "wb") as fh:
            writer.write(fh)

    print("已写出 %s (%.2f MB)  未映射总数=%d" %
          (dst, os.path.getsize(dst) / 1024 / 1024, total_missing))
    return 0


if __name__ == "__main__":
    sys.exit(main())
