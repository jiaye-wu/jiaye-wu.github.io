---
layout: post
title: "[学术工具] ExportMyPub项目"
date: 2026-06-22 11:19:00
description: 跨平台、本地优先的现代成果导出管理器
tags:
  - academic tool
  - github
  - google scholar
  - python
  - software
  - windows
  - open source
categories:
  - development
  - research blog
thumbnail: assets/img/post_covers/ExportMyPub.png
toc:
  sidebar: left
---

本项目的代码仓库位于 [GitHub](https://github.com/jiaye-wu/ExportMyPub)。

# ExportMyPub

**跨平台 · 本地优先 · Windows · macOS · Linux · 现代成果导出管理器**

<div class="row mt-3">
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/ExportMyPub-main-zh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/ExportMyPub-export-zh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

ExportMyPub 是纯客户端的 BibTeX 科研成果统计、作者身份筛选、成果核对与引用导出工具，可在 Windows、macOS 和 Linux 的现代浏览器中运行。用户选择的 `.bib` 文件始终是成果主数据源：应用只在本机读取，绝不修改或上传。

## 项目定位与免责声明

ExportMyPub 首先是为了满足维护者个人工作流而开发的项目。欢迎提出 feature request、建议和建设性反馈，但维护者不保证采纳、排期、实现或长期维护任何请求。

本项目按**现状**提供，不对正确性、完整性、特定用途适用性或持续可用性作出任何明示或暗示保证。使用者在依赖结果前，应自行核验成果、统计数字、作者身份分类、引用文本、生成文档及 ScholarBot 关联结果；应独立备份源数据，并确认生成材料符合相关单位、基金、出版机构或申报流程的规则。

在适用法律允许的最大范围内，维护者不对因使用或无法使用本项目而产生的数据丢失、统计错误、作者身份误判、申报被拒、文档兼容性问题、声誉损失或其他任何直接、间接不良后果承担责任。

## 主要功能

- 只读载入本地 BibTeX，支持文件拖放。
- 自动推荐高频作者，支持别名、缩写变体、严格模式和连字符策略。
- 按第一作者、末位作者、第 n 作者、通讯作者和共同一作筛选。
- 按标题关键词、年份区间、成果类型和代表作筛选。
- BibTeX 与 ScholarBot 数据分区展示的常驻仪表盘。
- 年度成果、累计成果、作者角色、引用趋势和合作者排行。
- 表格/卡片视图、目标作者高亮、作者顺序列、表头升降序、联动列宽和拖拽排序。
- 以 citekey 保存代表作状态和命名排序方案。
- 第一条成果实时预览，支持 TXT、Markdown、DOCX 和 ODT 导出。
- 自定义引用模板、字段校验、缺失字段自动省略以及简单粗体/斜体标记。
- 中英双语、浅色/深色/跟随系统主题、PWA 安装和离线使用。

## 快速开始

需要 Node.js 20 或更高版本，以及 pnpm：

```bash
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

若浏览器没有自动打开，请访问 <http://127.0.0.1:5173>。

### 迁移到另一台设备

不要跨设备复制 `node_modules/` 或 pnpm 缓存目录，其中可能包含平台专属包、可执行文件、文件系统链接和存储元数据。

应复制或克隆源码仓库，并保留 `package.json`、`pnpm-lock.yaml`、`pnpm-workspace.yaml` 和 `.npmrc`，然后在新设备重新安装依赖：

```bash
pnpm install --frozen-lockfile --ignore-scripts
```

pnpm 会重新创建 `node_modules/`，并自动下载或复用接收设备上的缓存。启动脚本有意不负责安装依赖。

### 启动脚本

Windows 用户在安装依赖后可双击 `launch_app.cmd`。命令窗口会保留，便于查看启动错误。

Linux 和其他 POSIX 系统：

```bash
chmod +x launch_app.sh
./launch_app.sh
```

设置 `EXPORTMYPUB_NO_OPEN=1` 可禁止 Linux 脚本自动打开浏览器。两个脚本都只监听 `127.0.0.1`，不会下载依赖或修改 BibTeX。

### 生产构建

```bash
pnpm build
pnpm audit:prod
```

生产构建输出到 `dist/`。

## 数据与隐私

BibTeX 是成果列表和导出结果的唯一权威数据源。ScholarBot 只是可选增强层，不能新增、删除或覆盖 BibTeX 成果。

应用使用浏览器 File API 读取文件，不上传内容，也不调用可写文件句柄接口。Chromium 浏览器可以在 IndexedDB 中保存只读文件句柄；其他浏览器可重新选择或拖入文件。

本地状态可能包括：

- 目标作者及别名；
- 按 citekey 保存的代表作状态；
- 命名排序方案；
- 自定义引用模板；
- ScholarBot 地址及最近一次成功缓存；
- 主题、语言、视图和列宽。

清除浏览器站点数据会清除这些设置，但不会影响源 `.bib` 文件。

## 作者匹配规则

- `Alice Example` 按“名 + 姓”解析。
- `Example, Alice` 按“姓, 名”解析。
- 多个别名使用分号分隔，例如 `Alice Example; Example, Alice; 王小明`。
- 中文全角标点和空白会先规范化。
- 普通模式识别全拼顺序变体和常见首字母缩写。
- 严格模式只接受全拼及其顺序变体；用户明确输入的缩写别名仍然有效。
- “忽略连字符”控制 `Anne-Marie` 和 `Anne Marie` 是否等价。
- 中文别名按完整字符串匹配，不自动拆分姓与名。

载入 BibTeX 后，应用会推荐出现频率最高的全拼姓名。

## BibTeX 作者标记

- `†`：共同一作；
- `*`：通讯作者；
- `†*`：同时具有两种身份。

这些标记只在内存中的匹配和显示副本里处理，不会写回 BibTeX。顶栏“BibTeX 编写说明”提供完全虚构的 `example.bib` 下载。

```bibtex
@article{ExampleArticle2026,
  title   = {A Fictional Study of Reproducible Widgets},
  author  = {Researcher†, Alice and Scientist†*, Bob and Scholar*, Carol},
  journal = {Journal of Imaginary Results},
  year    = {2026},
  volume  = {4},
  number  = {2},
  pages   = {101--112}
}
```

## 成果类型分组

| BibTeX 类型                                             | 界面分组                   |
| ----------------------------------------------------- | ---------------------- |
| `article`                                             | 期刊论文 / Journal article |
| `inproceedings`、`conference`                          | 会议论文 / Conference      |
| `patent`                                              | 专利 / Patent            |
| `bachelorthesis`、`mastersthesis`、`phdthesis`、`thesis` | 学位论文 / Thesis          |

其他类型继续使用规范化后的原始名称。

## 引用模板

常用字段：

```text
{title} {venue} {journal} {volume} {number} {pages} {pages-pages}
{year} {doi} {citekey} {publisher} {school}
```

`{venue}` 会根据成果类型选择合适的期刊、会议、学校或出版社字段。

### 作者字段

```text
{authors}
{authors-family-first}
{authors-initials}
{authors-family-first-initials}
```

- `{authors}` 输出“名 姓”。
- `{authors-family-first}` 输出“姓, 名”。
- `-initials` 后缀将名缩写为首字母。
- **所有作者字段都严格保持 BibTeX 原始作者先后顺序，绝不会重排作者。**

为兼容已保存模板，旧版 `order`、`form` 和 `max` 参数仍可读取，但不建议用于新模板。

### 页码字段

- `{pages}` 只输出起始页，例如 `101`。
- `{pages-pages}` 输出完整范围，例如 `101–112`。

字段缺失时会自动跳过；应用同时清理空括号、重复标点和悬空分隔符。旧模板中的 `[[...]]` 仍保持兼容。

### 简单富文本

- `*文字*`：斜体；
- `**文字**`：加粗。

Markdown、DOCX 和 ODT 保留这些样式；TXT 自动移除标记，只输出纯文字。预览会根据当前选择的格式显示效果。

```text
{authors-family-first}. *{title}*. {venue}. {volume}(**{number}**): {pages-pages}, {year}.
```

未知占位符或不成对的粗斜体标记会显示校验错误。

## 导出格式与编号

- **TXT**：UTF-8 纯文本，不含富文本标记。
- **Markdown**：保留 `*斜体*` 和 `**加粗**` 语法。
- **DOCX / ODT**：Times New Roman、10 pt，并使用原生粗体和斜体。

自动编号可以关闭，也可以选择 `1.` 或 `[1]`。DOCX 和 ODT 会根据实际最长序号前缀计算悬挂缩进，使换行内容与正文起始位置对齐。

应用按当前可见顺序导出当前列表。导出面板还可设置标题、代表作标识和编号。

## GH-ScholarBot

ExportMyPub **不会抓取 Google Scholar**。如需引用指标，用户需要自行部署 [jiaye-wu/GH-ScholarBot](https://github.com/jiaye-wu/GH-ScholarBot/)，然后提供 GitHub 仓库地址、JSON 基础目录地址或完整 `gs_data.json` 地址。

ScholarBot 可补充头像、单位、研究兴趣、总引用、近五年引用、h-index、i10-index、逐年引用和逐篇引用。

成果关联严格遵循：

1. 精确匹配 `google_scholar_id`；
2. 唯一的“规范化标题 + 年份”精确匹配；
3. 不自动模糊匹配。

ScholarBot 故障不会影响 BibTeX 筛选和导出。

## 解析与安全限制

项目使用 `src/core/bibtexParser.ts` 中的零依赖状态机解析器，不执行 BibTeX 内容。支持普通条目、`@string`、`@comment`、`@preamble`、嵌套花括号、引号值、月份宏和 `#` 拼接。

安全上限包括：

- 输入文件最大 10 MiB；
- 最多 10,000 条成果；
- 每条最多 500 个字段；
- 花括号最多嵌套 128 层；
- 畸形或未闭合输入直接报错，不执行或静默修复。

## 依赖供应链策略

- `package.json` 固定精确版本。
- `pnpm-lock.yaml` 记录 npm SHA-512 完整性。
- `.npmrc` 禁止依赖生命周期脚本并校验存储完整性。
- `pnpm-workspace.yaml` 保持空的 `onlyBuiltDependencies`。
- 新发布版本至少等待 24 小时才允许自动选择。
- `pnpm audit:prod` 检查生产依赖已知漏洞。
- 新增或升级包时必须核对官方仓库、维护者、发布时间和锁文件差异。
- 开发服务器保持监听 `127.0.0.1`，除非明确改变安全模型。

## 技术架构

- React 19、TypeScript、Vite；
- 项目内零依赖 BibTeX 状态机解析器；
- dnd-kit 拖拽排序；
- `idb` / IndexedDB 本地状态；
- vite-plugin-pwa / Workbox；
- 项目内 DOCX/ODT ZIP/XML 生成器；
- MiSans Variable Font 与 Fluent/Mica 风格界面。

核心逻辑位于 `src/core/`，可复用 UI 位于 `src/components/`。

## 项目信息

- 版本：`1.0.2606.23`
- 协议：GPLv3
- 作者：Jiaye Wu
- 项目地址：[jiaye-wu/ExportMyPub](https://github.com/jiaye-wu/ExportMyPub)

## 字体

界面使用 WOFF2/WOFF 格式的 MiSans Variable Font，并采用 `font-display: swap`。公开托管或重新分发构建前，请确认字体许可条款。
