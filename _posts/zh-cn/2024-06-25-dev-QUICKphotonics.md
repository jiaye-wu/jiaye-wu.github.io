---
layout: post
title: "[学术工具] QUICKphotonics项目"
date: 2024-06-25 13:06:00
description: 基于Excel和MATLAB的光子学单位换算工具
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
toc:
  sidebar: left
---

基于Excel和MATLAB的跨平台光子学单位换算工具。本项目的代码仓库位于[GitHub](https://github.com/jiaye-wu/QUICKphotonics) 和 [MATLAB File Exchange](https://ch.mathworks.com/matlabcentral/fileexchange/168881-quickphotonics?s_tid=ta_fx_results)。

# QUICKphotonics - 光子学快速单位换算工具包 (Quick UnIt Conversion Kit for Photonics)

## 简介

[**QUICKphotonics.mlappinstall**](https://github.com/jiaye-wu/QUICKphotonics/raw/refs/heads/main/QUICKphotonics.mlappinstall) (Quick UnIt Conversion Kit for Photonics) 是一个基于 MATLAB、命令行风格、**轻量级**且**模块化**（可扩展框架）的光学和光子学单位换算工具。它目前是由 [Jiaye Wu](https://jiaye-wu.github.io) 维护的专有软件，并根据 [MIT license](https://opensource.org/license/mit) 分发。

- 要使用此 MATLAB Toolbox App 二进制文件，必须安装等于或高于 R2022b (9.13) 的 MATLAB 版本。旧版本未经测试。
- 安装 **QUICKphotonics.mlappinstall** 并在命令窗口中输入 `QUICKphotonics` 或 `QUICK` 即可启动。
- 在某些情况下，重启 MATLAB 后，您需要在顶部的 _APP_ 选项卡 > _我的应用_ (My app) 中手动找到并点击此应用程序以（重新）启用它。

**QUICKphotonics Excel.xltx** 是该 MATLAB 应用程序的 Excel 版本。

- 此 Excel 计算器不含宏（macro-free）。所有功能均由 Excel 函数实现。
- 要使用该工具，必须安装办公套件（Microsoft Office/WPS Office/LibreOffice 等）。建议使用 Microsoft Office 365 以获得最佳兼容性。
- 该工具作为 Excel 模板 (.xltx) 启动，这意味着每次都会创建一个新文件 (.xlsx)。您可以将 .xlsx 文件保存到工作目录中。更改不会保存到模板中。
- **使用方法：** 下载 **QUICKphotonics Excel.xltx** 文件以使用它，或者在 **QUICKphotonics MATLAB** 中使用命令 `Excel` 或 `excel`。

## 它解决了什么问题/痛点？我为什么需要这个工具？

该软件的目的是**在实验或学术讨论中快速查找**所需数值。

光学和光子学中常见的换算和计算，例如“特定波段下频率差到波长差的转换”、“光子能量”、“特定角度下的菲涅尔反射（Fresnel reflection）”等，虽然简单，**但是**：

- 按需编写脚本函数需要查找公式/常数，甚至进行验证。
- 随后，您的函数文件可能会变得太多且不集中。在以后的项目中，您可能不记得去哪里找它们。
- 每次使用旧脚本时，您可能都必须检查以前的定义（函数名、使用的单位、数值的顺序）。如果不加注意，结果可能会差几个数量级。

使用 QUICKphotonics MATLAB 工具箱：

- 您不需要记住把文件放在了哪里。一旦安装，只需在命令窗口中使用 `QUICKphotonics` 或 `QUICK` 调用该工具箱，或者在您的 _MATLAB apps_ 选项卡中找到它。
- 您不需要记住命令并处理单位。命令具有**灵活的拼写和自动单位识别功能**，使用起来非常直观。

## 反馈与致谢

错误报告和新功能请求可在我的 GitHub project page 上提出。

此工具包基于框架且模块化。_满足以下条件时会考虑新功能请求_：

- 它被广泛使用。
- 它不涉及复杂的算法和计算能力。
- 它要求输入参数的数量少于4个。（考虑1--3个，以便于记忆。）

**如果您觉得我的工具有用**，请在合适的情况下考虑引用我的学术著作 (academic works)。

**注意：**

- 作者对任何计算错误**不**承担责任。
- 本 Markdown 文件的其余部分**仅适用于 QUICKphotonics MATLAB 版本**。

## 功能：引入 _flexiCommand_

引入 **flexiCommand**，这是一种_直观_且_易于记忆_的命令类型，具有**自动单位识别**和**灵活元素顺序**的功能。

一个 **flexiCommand** 由4~5个部分组成：

- **head**：前置命令头（仅在某些命令中存在，例如 `energy`、`reflect`、`cav`、`power` 等）
- **conv_source**：转换源的[保留字](#保留字)，例如 `freq`
- **unit_source**：转换源的[单位](#支持的单位)，例如 `THz`。单位会自动识别。
- **conv_target**：`2` + (转换目标的[保留字](#保留字))，例如 `2wl`。这里的 `2` 代表“到 (to)”。
- **unit_source**：转换目标的[单位](#支持的单位)，例如 `nm`。单位会自动识别。

除了 **head** 之外，**flexiCommand** 中其余部分的**顺序并不重要**。
为了避免因歧义引起的任何错误，请不要使用类似 `t`（时间）紧挨着 `Hz`，或 `nm` 紧挨着 `J` 的组合。

例如，`wlnm2freqTHz 1550`、`nmTHzwl2freq 1550`、`wl2freqTHznm 1550` 被视为相同的命令，它的作用与 `wlum2freqTHz 1.550` 相同，都是将 1550 nm 转换为以 THz 为单位的频率。

**注意：**

- 所有命令都区分大小写。
- 只要元素准确完整，命令可以容忍不相关的多余字母。

## 简单命令：

- 启动 **QUICKphotonics Excel**：`excel` / `Excel`
- 检查更新：`update` / `upgrade`
- 访问项目 GitHub 页面：`github` / `GitHub` / `project`
- 访问项目博客：`blog`
- 查看当前版本：`version` / `ver`
- 查看更新日志：`changelog`
- 在**命令行中**打印帮助和支持的函数：`help` / `functions` / `commands` / `flexiCommand` / `flexiCMD`
- 获取帮助和支持的函数的 **Markdown 文件**：`help-md` / `help-markdown`。请**不要**修改此文件的内容！
- **在线**获取帮助和支持的函数：`help-ol` / `help-online`
- 获取光学常数：`constants`
- 获取作者信息/致谢/许可证/重要提示：`about` / `info` / `credits` / `license` / `licence`
- 重启或返回标题页：`restart` / `clear`
- 关闭/终止程序：`close` / `exit`

## 单位换算与计算

### 1. `flexiCommand <value-1>`

#### 1.1 波长和频率换算：`wl(wl_unit)2freq(freq_unit) <value>`

(wl_unit): `*m` (nm, um, m 等) 见[单位](#支持的单位)。

(freq_unit): `*Hz` (THz, GHz, Hz 等) 见[单位](#支持的单位)。

例如，将 1550 nm 转换为 THz，命令是 `wlnm2freqTHz 1550`（或 `wlm2freqTHz 1550e-9` 或其他单位）。

同样，`freqTHz2wlnm 193` 表示将 193 THz 转换为 nm。

#### 1.2 频率和时间周期换算：`freq(freq_unit)2t(t_unit) <value>`

(t_unit): `*s` (ps, ns, ms 等) 见[单位](#支持的单位)。

例如，将 5 GHz 转换为以 ps 为单位的时间，命令是 `freqGHz2tps 5`（或 `freqGHz2tps 5e9` 或其他单位）。

同样，`tps2freqGHz 4` 表示将 4 ps 转换为 GHz。

#### 1.3 功率换算：`power(mW/dBm)2(dBm/mW) <value>`

此命令也支持其他瓦特量级，用户可以将 `mW` 替换为 `W`、`uW` 等。

例如，将 3 dBm 转换为 mW，命令是 `powerdBm2mW 3`。

同样，`powermW2dBm 3` 表示将 3 mW 转换为 dBm。

#### 1.4 分贝和线性刻度换算：`lin2dB <value>`

例如，将因子 4 的线性刻度转换为 dB，命令是 `lin2dB 4`。

同样，`dB2lin 3` 表示将 3 dB 转换为线性刻度。

#### 1.5 光子能量与频率/波长：`photonfreq(freq_unit)2E(energy_unit) <freq_value>` 或 `photonwl(wl_unit)2E(energy_unit) <wl_value>`

对于光子能量，可以使用 `*J`（如 `mJ`、`uJ` 等）或 `eV`。

对于反向换算，命令类似：`photonfreq(freq_unit)2E(energy_unit) <freq_value>` 或 `photonwl(wl_unit)2E(energy_unit) <wl_value>`。

对于角频率 (angular frequency)，将 `freq` 替换为 `afreq`，并且省略单位（默认值：rad/s）

对于反向换算，`photonE(energy_unit)2wl(wl_unit) <wl_value>`、`photonE(energy_unit)2freq(freq_unit) <freq_value>`、`photonE(energy_unit)2afreq <afreq_value>`。

#### 1.6 \*J 和 eV 之间的能量换算：`energyeV2(energy_unit) <value>` 和 `energy(energy_unit)2eV <value>`

`energyeV2J <value>` 将 eV 转换为 J，`energymJ2eV <value>` 将 mJ 转换为 eV。

### 2. `flexiCommand <value-1> <value-2>`

#### 2.1 频率/波长差转换为波长/频率差

有两种情况。

- 已知 2 个频率/波长并想求波长/频率差（例如，给定 $f_1$ 和 $f_2$，求 $\Delta \lambda$）：`dfreq(freq_unit)2dwl(wl_unit) <freq1> <freq2>` 或 `dwl(wl_unit)2dfreq(freq_unit) <wl1> <wl2>`，例如 `dwlnm2dfreqTHz 1540 1545`
- 已知间隔频率/波长和波段（中心频率/波长），并想求另一域中的差值：
  - `dfreq(freq_unit)2dwl(wl_unit)@wl <dfreq> <wl_central>`（在 $\lambda_c$ 附近给定 $\Delta f$，求 $\Delta \lambda$）
  - `dfreq(freq_unit)2dwl(wl_unit)@freq <dfreq> <freq_central>`（在 $f_c$ 附近给定 $\Delta f$，求 $\Delta \lambda$）
  - `dwl(wl_unit)2dfreq(freq_unit)@wl <dfreq> <wl_central>`（在 $\lambda_c$ 附近给定 $\Delta \lambda$，求 $\Delta f$）
  - `dwl(wl_unit)2dfreq(freq_unit)@freq <dfreq> <freq_central>`（在 $f_c$ 附近给定 $\Delta \lambda$，求 $\Delta f$）

中心频率/波长的单位应与 (freq_unit) 或 (wl_unit) 相同。

#### 2.2 从波长/频率/角频率计算波数：`wl(wl_unit)2wn <n> <wl_value>` / `freq(freq_unit)2wn <n> <value>` / `afreq2wn <n> <value>`

对于角频率，仅支持 rad/s。对于真空，输入 `n` 为 1。

#### 2.3 腔自由光谱范围 (FSR)：`cav(cavlength_unit)2freq(freq_unit) <n_cav> <length_cav>` / `cav(cavlength_unit)2t(period_unit) <n_cav> <length_cav>`

计算所选域和单位中的频率/时间/波长间隔的 FSR。对于真空，输入 `n` 为 1。

#### 2.4 从 FSR 计算腔长：`freq(freq_unit)2cav(cavlength_unit) <n_cav> <freq>` / `t(period_unit)2cav(cavlength_unit) <n_cav> <t>`

从 FSR 计算腔长。

### 3. `flexiCommand <value-1> <value-2> <value-3>`

#### 3.1 菲涅尔反射：`reflectDEG <n1> <n2> <angle_DEG>` 或 `reflectRAD <n1> <n2> <angle_RAD>`

例如 `reflectDEG 1.2 1.6 0` 和 `reflectRAD 1.2 1.6 0` 的作用相同。

`n1` 和 `n2` 是两种介质的折射率，`angle` 是入射角。有三个输出：两种偏振下的 $R_s$ 和 $R_p$ 及其平均值 $R_{avg}$。

`reflectDEG` 将入射角视为度数，`reflectRAD` 将入射角视为弧度。

#### 3.2 脉冲激光的峰值功率和平均功率。`peak2pavg(intensity_unit)(temporal_unit)(reprate_unit) <P_peak> <t_pulse> <reprate>` 或 `pavg2peak(intensity_unit)(temporal_unit)(reprate_unit) <P_avg> <t_pulse> <reprate>`

(intensity_unit) 是可选的（可以省略），并在整个输入和输出中保持一致。

时间宽度单位为时间（`*s`），重复频率单位为频率（`*Hz`）。

例如，`peak2pavgGWpsMHz 0.5 1 16` 表示输入的峰值功率为 0.5 GW/单位面积，时间宽度为 1 ps，重复频率为 16 MHz。如果省略 `GHz`，单位将变为 (a.u.)/单位面积。

## 保留字：

- 2 - 到 (to，在一个命令中的两个变量之间)
- afreq - 角频率
- cav - 腔长
- dfreq - 频率差
- dwl - 波长差
- energy - 转换能量单位
- freq - 频率
- lin - 线性刻度，无量纲
- pavg - 平均功率
- peak - 峰值功率
- photon - 转换光子能量
- power - 功率或强度
- reflect - 反射
- t - 时间间隔
- wn - 波数 / 传播常数
- wl - 波长

## 支持的单位：

- **角频率:** rad/s
- **角度:** DEG, RAD
- **频率:** \*Hz (Hz 到 THz)
- **线性能量/功率:** 无量纲或 *W (fW 到 GW) 或 *W/cm^2 (在脉冲激光中)
- **对数刻度:** dB, dBm
- **光子能量:** \*J (fJ 到 GJ), eV
- **波长/腔长:** \*m (am 到 Gm)
