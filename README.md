# 月影塔罗 · 塔罗牌占卜网站

《计算机基础》课程设计作品 —— 一个深色神秘学主题的塔罗牌占卜网站，使用原生 HTML5 + CSS3 + JavaScript 编写，
不依赖任何第三方框架，并以 GitHub Pages 发布到 Internet。

| 入口 | 地址 |
| --- | --- |
| 🌙 站点主页 | <https://zaton-c.github.io/tarot/> |
| 📄 实验报告（PDF） | [`report/Experimental_Report.pdf`](report/Experimental_Report.pdf) · [在线打开](https://zaton-c.github.io/tarot/report/Experimental_Report.pdf) |
| 🗂 过程证据 | [`docs/README.md`](docs/README.md)（GitHub 提交记录与仓库主页截图） |
| 📁 源码目录 | `D:\tarot`（本仓库根目录） · `D:\Work\tarot`（Git 工作副本） |

## 站点结构

全部 6 个网页使用**相对路径**互相跳转，可直接双击 `index.html` 离线打开。

| 页面 | 文件 | 说明 |
| --- | --- | --- |
| 主页 | `index.html` | 站点总览、主视觉、基础/深度两条占卜路线入口、全部页面导航 |
| 基础占卜 | `basic.html` | 四步向导：选牌阵 → 选问题 → 洗牌抽牌 → 生成解读（22 张大阿卡纳，4 种牌阵） |
| 深度占卜 | `deep.html` | 同一套引擎，启用完整 78 张牌与 6 种深度牌阵 |
| 牌阵图鉴 | `spreads.html` | 10 种牌阵的图形示意、适用场景与 50 条备选问题 |
| 塔罗牌图鉴 | `cards.html` | 78 张牌的卡面、正逆位牌义、编号与元素速查 |
| 使用指南 | `guide.html` | 占卜流程指引、塔罗基础知识、站点页面结构说明 |

```
tarot/
├── index.html  basic.html  deep.html  spreads.html  cards.html  guide.html
├── css/style.css                 全站深色神秘学主题（30 KB）
├── js/                           cards-major / cards-minor / spreads / deck / divination / starfield
├── images/                       主视觉与牌桌插画（2 张 AI 辅助生成）
├── report/                       实验报告 PDF、LaTeX 源码、模板类文件与插图
└── docs/                         过程证据截图
```

## 技术要点

- **纯手写前端**：无框架、无在线库、无第三方图片素材；78 张牌面由 `js/deck.js` 按牌号哈希**程序化绘制 SVG**
- **占卜引擎**：`crypto.getRandomValues` + Fisher–Yates 洗牌，逆位概率 42%；解读含逐张牌义、元素能量分析、
  综合结论与三条可执行建议，「是否抉择」牌阵额外给出做/不做的倾向
- **响应式与动效**：CSS Grid 实现 10 种牌阵布局，CSS 3D transform 完成翻牌，canvas 静态星空背景
- **质量验证**：44 项自动化自检全部通过；全站 118 处相对路径引用零断链
- **原创性**：78 张牌义、10 种牌阵、50 条备选问题、全部解读文案均为自行撰写

## Git 版本管理与发布

```
71b49a8  实验报告：封面个人信息改为陈泽桐 / U202615116（班级与指导教师留空）
37813cc  补充证据：GitHub 提交记录与仓库页截图（考察项 8：推送形成主页链接）
4e09397  实验报告：按课程 LaTeX 模板生成实验报告并加入仓库，站点新增报告入口
6dd5496  月影塔罗：塔罗牌占卜网站（计算机基础课程设计）
```

发布链路：本地源码 → `git init / add / commit / push` → GitHub 仓库 `Zaton-C/tarot`（public, main）→
GitHub Pages（发布源 main 分支根目录）→ <https://zaton-c.github.io/tarot/>

## 重新编译实验报告

报告使用课程提供的 LaTeX 模板 `Experimental_Report.cls` 编译（A4 20 页，含目录与可点击链接）：

1. 准备支持 XeLaTeX 的 TeX 环境（TeX Live / MiKTeX / tectonic 均可）；
2. 从课程模板 `experimental-report_standalone.zip` 中取出 `STZhongsong.ttf` 放到 `report/` 目录；
3. 在 `report/` 下执行 `xelatex Experimental_Report.tex`（本机使用 `tectonic -X compile`）。

模板适配补丁与文件清单见 [`report/README.md`](report/README.md)。
