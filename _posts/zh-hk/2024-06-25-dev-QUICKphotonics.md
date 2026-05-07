---
layout: post
title: "[學術工具] QUICKphotonics項目"
date: 2024-06-25 13:06:00
description: 基於Excel和MATLAB的光子學單位換算工具
tags:
  - academic tool
  - github
  - nonlinear optics
  - nanophotonics
  - software
  - commandline tool
  - unit conversion
  - quick calculation
categories:
  - development
  - research blog
thumbnail: assets/img/post_covers/QUICKphotonics.png
---

基於Excel和MATLAB的跨平臺光子學單位換算工具。本項目的代碼倉庫位於[GitHub](https://github.com/jiaye-wu/QUICKphotonics) 和 [MATLAB File Exchange](https://ch.mathworks.com/matlabcentral/fileexchange/168881-quickphotonics?s_tid=ta_fx_results)。

# QUICKphotonics - 光子學快速單位換算工具包 (Quick UnIt Conversion Kit for Photonics)

## 簡介

[**QUICKphotonics.mlappinstall**](https://github.com/jiaye-wu/QUICKphotonics/raw/refs/heads/main/QUICKphotonics.mlappinstall) (Quick UnIt Conversion Kit for Photonics) 是一個基於 MATLAB、命令行風格、**輕量級**且**模塊化**（可擴展框架）的光學和光子學單位換算工具。它目前是由 [Jiaye Wu](https://jiaye-wu.github.io) 維護的專有軟件，並根據 [MIT license](https://opensource.org/license/mit) 分發。

- 要使用此 MATLAB Toolbox App 二進制文件，必須安裝等於或高於 R2022b (9.13) 的 MATLAB 版本。舊版本未經測試。
- 安裝 **QUICKphotonics.mlappinstall** 並在命令窗口中輸入 `QUICKphotonics` 或 `QUICK` 即可啟動。
- 在某些情況下，重啟 MATLAB 後，您需要在頂部的 _APP_ 選項卡 > _我的應用_ (My app) 中手動找到並點擊此應用程序以（重新）啟用它。

**QUICKphotonics Excel.xltx** 是該 MATLAB 應用程序的 Excel 版本。

- 此 Excel 計算器不含宏（macro-free）。所有功能均由 Excel 函數實現。
- 要使用該工具，必須安裝辦公套件（Microsoft Office/WPS Office/LibreOffice 等）。建議使用 Microsoft Office 365 以獲得最佳兼容性。
- 該工具作為 Excel 模板 (.xltx) 啟動，這意味著每次都會創建一個新文件 (.xlsx)。您可以將 .xlsx 文件保存到工作目錄中。更改不會保存到模板中。
- **使用方法：** 下載 **QUICKphotonics Excel.xltx** 文件以使用它，或者在 **QUICKphotonics MATLAB** 中使用命令 `Excel` 或 `excel`。

## 它解決了什麼問題/痛點？我為什麼需要這個工具？

該軟件的目的是**在實驗或學術討論中快速查找**所需數值。

光學和光子學中常見的換算和計算，例如“特定波段下頻率差到波長差的轉換”、“光子能量”、“特定角度下的菲涅爾反射（Fresnel reflection）”等，雖然簡單，**但是**：

- 按需編寫腳本函數需要查找公式/常數，甚至進行驗證。
- 隨後，您的函數文件可能會變得太多且不集中。在以後的項目中，您可能不記得去哪裡找它們。
- 每次使用舊腳本時，您可能都必須檢查以前的定義（函數名、使用的單位、數值的順序）。如果不加註意，結果可能會差幾個數量級。

使用 QUICKphotonics MATLAB 工具箱：

- 您不需要記住把文件放在了哪裡。一旦安裝，只需在命令窗口中使用 `QUICKphotonics` 或 `QUICK` 調用該工具箱，或者在您的 _MATLAB apps_ 選項卡中找到它。
- 您不需要記住命令並處理單位。命令具有**靈活的拼寫和自動單位識別功能**，使用起來非常直觀。

## 反饋與致謝

錯誤報告和新功能請求可在我的 GitHub project page 上提出。

此工具包基於框架且模塊化。_滿足以下條件時會考慮新功能請求_：

- 它被廣泛使用。
- 它不涉及複雜的算法和計算能力。
- 它要求輸入參數的數量少於4個。（考慮1--3個，以便於記憶。）

**如果您覺得我的工具有用**，請在合適的情況下考慮引用我的學術著作 (academic works)。

**注意：**

- 作者對任何計算錯誤**不**承擔責任。
- 本 Markdown 文件的其餘部分**僅適用於 QUICKphotonics MATLAB 版本**。

## 功能：引入 _flexiCommand_

引入 **flexiCommand**，這是一種_直觀_且_易於記憶_的命令類型，具有**自動單位識別**和**靈活元素順序**的功能。

一個 **flexiCommand** 由4~5個部分組成：

- **head**：前置命令頭（僅在某些命令中存在，例如 `energy`、`reflect`、`cav`、`power` 等）
- **conv_source**：轉換源的[保留字](#保留字)，例如 `freq`
- **unit_source**：轉換源的[單位](#支持的單位)，例如 `THz`。單位會自動識別。
- **conv_target**：`2` + (轉換目標的[保留字](#保留字))，例如 `2wl`。這裡的 `2` 代表“到 (to)”。
- **unit_source**：轉換目標的[單位](#支持的單位)，例如 `nm`。單位會自動識別。

除了 **head** 之外，**flexiCommand** 中其餘部分的**順序並不重要**。
為了避免因歧義引起的任何錯誤，請不要使用類似 `t`（時間）緊挨著 `Hz`，或 `nm` 緊挨著 `J` 的組合。

例如，`wlnm2freqTHz 1550`、`nmTHzwl2freq 1550`、`wl2freqTHznm 1550` 被視為相同的命令，它的作用與 `wlum2freqTHz 1.550` 相同，都是將 1550 nm 轉換為以 THz 為單位的頻率。

**注意：**

- 所有命令都區分大小寫。
- 只要元素準確完整，命令可以容忍不相關的多餘字母。

## 簡單命令：

- 啟動 **QUICKphotonics Excel**：`excel` / `Excel`
- 檢查更新：`update` / `upgrade`
- 訪問項目 GitHub 頁面：`github` / `GitHub` / `project`
- 訪問項目博客：`blog`
- 查看當前版本：`version` / `ver`
- 查看更新日誌：`changelog`
- 在**命令行中**打印幫助和支持的函數：`help` / `functions` / `commands` / `flexiCommand` / `flexiCMD`
- 獲取幫助和支持的函數的 **Markdown 文件**：`help-md` / `help-markdown`。請**不要**修改此文件的內容！
- **在線**獲取幫助和支持的函數：`help-ol` / `help-online`
- 獲取光學常數：`constants`
- 獲取作者信息/致謝/許可證/重要提示：`about` / `info` / `credits` / `license` / `licence`
- 重啟或返回標題頁：`restart` / `clear`
- 關閉/終止程序：`close` / `exit`

## 單位換算與計算

### 1. `flexiCommand <value-1>`

#### 1.1 波長和頻率換算：`wl(wl_unit)2freq(freq_unit) <value>`

(wl_unit): `*m` (nm, um, m 等) 見[單位](#支持的單位)。

(freq_unit): `*Hz` (THz, GHz, Hz 等) 見[單位](#支持的單位)。

例如，將 1550 nm 轉換為 THz，命令是 `wlnm2freqTHz 1550`（或 `wlm2freqTHz 1550e-9` 或其他單位）。

同樣，`freqTHz2wlnm 193` 表示將 193 THz 轉換為 nm。

#### 1.2 頻率和時間週期換算：`freq(freq_unit)2t(t_unit) <value>`

(t_unit): `*s` (ps, ns, ms 等) 見[單位](#支持的單位)。

例如，將 5 GHz 轉換為以 ps 為單位的時間，命令是 `freqGHz2tps 5`（或 `freqGHz2tps 5e9` 或其他單位）。

同樣，`tps2freqGHz 4` 表示將 4 ps 轉換為 GHz。

#### 1.3 功率換算：`power(mW/dBm)2(dBm/mW) <value>`

此命令也支持其他瓦特量級，用戶可以將 `mW` 替換為 `W`、`uW` 等。

例如，將 3 dBm 轉換為 mW，命令是 `powerdBm2mW 3`。

同樣，`powermW2dBm 3` 表示將 3 mW 轉換為 dBm。

#### 1.4 分貝和線性刻度換算：`lin2dB <value>`

例如，將因子 4 的線性刻度轉換為 dB，命令是 `lin2dB 4`。

同樣，`dB2lin 3` 表示將 3 dB 轉換為線性刻度。

#### 1.5 光子能量與頻率/波長：`photonfreq(freq_unit)2E(energy_unit) <freq_value>` 或 `photonwl(wl_unit)2E(energy_unit) <wl_value>`

對於光子能量，可以使用 `*J`（如 `mJ`、`uJ` 等）或 `eV`。

對於反向換算，命令類似：`photonfreq(freq_unit)2E(energy_unit) <freq_value>` 或 `photonwl(wl_unit)2E(energy_unit) <wl_value>`。

對於角頻率 (angular frequency)，將 `freq` 替換為 `afreq`，並且省略單位（默認值：rad/s）

對於反向換算，`photonE(energy_unit)2wl(wl_unit) <wl_value>`、`photonE(energy_unit)2freq(freq_unit) <freq_value>`、`photonE(energy_unit)2afreq <afreq_value>`。

#### 1.6 \*J 和 eV 之間的能量換算：`energyeV2(energy_unit) <value>` 和 `energy(energy_unit)2eV <value>`

`energyeV2J <value>` 將 eV 轉換為 J，`energymJ2eV <value>` 將 mJ 轉換為 eV。

### 2. `flexiCommand <value-1> <value-2>`

#### 2.1 頻率/波長差轉換為波長/頻率差

有兩種情況。

- 已知 2 個頻率/波長並想求波長/頻率差（例如，給定 $f_1$ 和 $f_2$，求 $\Delta \lambda$）：`dfreq(freq_unit)2dwl(wl_unit) <freq1> <freq2>` 或 `dwl(wl_unit)2dfreq(freq_unit) <wl1> <wl2>`，例如 `dwlnm2dfreqTHz 1540 1545`
- 已知間隔頻率/波長和波段（中心頻率/波長），並想求另一域中的差值：
  - `dfreq(freq_unit)2dwl(wl_unit)@wl <dfreq> <wl_central>`（在 $\lambda_c$ 附近給定 $\Delta f$，求 $\Delta \lambda$）
  - `dfreq(freq_unit)2dwl(wl_unit)@freq <dfreq> <freq_central>`（在 $f_c$ 附近給定 $\Delta f$，求 $\Delta \lambda$）
  - `dwl(wl_unit)2dfreq(freq_unit)@wl <dfreq> <wl_central>`（在 $\lambda_c$ 附近給定 $\Delta \lambda$，求 $\Delta f$）
  - `dwl(wl_unit)2dfreq(freq_unit)@freq <dfreq> <freq_central>`（在 $f_c$ 附近給定 $\Delta \lambda$，求 $\Delta f$）

中心頻率/波長的單位應與 (freq_unit) 或 (wl_unit) 相同。

#### 2.2 從波長/頻率/角頻率計算波數：`wl(wl_unit)2wn <n> <wl_value>` / `freq(freq_unit)2wn <n> <value>` / `afreq2wn <n> <value>`

對於角頻率，僅支持 rad/s。對於真空，輸入 `n` 為 1。

#### 2.3 腔自由光譜範圍 (FSR)：`cav(cavlength_unit)2freq(freq_unit) <n_cav> <length_cav>` / `cav(cavlength_unit)2t(period_unit) <n_cav> <length_cav>`

計算所選域和單位中的頻率/時間/波長間隔的 FSR。對於真空，輸入 `n` 為 1。

#### 2.4 從 FSR 計算腔長：`freq(freq_unit)2cav(cavlength_unit) <n_cav> <freq>` / `t(period_unit)2cav(cavlength_unit) <n_cav> <t>`

從 FSR 計算腔長。

### 3. `flexiCommand <value-1> <value-2> <value-3>`

#### 3.1 菲涅爾反射：`reflectDEG <n1> <n2> <angle_DEG>` 或 `reflectRAD <n1> <n2> <angle_RAD>`

例如 `reflectDEG 1.2 1.6 0` 和 `reflectRAD 1.2 1.6 0` 的作用相同。

`n1` 和 `n2` 是兩種介質的折射率，`angle` 是入射角。有三個輸出：兩種偏振下的 $R_s$ 和 $R_p$ 及其平均值 $R_{avg}$。

`reflectDEG` 將入射角視為度數，`reflectRAD` 將入射角視為弧度。

#### 3.2 脈衝激光的峰值功率和平均功率。`peak2pavg(intensity_unit)(temporal_unit)(reprate_unit) <P_peak> <t_pulse> <reprate>` 或 `pavg2peak(intensity_unit)(temporal_unit)(reprate_unit) <P_avg> <t_pulse> <reprate>`

(intensity_unit) 是可選的（可以省略），並在整個輸入和輸出中保持一致。

時間寬度單位為時間（`*s`），重複頻率單位為頻率（`*Hz`）。

例如，`peak2pavgGWpsMHz 0.5 1 16` 表示輸入的峰值功率為 0.5 GW/單位面積，時間寬度為 1 ps，重複頻率為 16 MHz。如果省略 `GHz`，單位將變為 (a.u.)/單位面積。

## 保留字：

- 2 - 到 (to，在一個命令中的兩個變量之間)
- afreq - 角頻率
- cav - 腔長
- dfreq - 頻率差
- dwl - 波長差
- energy - 轉換能量單位
- freq - 頻率
- lin - 線性刻度，無量綱
- pavg - 平均功率
- peak - 峰值功率
- photon - 轉換光子能量
- power - 功率或強度
- reflect - 反射
- t - 時間間隔
- wn - 波數 / 傳播常數
- wl - 波長

## 支持的單位：

- **角頻率:** rad/s
- **角度:** DEG, RAD
- **頻率:** \*Hz (Hz 到 THz)
- **線性能量/功率:** 無量綱或 *W (fW 到 GW) 或 *W/cm^2 (在脈衝激光中)
- **對數刻度:** dB, dBm
- **光子能量:** \*J (fJ 到 GJ), eV
- **波長/腔長:** \*m (am 到 Gm)
