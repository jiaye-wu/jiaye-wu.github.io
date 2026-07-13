---
layout: post
title: "[學術工具] L'AcaRadar項目"
date: 2026-03-23 10:20:00
description: PC端谷歌學術檔案追蹤工具
tags:
  - academic tool
  - github
  - google scholar
  - python
  - software
  - windows
  - freeware
categories:
  - development
  - research blog
thumbnail: assets/img/post_covers/LAcaRadar.png
toc:
  sidebar: left
---

閉源的PC端谷歌學術檔案追蹤免費軟件。本項目的代碼倉庫位於 [GitHub](https://github.com/jiaye-wu/AcaRadar)。

# L'AcaRadar

**L'AcaRadar** 是一款輕量、本地優先的學術動態跟蹤工具，用於通過 Google Scholar 監測並呈現研究人員的引用指標和論文更新。它可以作為個人學術儀表盤，幫助您持續關注學者的學術發展。

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/LAcaRadar.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## 核心功能

* **學者監測**：跟蹤總引用數、h-index、i10-index 和論文總數等關鍵指標。

* **指標對比**：自動計算最近一次抓取與上一條記錄之間的差值，突出顯示學術指標的增長，例如引用數 `+10`。

* **論文亮點**：顯示每位學者的最高引用論文，以及按年份判斷的最新論文。

* **多標籤管理**：使用靈活的標籤系統整理關注的學者，並按特定分組或研究方向篩選列表。

* **防封禁機制**：提供可調節的請求延遲滑塊，用於控制請求頻率，降低觸發 Google Scholar 反爬蟲機制的風險。

* **篩選與排序**：使用一個或多個標籤篩選學者，再按引用數、h-index、i10-index、論文數或姓名，對當前顯示的列表進行升序或降序排列。

* **搜索與刷新控制**：按學者姓名或 Google Scholar ID 搜索；可單獨刷新某位學者，也可依次更新完整列表。

* **CSV 導入、備份與排名導出**：批量導入學者和標籤，導出可用於恢復的 CSV 備份，或導出當前顯示的排名以供報告和分析使用。

* **回收站**：刪除的學者會保留在本地，以便日後恢復；如有需要，也可永久刪除。

* **隱私與持久化**：所有數據均以 JSON 格式保存在本地，學者頭像也會緩存在您的電腦上，以減少網絡請求。

* **國際化（i18n）**：支持簡體中文、繁體中文、美式英語和英式英語之間的動態切換，並保存語言選擇。

## 安裝與更新

* **最低要求**：Microsoft Windows 10/11 x64，最低分辨率為 1366×768。Linux AMD64 版本即將推出。

* **安裝**：下載編譯好的 Windows `.exe` 發佈文件，並將其放在一個專用且可寫的文件夾中。發佈包不包含主程序源代碼。

* **更新**：查看 **Releases** 頁面，下載並替換原有 `.exe` 文件。

* * *

## 致謝

本項目使用 [Python](https://www.python.org/) 和 [Flet](https://flet.dev/) 構建，並採用 [MiSans](https://hyperos.mi.com/font) 可變字體。

* * *

## 重要免責聲明

**開發者聲明**：我是一名個人非專業開發者。本工具主要用於滿足我個人的學術動態跟蹤需求。

* **功能請求**：歡迎提出建議，但請理解，我無法保證實現所有功能請求。開發優先級始終以我的個人使用需求為準。

* **錯誤報告**：如果遇到程序錯誤，請使用**英語**通過 GitHub Issues 提交。

* **連接問題**：對於“為什麼無法連接 Google Scholar？”或“為什麼抓取失敗？”之類的問題，我將**不予答覆**。Google Scholar 對網絡環境高度敏感；如遇此類問題，請先檢查您的網絡設置、代理或 VPN 狀態。技術詳情會記錄在應用程序旁的 `acaradar.log` 中。

* **本地化**：本地化鍵值文件與私有的應用程序源代碼分開發布。非常歡迎改進公開的 `locales/` 文件，並可通過 **Pull Request** 提交以供人工審核。

_本項目按“現狀”提供，不作任何形式的保證。_
