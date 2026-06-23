---
layout: post
title: "[學術工具] ExportMyPub項目"
date: 2026-06-22 11:19:00
description: 跨平臺、本地優先的現代成果導出管理器
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

本項目的代碼倉庫位於 [GitHub](https://github.com/jiaye-wu/ExportMyPub)。

# ExportMyPub

**跨平臺 · 本地優先 · Windows · macOS · Linux · 現代成果導出管理器**

<div class="row mt-3">
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/ExportMyPub-main-zh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/ExportMyPub-export-zh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

ExportMyPub 是純客戶端的 BibTeX 科研成果統計、作者身份篩選、成果核對與引用導出工具，可在 Windows、macOS 和 Linux 的現代瀏覽器中運行。用戶選擇的 `.bib` 文件始終是成果主數據源：應用只在本機讀取，絕不修改或上傳。

## 項目定位與免責聲明

ExportMyPub 首先是為了滿足維護者個人工作流而開發的項目。歡迎提出 feature request、建議和建設性反饋，但維護者不保證採納、排期、實現或長期維護任何請求。

本項目按**現狀**提供，不對正確性、完整性、特定用途適用性或持續可用性作出任何明示或暗示保證。使用者在依賴結果前，應自行核驗成果、統計數字、作者身份分類、引用文本、生成文檔及 ScholarBot 關聯結果；應獨立備份源數據，並確認生成材料符合相關單位、基金、出版機構或申報流程的規則。

在適用法律允許的最大範圍內，維護者不對因使用或無法使用本項目而產生的數據丟失、統計錯誤、作者身份誤判、申報被拒、文檔兼容性問題、聲譽損失或其他任何直接、間接不良後果承擔責任。

## 主要功能

- 只讀載入本地 BibTeX，支持文件拖放。
- 自動推薦高頻作者，支持別名、縮寫變體、嚴格模式和連字符策略。
- 按第一作者、末位作者、第 n 作者、通訊作者和共同一作篩選。
- 按標題關鍵詞、年份區間、成果類型和代表作篩選。
- BibTeX 與 ScholarBot 數據分區展示的常駐儀表盤。
- 年度成果、累計成果、作者角色、引用趨勢和合作者排行。
- 表格/卡片視圖、目標作者高亮、作者順序列、表頭升降序、聯動列寬和拖拽排序。
- 以 citekey 保存代表作狀態和命名排序方案。
- 第一條成果實時預覽，支持 TXT、Markdown、DOCX 和 ODT 導出。
- 自定義引用模板、字段校驗、缺失字段自動省略以及簡單粗體/斜體標記。
- 中英雙語、淺色/深色/跟隨系統主題、PWA 安裝和離線使用。

## 快速開始

需要 Node.js 20 或更高版本，以及 pnpm：

```bash
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

若瀏覽器沒有自動打開，請訪問 <http://127.0.0.1:5173>。

### 遷移到另一臺設備

不要跨設備複製 `node_modules/` 或 pnpm 緩存目錄，其中可能包含平臺專屬包、可執行文件、文件系統鏈接和存儲元數據。

應複製或克隆源碼倉庫，並保留 `package.json`、`pnpm-lock.yaml`、`pnpm-workspace.yaml` 和 `.npmrc`，然後在新設備重新安裝依賴：

```bash
pnpm install --frozen-lockfile --ignore-scripts
```

pnpm 會重新創建 `node_modules/`，並自動下載或複用接收設備上的緩存。啟動腳本有意不負責安裝依賴。

### 啟動腳本

Windows 用戶在安裝依賴後可雙擊 `launch_app.cmd`。命令窗口會保留，便於查看啟動錯誤。

Linux 和其他 POSIX 系統：

```bash
chmod +x launch_app.sh
./launch_app.sh
```

設置 `EXPORTMYPUB_NO_OPEN=1` 可禁止 Linux 腳本自動打開瀏覽器。兩個腳本都只監聽 `127.0.0.1`，不會下載依賴或修改 BibTeX。

### 生產構建

```bash
pnpm build
pnpm audit:prod
```

生產構建輸出到 `dist/`。

## 數據與隱私

BibTeX 是成果列表和導出結果的唯一權威數據源。ScholarBot 只是可選增強層，不能新增、刪除或覆蓋 BibTeX 成果。

應用使用瀏覽器 File API 讀取文件，不上傳內容，也不調用可寫文件句柄接口。Chromium 瀏覽器可以在 IndexedDB 中保存只讀文件句柄；其他瀏覽器可重新選擇或拖入文件。

本地狀態可能包括：

- 目標作者及別名；
- 按 citekey 保存的代表作狀態；
- 命名排序方案；
- 自定義引用模板；
- ScholarBot 地址及最近一次成功緩存；
- 主題、語言、視圖和列寬。

清除瀏覽器站點數據會清除這些設置，但不會影響源 `.bib` 文件。

## 作者匹配規則

- `Alice Example` 按“名 + 姓”解析。
- `Example, Alice` 按“姓, 名”解析。
- 多個別名使用分號分隔，例如 `Alice Example; Example, Alice; 王小明`。
- 中文全角標點和空白會先規範化。
- 普通模式識別全拼順序變體和常見首字母縮寫。
- 嚴格模式只接受全拼及其順序變體；用戶明確輸入的縮寫別名仍然有效。
- “忽略連字符”控制 `Anne-Marie` 和 `Anne Marie` 是否等價。
- 中文別名按完整字符串匹配，不自動拆分姓與名。

載入 BibTeX 後，應用會推薦出現頻率最高的全拼姓名。

## BibTeX 作者標記

- `†`：共同一作；
- `*`：通訊作者；
- `†*`：同時具有兩種身份。

這些標記只在內存中的匹配和顯示副本里處理，不會寫回 BibTeX。頂欄“BibTeX 編寫說明”提供完全虛構的 `example.bib` 下載。

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

## 成果類型分組

| BibTeX 類型                                             | 界面分組                   |
| ----------------------------------------------------- | ---------------------- |
| `article`                                             | 期刊論文 / Journal article |
| `inproceedings`、`conference`                          | 會議論文 / Conference      |
| `patent`                                              | 專利 / Patent            |
| `bachelorthesis`、`mastersthesis`、`phdthesis`、`thesis` | 學位論文 / Thesis          |

其他類型繼續使用規範化後的原始名稱。

## 引用模板

常用字段：

```text
{title} {venue} {journal} {volume} {number} {pages} {pages-pages}
{year} {doi} {citekey} {publisher} {school}
```

`{venue}` 會根據成果類型選擇合適的期刊、會議、學校或出版社字段。

### 作者字段

```text
{authors}
{authors-family-first}
{authors-initials}
{authors-family-first-initials}
```

- `{authors}` 輸出“名 姓”。
- `{authors-family-first}` 輸出“姓, 名”。
- `-initials` 後綴將名縮寫為首字母。
- **所有作者字段都嚴格保持 BibTeX 原始作者先後順序，絕不會重排作者。**

為兼容已保存模板，舊版 `order`、`form` 和 `max` 參數仍可讀取，但不建議用於新模板。

### 頁碼字段

- `{pages}` 只輸出起始頁，例如 `101`。
- `{pages-pages}` 輸出完整範圍，例如 `101–112`。

字段缺失時會自動跳過；應用同時清理空括號、重複標點和懸空分隔符。舊模板中的 `[[...]]` 仍保持兼容。

### 簡單富文本

- `*文字*`：斜體；
- `**文字**`：加粗。

Markdown、DOCX 和 ODT 保留這些樣式；TXT 自動移除標記，只輸出純文字。預覽會根據當前選擇的格式顯示效果。

```text
{authors-family-first}. *{title}*. {venue}. {volume}(**{number}**): {pages-pages}, {year}.
```

未知佔位符或不成對的粗斜體標記會顯示校驗錯誤。

## 導出格式與編號

- **TXT**：UTF-8 純文本，不含富文本標記。
- **Markdown**：保留 `*斜體*` 和 `**加粗**` 語法。
- **DOCX / ODT**：Times New Roman、10 pt，並使用原生粗體和斜體。

自動編號可以關閉，也可以選擇 `1.` 或 `[1]`。DOCX 和 ODT 會根據實際最長序號前綴計算懸掛縮進，使換行內容與正文起始位置對齊。

應用按當前可見順序導出當前列表。導出面板還可設置標題、代表作標識和編號。

## GH-ScholarBot

ExportMyPub **不會抓取 Google Scholar**。如需引用指標，用戶需要自行部署 [jiaye-wu/GH-ScholarBot](https://github.com/jiaye-wu/GH-ScholarBot/)，然後提供 GitHub 倉庫地址、JSON 基礎目錄地址或完整 `gs_data.json` 地址。

ScholarBot 可補充頭像、單位、研究興趣、總引用、近五年引用、h-index、i10-index、逐年引用和逐篇引用。

成果關聯嚴格遵循：

1. 精確匹配 `google_scholar_id`；
2. 唯一的“規範化標題 + 年份”精確匹配；
3. 不自動模糊匹配。

ScholarBot 故障不會影響 BibTeX 篩選和導出。

## 解析與安全限制

項目使用 `src/core/bibtexParser.ts` 中的零依賴狀態機解析器，不執行 BibTeX 內容。支持普通條目、`@string`、`@comment`、`@preamble`、嵌套花括號、引號值、月份宏和 `#` 拼接。

安全上限包括：

- 輸入文件最大 10 MiB；
- 最多 10,000 條成果；
- 每條最多 500 個字段；
- 花括號最多嵌套 128 層；
- 畸形或未閉合輸入直接報錯，不執行或靜默修復。

## 依賴供應鏈策略

- `package.json` 固定精確版本。
- `pnpm-lock.yaml` 記錄 npm SHA-512 完整性。
- `.npmrc` 禁止依賴生命週期腳本並校驗存儲完整性。
- `pnpm-workspace.yaml` 保持空的 `onlyBuiltDependencies`。
- 新發布版本至少等待 24 小時才允許自動選擇。
- `pnpm audit:prod` 檢查生產依賴已知漏洞。
- 新增或升級包時必須核對官方倉庫、維護者、發佈時間和鎖文件差異。
- 開發服務器保持監聽 `127.0.0.1`，除非明確改變安全模型。

## 技術架構

- React 19、TypeScript、Vite；
- 項目內零依賴 BibTeX 狀態機解析器；
- dnd-kit 拖拽排序；
- `idb` / IndexedDB 本地狀態；
- vite-plugin-pwa / Workbox；
- 項目內 DOCX/ODT ZIP/XML 生成器；
- MiSans Variable Font 與 Fluent/Mica 風格界面。

核心邏輯位於 `src/core/`，可複用 UI 位於 `src/components/`。

## 項目信息

- 版本：`1.0.2606.23`
- 協議：GPLv3
- 作者：Jiaye Wu
- 項目地址：[jiaye-wu/ExportMyPub](https://github.com/jiaye-wu/ExportMyPub)

## 字體

界面使用 WOFF2/WOFF 格式的 MiSans Variable Font，並採用 `font-display: swap`。公開託管或重新分發構建前，請確認字體許可條款。
