---
layout: post
title: "[学术工具] SSPROP-NFOL项目"
date: 2018-04-08 23:05:00
description: 基于MATLAB的光学分步傅里叶变换仿真学术工具
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
toc:
  sidebar: left
---

开源的通用型对称分步傅里叶算法MATLAB项目。本项目的代码仓库位于[这里](https://github.com/jiaye-wu/SSPROP-NFOL).

# SSPROP-NFOL

[SSPROP-NFOL](https://github.com/jiaye-wu/SSPROP-NFOL) 是 SSPROP 的增强版 Windows AMD64/X64（已编译）发行版，由作者维护并个人使用。

SSPROP-NFOL 是一个通用的对称分步软件程序，可以直接从 Matlab 调用以求解非线性薛定谔方程。它保证了与 Maryland University 的 Photonics Research Laboratory 最初开发的 SSPROP 相同的效率 (https://www.photonics.umd.edu/software/ssprop/)。

SSPROP-NFOL 是一个**开箱即用的 SSPROP 发行版**，专为 **Windows 10 64位个人电脑/平板电脑**以及**7.5以上版本的较新 MATLAB 64位版本**编译（测试环境为 MATLAB 64-Bit 9.1.0.441655 R2016b，Windows 10 Spring Creator Update 1803），**并带有许多独家新特性和实用功能**。它开箱即用。它提供了使用 _MATLAB MEXW64_ 的传播算法命令，并支持 _脉冲内拉曼散射（intrapulse Raman scattering）_ 和 _自陡峭效应（self-steepening effect）_ 。其他改进可以在 Changelog.txt 中找到。

SSPROP-NFOL 是 GPL v3 协议下的开源软件。

# SSPROP-NFOL-DemoCode

[SSPROP-NFOL-DemoCode](https://github.com/jiaye-wu/SSPROP-NFOL-DemoCode) 代码仓库展示了如何利用 SSPROP-NFOL 项目。这些演示代码复现了 Govind. P. Agrawal 所著《非线性光纤光学》第5版第3至第5章中展示的许多数值结果。

SSPROP-NFOL-DemoCode 在 **Apache License 2.0** 以及 **"Additional Term of Use"** (https://github.com/jiaye-wu/SSPROP-NFOL-DemoCode/blob/master/README.md) 下获得许可。**如果您在科学研究中使用它，请遵循这些要求**。

# 作者

**原版 SSPROP** 由 Maryland University 的 Photonics Research Laboratory 开发 (https://www.photonics.umd.edu/software/ssprop/)。

**SSPROP-NFOL** 由 jiaye-wu 维护 (https://github.com/jiaye-wu/SSPROP-NFOL)，位于 master 分支中。

**SSPROP-NFOL-DemoCode** 由 jiaye-wu 维护 (https://github.com/jiaye-wu/SSPROP-NFOL-DemoCode)。

# 引用建议

如果 SSPROP-NFOL 或 SSPROP-NFOL-Examples 帮助您完成了科学研究并发表了论文，SSPROP-NFOL 的作者恳请您引用以下著作。
请参阅作者的学术主页并选择相关的著作进行引用。

https://www.researchgate.net/profile/Jiaye_Wu

https://scholar.google.com/citations?user=D2n8tswAAAAJ

# 关于原版SSPROP

光通信中最基本的方程之一是非线性薛定谔方程，它控制着光信号在色散、非线性光纤中的传播。不幸的是，除了少数特殊情况外，非线性薛定谔方程没有解析解，必须通过数值方法求解。

SSPROP 是一个通用的对称分步软件程序，可以直接从 Matlab 调用以求解非线性薛定谔方程。与在运行时解释的传统 Matlab 脚本不同，SSPROP 是用 C 语言编写的已编译程序，可以直接从 Matlab 调用。因此，它保留了编译程序的速度和效率，同时允许访问 Matlab 全套的绘图和向量操作程序。基准测试表明，该程序比执行相同计算的等效 Matlab m 文件脚本快10到20倍。

原始项目在 GPL v2 下获得许可。(https://www.photonics.umd.edu/software/ssprop/)

# 安装和使用

下载代码仓库并将其放置在本地驱动器的固定路径中，按您的喜好命名。然而，为了避免潜在的故障，请不要在路径中使用中文字符（无论是简体还是繁体）或任何空格。（建议：使用 this_is_an_example 而不是 "this is an example"）。

然后将此文件夹（但**不包括**其子文件夹）添加到 MATLAB 路径设置中。如果您包含了子文件夹，可能会发生冲突。如果您想使用 Windows 的 dll 旧版支持或 Linux 的 mexglx 支持，只需将这些文件复制到根文件夹中即可。

如果在调用 mexw64 函数时发生 "invalid error"，请运行以下代码行，它们将在整个会话期间保持有效，直到关闭 MATLAB：

`warning off`

`loadlibrary('libfftw3-3.dll','libfftw3.h')`

`warning on`

# SSPROP-NFOL 向量版本 sspropvc.mexw64

SSPROP-NFOL 的向量版本 (sspropvc.mexw64) 求解用于双折射光纤中传播的耦合非线性薛定谔方程。该代码可以在非线性传播的背景下对双折射、差分群延迟 (PMD)、偏振相关色散和偏振相关损耗进行建模。

用户可以根据双折射拍长是短于还是长于非线性长度，从两种不同的算法中进行选择。

已编译的 mex 文件 (sspropvc.mexw64) 可以使用以下形式之一从 Matlab 中调用：

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma);`

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma,psp,method);`

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma,psp,method,maxiter);`

`u1 = sspropvc(u0x,u0y,dt,dz,nz,alphaa,alphab,betapa,betapb,gamma,psp,method,maxiter,tol);`

最后四个参数如果不指定，则假定为默认值。

`u0x, u0y`, 向量 (N), 输入光场，由两个长度为 N 的向量时间序列指定。u0x 代表光场复数缓变包络的 x 分量，u0y 代表相应的 y 分量。这些场应被归一化，以便 |u0x|^2 + |u0y|^2 为光功率。

`dt`, 标量, 向量 u0 中相邻点之间的时间增量。

`dz`, 标量, 用于传播的步长。

`nz`, 标量 (int), 要执行的步数。因此总传播距离为 L = nz\*dz。

`alphaa, alphab`, 标量或向量 (N), 光纤两个本征态的线性功率衰减系数。这里我们使用标签“a”和“b”来表示两个本征态，它们不需要与 x-y 轴重合。偏振相关损耗通过为 alphaa 和 alphab 使用不同的数值来建模。损耗系数也可以选择指定为与 u0x 长度相同的向量，在这种情况下，它将被视为描述频域中波长相关损耗系数 α(ω) 的向量。（可以使用 wspace.m 函数构造具有相应频率的向量。）

`betapa, betapb`, 向量, 指定光纤每个本征态 (a, b) 色散的实值向量。可以通过使用适当长度的 betap 向量将色散指定为任意多项式阶数。通过使第一个元素 betapa(1) 和 betapb(1) 不相等来容纳双折射。差分群延迟或偏振模色散同样通过使第二个元素 betapa(2) 和 betapb(2) 不同来处理。（请参阅下面的注释以获取更完整的讨论。）传播常数也可以直接通过用与 u0x 长度相同的向量替换多项式参数 betap 来指定。在这种情况下，参数 betap 被视为描述频域中传播常数 β(ω) 的向量。（可以使用 wspace.m 函数构造具有相应频率的向量。）

`gamma`, 标量, 描述光纤非线性系数的实数，与模式有效面积和非线性折射率 n2 有关。

`psp`, 标量或向量 (2), 光纤的主本征态，指定为包含角度 ψ 和 χ（见上文讨论）的 2 元素向量，psp = [ψ ,χ]。如果 psp 是标量，则将其解释为 ψ，然后 χ 被取为零。这对应于线性双折射光纤，其轴相对于 x-y 轴成 χ 角度定向。如果完全未指定 psp，它将采用默认值 [0,0]，这意味着光纤本征态沿 x 和 y 方向线性偏振。

`method`, 字符串, 指定在执行分步计算时使用哪种方法的字符串。识别以下方法“elliptical”或“circular”。当 method = “elliptical” 时，sspropv 将通过将输入场分解为光纤的（通常是）椭圆本征态来求解方程。此方法仅适用于双折射拍长远短于非线性长度的光纤。当 method = “circular” 时，sspropv 将改为通过将输入场分解为右旋和左旋圆偏振基底来求解方程。此方法更准确，但要求步长与拍长相比足够小。

`maxiter`, 标量 (int), 每步进行的最大迭代次数。如果在此迭代次数内解未收敛到所需的容差，将生成一条警告消息。通常这意味着所选的步长太小。（默认值 = 4）

`tol`, 标量, 收敛容差：控制在每步执行对称分步迭代时，解必须收敛到什么程度。（默认值 = 10–5。）

参数定义与原版 SSPROP 相同，参考：Photonics Research Lab, Maryland University.

# SSPROP-NFOL 标量版本 sspropc.mexw64

SSPROP 的标量版本使用对称分步傅里叶方法求解标量非线性薛定谔方程。它允许对色散和损耗进行几乎任意的指定，并且它包含了对 _脉冲内拉曼响应时间（intrapulse Raman response time）_ 和 _光学自陡峭效应（optical self-steepening effect）_ 的简单近似。

已编译的 mex 文件 (sspropc.mexw64) 可以使用以下形式之一从 Matlab 中调用：

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr,to);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr,to,maxiter);`

`u1 = sspropc(u0,dt,dz,nz,alpha,betap,gamma,tr,to,maxiter,tol);`

最后三个参数如果不指定，则假定为默认值。

sspropc 也可以使用单个输入参数来调用，以指定特定于 FFTW 程序的选项：

`sspropc -option`

`u0`, 向量 (N), 输入光场，指定为长度为 N 的向量时间序列。u0 代表光场复数缓变包络。u0 应被归一化，以便 |u0|^2 为光功率。

`dt`, 标量, 向量 u0 中相邻点之间的时间增量。

`dz`, 标量, 用于传播的步长。

`nz`, 标量 (int), 要执行的步数。因此总传播距离为 L = nz\*dz。

`alpha`, 标量或向量 (N), 线性功率衰减系数。具体来说，如果介质被连续波 (CW) 光激发，功率应随距离衰减为 P(z) = P(0)exp(-α*z)。注意：这意味着场衰减为 exp(-α*z/2)。损耗系数 alpha 也可以选择指定为与 u0 长度相同的向量，在这种情况下，它被视为描述频域中波长相关损耗系数 α(ω) 的向量。（可以使用 wspace.m 函数构造具有相应频率的向量。）

`betap`, 向量, 指定介质色散特性的实值向量。可以通过使用适当长度的 betap 向量将色散指定为任意多项式阶数。在大多数情况下，非线性薛定谔方程是在以群速度移动的参考系中利用缓变包络近似求解的。在这种情况下，betap 向量的前两个元素 (β0 和 β1) 应设置为零。第一个非零项 betap(3) 将代表 β2，即群速度色散。传播常数也可以直接通过用与 u0 长度相同的向量替换多项式参数 betap 来指定。在这种情况下，参数 betap 被视为描述频域中传播常数 β(ω) 的向量。（可以使用 wspace.m 函数构造具有相应频率的向量。）

`gamma`, 标量, 描述光纤非线性系数的实数，与模式有效面积和非线性折射率 n2 有关。

`tr`, 标量, 拉曼响应时间。（默认值 = 0）

`t0`, 标量, 光周期时间 (= 1/f)。（默认值 = 0）

`maxiter`, 标量 (int), 每步进行的最大迭代次数。如果在此迭代次数内解未收敛到所需的容差，将生成一条警告消息。通常这意味着所选的步长太小。（默认值 = 4）

`tol`, 标量, 收敛容差：控制在每步执行对称分步迭代时，解必须收敛到什么程度。（默认值 = 10–5。）

参数定义与原版 SSPROP 相同，参考：Photonics Research Lab, Maryland University.
https://www.photonics.umd.edu/software/ssprop/scalar-version/

# 脉冲产生

**高斯脉冲 (Gaussian Pulse)**

`u = gaussian (t);`

`u = gaussian (t,tc);`

`u = gaussian (t,tc,T0);`

`u = gaussian (t,tc,T0,P0);`

`u = gaussian (t,tc,T0,P0,m);`

`u = gaussian (t,tc,T0,P0,m,C);`

`t`, 计算 u 的时间向量

`tc`, 脉冲中心（默认值 = 0）

`T0`, 脉冲 1/e 强度处的半宽（默认值 = 1）

`P0`, 脉冲峰值强度（t=t0 时 |u|^2）（默认值 = 1）

`m`, 高斯阶数（默认值 = 1）

`C`, 啁啾参数（默认值 = 0）

**双曲正割脉冲 (Sech Pulse)**

`u = sechpulse (t);`

`u = sechpulse (t,tc);`

`u = sechpulse (t,tc,T0);`

`u = sechpulse (t,tc,T0,P0);`

`u = sechpulse (t,tc,T0,P0,C);`

`t`, 计算 u 的时间向量

`tc`, 脉冲中心（默认值 = 0）

`T0`, 脉冲 1/e 强度处的半宽（默认值 = 1）

`P0`, 脉冲峰值强度（t=t0 时 |u|^2）（默认值 = 1）

`C`, 啁啾参数（默认值 = 0）

**孤子脉冲 (Soliton Pulse)**

`u = solitonpulse (t);`

`u = solitonpulse (t,tc);`

`u = solitonpulse (t,tc,epsilon);`

`u = solitonpulse (t,tc,epsilon,N);`

`t`, 计算 u 的时间向量

`tc`, 脉冲中心（默认值 = 0）

`epsilon`, 孤子比例因子（默认值 = 1），注意：使 epsilon=2\*acosh(sqrt(2)) 可得到 FWHM = 1

`N`, 孤子阶数（默认值 = 1）
