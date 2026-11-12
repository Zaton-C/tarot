# 实验报告

本目录存放《计算机基础》课程设计的**实验报告**，采用课程提供的 LaTeX 模板
（华中科技大学 `Experimental_Report.cls`）编译生成，与网页作品一一对应。

- 报告 PDF（线上可直接访问）：<https://zaton-c.github.io/tarot/report/Experimental_Report.pdf>
- 对应网站主页：<https://zaton-c.github.io/tarot/>

## 文件清单

| 文件 | 说明 |
| --- | --- |
| `Experimental_Report.pdf` | 实验报告正文，A4 共 20 页，含自动目录、图表编号与可点击链接 |
| `Experimental_Report.tex` | 报告源码，章节结构沿用课程模板（网页整体框架 / 主页设计 / 分页面设计 / 网页设计小结 / 课程的收获和建议） |
| `Experimental_Report.cls` | 课程模板类文件，含 3 处本地编译适配补丁（见下） |
| `Experimental_Report.bib`、`Experimental_Report.bst` | 课程模板附带的示例文献库与文献样式 |
| `images/` | 报告插图：网站框架图、各页面截图、占卜流程截图、GitHub 发布证据 |

## 报告结构与网页的对应关系

| 报告章节 | 对应内容 |
| --- | --- |
| 1 网页整体框架 | 站点目录结构、页面清单表、相对路径与可移植性 |
| 2 主页设计 | `index.html` 的视觉基调与信息结构 |
| 3 分页面设计 | `basic.html`、`deep.html`、`spreads.html`、`cards.html`、`guide.html` 逐页截图与设计说明；GitHub 提交记录与仓库页截图（"推送形成主页链接"的证据） |
| 4 网页设计小结 | 开发调试中 7 个真实问题的现象、原因与解决办法；自测方式、原创性说明、性能与体验 |
| 5 课程的收获和建议 | 按课程专题（计算机基础、LaTeX、Python、Photoshop、Git、Dreamweaver）分述 |

## 重新编译

1. 准备支持 XeLaTeX 的 TeX 环境（TeX Live / MiKTeX / tectonic 均可）；
2. 从课程模板 `experimental-report_standalone.zip` 中取出 `STZhongsong.ttf` 放到本目录（封面标题字体）；
3. 执行 `xelatex Experimental_Report.tex`（本机使用 tectonic 0.15 的 XeTeX 模式编译，命令：
   `tectonic -X compile Experimental_Report.tex`）。

## 模板适配补丁

课程模板原文件未改动逻辑，仅在 3 处做了编译环境适配，版式与原模板完全一致：

1. **封面字体**：`\setCJKfamilyfont{hwzs}` 由 `FandolSong` 改为模板压缩包内自带的 `STZhongsong.ttf`
   （本机 TeX 环境无 Fandol 字体，且按名称查找的中文字体不生效）；
2. **封面校名图**：`HUSTBlack.eps` 改为 `HUSTBlack.png`
   （XeLaTeX 的 xdvipdfmx 无法直接转换该 Illustrator 矢量 EPS，改用从模板预编译 PDF 中裁出的同名校名图，600 dpi）；
3. **正文宏包**：显式 `\usepackage{xcolor}`（模板原通过 `tikz` 间接引入，目录标题需要 `\textcolor`）。

## 插图来源

| 插图 | 来源 |
| --- | --- |
| 图 1-1 网站整体框架图 | Python + matplotlib 依据站点目录结构原创绘制 |
| 图 2-1、图 3-1 ~ 3-8 | Microsoft Edge 无头浏览器对线上站点 <https://zaton-c.github.io/tarot/> 的实拍截图 |
| 图 3-9、图 3-10 | GitHub 仓库提交记录页与仓库主页截图，用作"推送形成主页链接"的过程证据 |

所有截图均为本人作品的自证材料，未使用任何第三方图片素材。
