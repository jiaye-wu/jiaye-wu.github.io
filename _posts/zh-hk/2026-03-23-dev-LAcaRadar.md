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

**L'AcaRadar** 是一款輕量級、本地優先的學術追蹤工具，旨在通過 Google Scholar 監控和可視化研究人員的引用指標和出版物更新。它可作為個人儀表板，對學者的學術成長保持“雷達”追蹤。

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/LAcaRadar.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## 核心功能

* **學者監控**：追蹤關鍵指標，包括總引用次數、h-index、i10-index 和總出版物數量。

* **指標比較**：自動計算最新抓取和先前記錄之間的差異，突出學術增長（例如，`+10` 次引用）。

* **多標籤管理**：使用靈活的標籤系統組織您監控的學者。按特定組或研究興趣篩選列表。

* **防封鎖機制**：具有可自定義的延遲滑塊來管理請求頻率，降低被 Google Scholar 反爬蟲措施封鎖的風險。

* **高級排序**：按引用次數、h-index、出版物數量、姓名或組對您的學術列表進行排序。

* **數據導出**：將您的學者排名列表導出到 CSV 文件以進行外部報告或分析。

* **隱私與持久化**：所有數據均以 JSON 格式存儲在本地，學者頭像緩存在您的機器上，以最大程度地減少網絡請求。

* **國際化 (i18n)**：支持動態語言切換（目前包括英語和中文）並具有狀態持久性。

## 安裝與更新

* **最低要求**：Microsoft Windows 10/11 X64，最低分辨率 1366x768。Linux AMD64 版本即將推出。

* **安裝**：下載 zip 壓縮包（`.zip`、`.z01`、`.z02` 等）並解壓。將提取出的 `.exe` 文件放在一個專用文件夾中。

* **更新**：查看 **Releases** 頁面，下載並替換 `.exe` 文件。

## 常見問題 (FAQ)

- 刷新/獲取後最後更新日期沒有變化？

> 檢查您與 Google 的網絡連接。或者，同時發出的請求過多觸發了 Google 的封鎖。在後一種情況下，請稍後對該位學者重試（而不是全局刷新）。

* * *

## 致謝

本項目使用 [Python](https://www.python.org/) 中的 [Flet](https://flet.dev/) 構建，並採用 [MiSans](https://hyperos.mi.com/font) 可變字體。

* * *

## 重要免責聲明

**開發者聲明** 我是一名個人非專業開發者。創建此工具主要是為了滿足我自己的學術追蹤需求。

* **功能請求**：雖然歡迎提出建議，但請理解我無法保證實現任何請求的功能。將始終優先考慮我個人的使用需求。

* **錯誤報告**：如果您遇到 bug，請通過 **GitHub Issues** 使用 **English 英語** 提交。

* **連接問題**：我**不會**回答諸如“為什麼我無法連接到 Google Scholar？”或“為什麼獲取失敗？”之類的問題。Google Scholar 對網絡環境高度敏感。如果您遇到這些問題，**請首先檢查您的網絡設置、代理或 VPN 狀態。**

* **本地化**：非常感謝對 `locales/` 目錄中其他語言的貢獻。請通過 **Pull Requests** 提交您的改進。

_本項目按“原樣”提供，不提供任何形式的保證。_
