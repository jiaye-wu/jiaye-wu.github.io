---
layout: post
title: "[學術工具] SSPROP-NFOL項目"
date: 2018-04-08 23:05:00
description: 基於MATLAB的光學分步傅里葉變換仿真學術工具
tags:
  - academic tool
  - open source
  - github
  - nonlinear optics
  - split-step Fourier method
  - software
categories:
  - development
  - research blog
thumbnail: assets/img/post_covers/github.png
---

開源的通用型對稱分步傅里葉算法MATLAB項目。本項目的代碼倉庫位於[這裡](https://github.com/jiaye-wu/SSPROP-NFOL).

# SSPROP-NFOL

[SSPROP-NFOL](https://github.com/jiaye-wu/SSPROP-NFOL) 是 SSPROP 的增強版 Windows AMD64/X64（已編譯）發行版，由作者維護並個人使用。

SSPROP-NFOL 是一個通用的對稱分步軟件程序，可以直接從 Matlab 調用以求解非線性薛定諤方程。它保證了與 Maryland University 的 Photonics Research Laboratory 最初開發的 SSPROP 相同的效率 (https://www.photonics.umd.edu/software/ssprop/)。

SSPROP-NFOL 是一個**開箱即用的 SSPROP 發行版**，專為 **Windows 10 64位個人電腦/平板電腦**以及**7.5以上版本的較新 MATLAB 64位版本**編譯（測試環境為 MATLAB 64-Bit 9.1.0.441655 R2016b，Windows 10 Spring Creator Update 1803），**並帶有許多獨家新特性和實用功能**。它開箱即用。它提供了使用 _MATLAB MEXW64_ 的傳播算法命令，並支持 _脈衝內拉曼散射（intrapulse Raman scattering）_ 和 _自陡峭效應（self-steepening effect）_ 。其他改進可以在 Changelog.txt 中找到。

SSPROP-NFOL 是 GPL v3 協議下的開源軟件。

# SSPROP-NFOL-DemoCode

[SSPROP-NFOL-DemoCode](https://github.com/jiaye-wu/SSPROP-NFOL-DemoCode) 代碼倉庫展示瞭如何利用 SSPROP-NFOL 項目。這些演示代碼復現了 Govind. P. Agrawal 所著《非線性光纖光學》第5版第3至第5章中展示的許多數值結果。

SSPROP-NFOL-DemoCode 在 **Apache License 2.0** 以及 **"Additional Term of Use"** (https://github.com/jiaye-wu/SSPROP-NFOL-DemoCode/blob/master/README.md) 下獲得許可。**如果您在科學研究中使用它，請遵循這些要求**。

# 作者

**原版 SSPROP** 由 Maryland University 的 Photonics Research Laboratory 開發 (https://www.photonics.umd.edu/software/ssprop/)。

**SSPROP-NFOL** 由 jiaye-wu 維護 (https://github.com/jiaye-wu/SSPROP-NFOL)，位於 master 分支中。

**SSPROP-NFOL-DemoCode** 由 jiaye-wu 維護 (https://github.com/jiaye-wu/SSPROP-NFOL-DemoCode)。

# 引用建議

如果 SSPROP-NFOL 或 SSPROP-NFOL-Examples 幫助您完成了科學研究並發表了論文，SSPROP-NFOL 的作者懇請您引用以下著作。
請參閱作者的學術主頁並選擇相關的著作進行引用。

https://www.researchgate.net/profile/Jiaye_Wu

https://scholar.google.com/citations?user=D2n8tswAAAAJ

# 關於原版SSPROP

光通信中最基本的方程之一是非線性薛定諤方程，它控制著光信號在色散、非線性光纖中的傳播。不幸的是，除了少數特殊情況外，非線性薛定諤方程沒有解析解，必須通過數值方法求解。

SSPROP 是一個通用的對稱分步軟件程序，可以直接從 Matlab 調用以求解非線性薛定諤方程。與在運行時解釋的傳統 Matlab 腳本不同，SSPROP 是用 C 語言編寫的已編譯程序，可以直接從 Matlab 調用。因此，它保留了編譯程序的速度和效率，同時允許訪問 Matlab 全套的繪圖和向量操作程序。基準測試表明，該程序比執行相同計算的等效 Matlab m 文件腳本快10到20倍。

原始項目在 GPL v2 下獲得許可。(https://www.photonics.umd.edu/software/ssprop/)

# 安裝和使用

下載代碼倉庫並將其放置在本地驅動器的固定路徑中，按您的喜好命名。然而，為了避免潛在的故障，請不要在路徑中使用中文字符（無論是簡體還是繁體）或任何空格。（建議：使用 this_is_an_example 而不是 "this is an example"）。

然後將此文件夾（但**不包括**其子文件夾）添加到 MATLAB 路徑設置中。如果您包含了子文件夾，可能會發生衝突。如果您想使用 Windows 的 dll 舊版支持或 Linux 的 mexglx 支持，只需將這些文件複製到根文件夾中即可。

如果在調用 mexw64 函數時發生 "invalid error"，請運行以下代碼行，它們將在整個會話期間保持有效，直到關閉 MATLAB：

`warning off`

`loadlibrary('libfftw3-3.dll','libfftw3.h')`

`warning on`

# SSPROP-NFOL 向量版本 sspropvc.mexw64

SSPROP-NFOL 的向量版本 (sspropvc.mexw64) 求解用於雙折射光纖中傳播的耦合非線性薛定諤方程。該代碼可以在非線性傳播的背景下對雙折射、差分群延遲 (PMD)、偏振相關色散和偏振相關損耗進行建模。

用戶可以根據雙折射拍長是短於還是長於非線性長度，從兩種不同的算法中進行選擇。

已編譯的 mex 文件 (sspropvc.mexw64) 可以使用以下形式之一從 Matlab 中調用：

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma);`

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma,psp,method);`

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma,psp,method,maxiter);`

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma,psp,method,maxiter,tol);`

最後四個參數如果不指定，則假定為默認值。

`u0x, u0y`, 向量 (N), 輸入光場，由兩個長度為 N 的向量時間序列指定。u0x 代表光場複數緩變包絡的 x 分量，u0y 代表相應的 y 分量。這些場應被歸一化，以便 |u0x|^2 + |u0y|^2 為光功率。

`dt`, 標量, 向量 u0 中相鄰點之間的時間增量。

`dz`, 標量, 用於傳播的步長。

`nz`, 標量 (int), 要執行的步數。因此總傳播距離為 L = nz\*dz。

`alphaa, alphab`, 標量或向量 (N), 光纖兩個本徵態的線性功率衰減係數。這裡我們使用標籤“a”和“b”來表示兩個本徵態，它們不需要與 x-y 軸重合。偏振相關損耗通過為 alphaa 和 alphab 使用不同的數值來建模。損耗係數也可以選擇指定為與 u0x 長度相同的向量，在這種情況下，它將被視為描述頻域中波長相關損耗係數 α(ω) 的向量。（可以使用 wspace.m 函數構造具有相應頻率的向量。）

`betapa, betapb`, 向量, 指定光纖每個本徵態 (a, b) 色散的實值向量。可以通過使用適當長度的 betap 向量將色散指定為任意多項式階數。通過使第一個元素 betapa(1) 和 betapb(1) 不相等來容納雙折射。差分群延遲或偏振模色散同樣通過使第二個元素 betapa(2) 和 betapb(2) 不同來處理。（請參閱下面的註釋以獲取更完整的討論。）傳播常數也可以直接通過用與 u0x 長度相同的向量替換多項式參數 betap 來指定。在這種情況下，參數 betap 被視為描述頻域中傳播常數 β(ω) 的向量。（可以使用 wspace.m 函數構造具有相應頻率的向量。）

`gamma`, 標量, 描述光纖非線性係數的實數，與模式有效面積和非線性折射率 n2 有關。

`psp`, 標量或向量 (2), 光纖的主本徵態，指定為包含角度 ψ 和 χ（見上文討論）的 2 元素向量，psp = [ψ ,χ]。如果 psp 是標量，則將其解釋為 ψ，然後 χ 被取為零。這對應於線性雙折射光纖，其軸相對於 x-y 軸成 χ 角度定向。如果完全未指定 psp，它將採用默認值 [0,0]，這意味著光纖本徵態沿 x 和 y 方向線性偏振。

`method`, 字符串, 指定在執行分步計算時使用哪種方法的字符串。識別以下方法“elliptical”或“circular”。當 method = “elliptical” 時，sspropv 將通過將輸入場分解為光纖的（通常是）橢圓本徵態來求解方程。此方法僅適用於雙折射拍長遠短於非線性長度的光纖。當 method = “circular” 時，sspropv 將改為通過將輸入場分解為右旋和左旋圓偏振基底來求解方程。此方法更準確，但要求步長與拍長相比足夠小。

`maxiter`, 標量 (int), 每步進行的最大迭代次數。如果在此迭代次數內解未收斂到所需的容差，將生成一條警告消息。通常這意味著所選的步長太小。（默認值 = 4）

`tol`, 標量, 收斂容差：控制在每步執行對稱分步迭代時，解必須收斂到什麼程度。（默認值 = 10–5。）

參數定義與原版 SSPROP 相同，參考：Photonics Research Lab, Maryland University.

# SSPROP-NFOL 標量版本 sspropc.mexw64

SSPROP 的標量版本使用對稱分步傅里葉方法求解標量非線性薛定諤方程。它允許對色散和損耗進行幾乎任意的指定，並且它包含了對 _脈衝內拉曼響應時間（intrapulse Raman response time）_ 和 _光學自陡峭效應（optical self-steepening effect）_ 的簡單近似。

已編譯的 mex 文件 (sspropc.mexw64) 可以使用以下形式之一從 Matlab 中調用：

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr,to);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr,to,maxiter);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr,to,maxiter,tol);`

最後三個參數如果不指定，則假定為默認值。

sspropc 也可以使用單個輸入參數來調用，以指定特定於 FFTW 程序的選項：

`sspropc -option`

`u0`, 向量 (N), 輸入光場，指定為長度為 N 的向量時間序列。u0 代表光場複數緩變包絡。u0 應被歸一化，以便 |u0|^2 為光功率。

`dt`, 標量, 向量 u0 中相鄰點之間的時間增量。

`dz`, 標量, 用於傳播的步長。

`nz`, 標量 (int), 要執行的步數。因此總傳播距離為 L = nz\*dz。

`alpha`, 標量或向量 (N), 線性功率衰減係數。具體來說，如果介質被連續波 (CW) 光激發，功率應隨距離衰減為 P(z) = P(0)exp(-α*z)。注意：這意味著場衰減為 exp(-α*z/2)。損耗係數 alpha 也可以選擇指定為與 u0 長度相同的向量，在這種情況下，它被視為描述頻域中波長相關損耗係數 α(ω) 的向量。（可以使用 wspace.m 函數構造具有相應頻率的向量。）

`betap`, 向量, 指定介質色散特性的實值向量。可以通過使用適當長度的 betap 向量將色散指定為任意多項式階數。在大多數情況下，非線性薛定諤方程是在以群速度移動的參考系中利用緩變包絡近似求解的。在這種情況下，betap 向量的前兩個元素 (β0 和 β1) 應設置為零。第一個非零項 betap(3) 將代表 β2，即群速度色散。傳播常數也可以直接通過用與 u0 長度相同的向量替換多項式參數 betap 來指定。在這種情況下，參數 betap 被視為描述頻域中傳播常數 β(ω) 的向量。（可以使用 wspace.m 函數構造具有相應頻率的向量。）

`gamma`, 標量, 描述光纖非線性係數的實數，與模式有效面積和非線性折射率 n2 有關。

`tr`, 標量, 拉曼響應時間。（默認值 = 0）

`t0`, 標量, 光週期時間 (= 1/f)。（默認值 = 0）

`maxiter`, 標量 (int), 每步進行的最大迭代次數。如果在此迭代次數內解未收斂到所需的容差，將生成一條警告消息。通常這意味著所選的步長太小。（默認值 = 4）

`tol`, 標量, 收斂容差：控制在每步執行對稱分步迭代時，解必須收斂到什麼程度。（默認值 = 10–5。）

參數定義與原版 SSPROP 相同，參考：Photonics Research Lab, Maryland University.
https://www.photonics.umd.edu/software/ssprop/scalar-version/

# 脈衝產生

**高斯脈衝 (Gaussian Pulse)**

`u = gaussian (t);`

`u = gaussian (t,tc);`

`u = gaussian (t,tc,T0);`

`u = gaussian (t,tc,T0,P0);`

`u = gaussian (t,tc,T0,P0,m);`

`u = gaussian (t,tc,T0,P0,m,C);`

`t`, 計算 u 的時間向量

`tc`, 脈衝中心（默認值 = 0）

`T0`, 脈衝 1/e 強度處的半寬（默認值 = 1）

`P0`, 脈衝峰值強度（t=t0 時 |u|^2）（默認值 = 1）

`m`, 高斯階數（默認值 = 1）

`C`, 啁啾參數（默認值 = 0）

**雙曲正割脈衝 (Sech Pulse)**

`u = sechpulse (t);`

`u = sechpulse (t,tc);`

`u = sechpulse (t,tc,T0);`

`u = sechpulse (t,tc,T0,P0);`

`u = sechpulse (t,tc,T0,P0,C);`

`t`, 計算 u 的時間向量

`tc`, 脈衝中心（默認值 = 0）

`T0`, 脈衝 1/e 強度處的半寬（默認值 = 1）

`P0`, 脈衝峰值強度（t=t0 時 |u|^2）（默認值 = 1）

`C`, 啁啾參數（默認值 = 0）

**孤子脈衝 (Soliton Pulse)**

`u = solitonpulse (t);`

`u = solitonpulse (t,tc);`

`u = solitonpulse (t,tc,epsilon);`

`u = solitonpulse (t,tc,epsilon,N);`

`t`, 計算 u 的時間向量

`tc`, 脈衝中心（默認值 = 0）

`epsilon`, 孤子比例因子（默認值 = 1），注意：使 epsilon=2\*acosh(sqrt(2)) 可得到 FWHM = 1

`N`, 孤子階數（默認值 = 1）
