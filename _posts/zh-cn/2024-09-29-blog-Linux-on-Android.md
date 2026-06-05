---
layout: post
title: "[档案] 在Android平板电脑上运行Linux桌面发行版"
date: 2024-09-29 21:01:00
description: 在Android上运行Linux桌面的个人笔记
tags:
  - android
  - open source
  - software
categories:
  - development
  - archive
thumbnail: assets/img/post_covers/android.png
toc:
  sidebar: left
---

本项目的代码仓库位于[https://github.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/](https://github.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/)。

# Android-Termux-Subsystem-for-Linux

本代码仓库是**免 root** 在Android上运行Linux的个人配置集合。将您的Android平板电脑变成一台（更便携的）ARM64 Linux笔记本电脑！

本教程提供以下解决方案：

- **原生** 基于Android-Termux的Linux桌面环境
- 基于Termux的 **PRoot** Linux发行版（在本文中，我们以Ubuntu举例）

**原生**解决方案速度更快，但 **PRoot** 拥有更多的Linux应用支持。

## 参考与致谢

关于如何在Android上运行Linux的教程有很多。然而，根据**您使用的Android版本**和**您安装的Linux版本**（以及取决于**您决定尝试的时间**——某些服务可能已经发生变化），**您的实际体验可能会有所不同**。
我参考了以下列出的教程，并根据自己的需求进行了调整。
我写这篇教程作为我的个人笔记和脚本备份，同时也作为未来读者的参考。

- [Termux项目](https://termux.dev/en/) [GitHub](https://github.com/termux/termux-app)
- [Ivon的博客](https://ivonblog.com/en-us/posts/termux-proot-distro-ubuntu/)
- [Termux-Desktops教程](https://github.com/LinuxDroidMaster/Termux-Desktops)
- [Technical Bot关于PRoot安装Chromium的视频](https://www.youtube.com/watch?v=SA03NwenOck)
- [关于Android幽灵进程杀手 (phantom process killer) 的文档](https://github.com/agnostic-apollo/Android-Docs/blob/master/en/docs/apps/processes/phantom-cached-and-empty-processes.md)

## 测试环境

- **设备:** Xiaomi Pad 6S Pro 12.4 (24018RPACC)
- **分辨率:** 3048x2032
- **处理器:** Qualcomm Snapdragon 8gen2 @ 3.19GHz
- **运行内存:** 16 GB
- **存储版本:** 1 TB
- **Android 版本:** 14 (Patch 2024-09-01)
- **Android 内核:** 5.15.123-android13-8-00008-g2ca6a2912c7e-ab11087001
- **澎湃OS版本:** 1.0.11.0.UNXCNXM

## 1. 前置准备（适用于原生和 PRoot）

### 1.1 Android应用

#### 1.1.1 安装Termux应用

**不要**从 _Google Play Store_ 下载，因为版本已过时。

- [Termux](https://github.com/termux/termux-app/releases)
- [Termux:X11](https://github.com/termux/termux-x11/releases/tag/nightly) 用于显示您的桌面环境
- [Termux:Widget](https://github.com/termux/termux-widget/releases) 用于快速启动Termux和PRoot桌面环境
- [Termux:Styling](https://github.com/termux/termux-styling/releases) （可选，如果您想调整Termux命令行界面的外观）

#### 1.1.2 在Termux应用中使用命令：

授予存储权限：

```
termux-setup-storage
```

检查更新：

```
pkg update
```

```
pkg upgrade
```

安装X11 repo用于显示：

```
pkg install x11-repo
```

```
pkg install termux-x11-nightly
```

```
pkg install pulseaudio
```

修复任何仓库问题：

```
termux-change-repo
```

实用工具：

```
pkg install wget
```

```
pkg install git
```

#### 1.1.3 设置Termux:X11应用：

如果没有`preference`按钮，请查看Android中的通知列表。更改默认设置为：

- **Display resolution mode:** scaled
- **Fullscreen on device display:** on
- **Force landscape orientation:** on
- **Hide display cutout:** on
- **Touchscreen input mode:** trackpad
- **Capture external mouse when possible:** on
- **Show additional keyboard:** off

推荐连接到无线键鼠。

### 1.2 关闭Android幽灵进程杀手

#### 1.2.1 什么是幽灵进程杀手？

简而言之，幽灵进程杀手是Android开源项目 (AOSP) 最近（Android 版本 >= 12）引入的一种机制，几乎所有运行Android操作系统的智能设备（原生Android、澎湃OS/MIUI、OriginOS、ColorOS、MagicOS、鸿蒙OS（NEXT版本之前）、One UI、myUI、Flyme 等）都具备此功能。
它限制应用程序的子进程（在后台运行的幽灵进程）数量，并在不提示的情况下将其终止。
默认允许的幽灵进程总数为 32 个，这对于在Android系统上运行操作系统来说远远不够。

关于此机制的更多信息：[Android 幽灵进程杀手文档](https://github.com/agnostic-apollo/Android-Docs/blob/master/en/docs/apps/processes/phantom-cached-and-empty-processes.md)。**本节内容基于此文章，并遵循 MIT 许可证。**

致鸿蒙OS（1.x-4.x）用户：鸿蒙OS不显示Android版本。要查看您的系统基于哪个Android版本，您可以使用第三方工具来检测API级别。请注意，鸿蒙OS的开发者选项也与标准Android略有不同。

#### 1.2.2 方法1：开发者选项（推荐）

**仅供Android版本 >= 14** 

在`Android 设置 -> 系统 -> 开发者选项 -> 禁用子进程限制`中启用一次，即可禁用终止**超过 32 个的额外幽灵进程**和占用过多 CPU 资源的进程。您需要先在设备上启用开发者选项，才能在`系统`设置页面中看到此选项。通常可以通过连续点击`Android 设置 -> 关于此设备 -> 版本号`**7**次来完成此操作。

如果再次禁用`开发者选项`，则`禁用子进程限制`开关将自动再次禁用，并且终止幽灵进程的功能将再次启用。

#### 1.2.3 方法2：无线ADB调试（不推荐）

**对于Android 12L & 13+**

无线 adb 调试功能也位于`开发者选项`中。假设没有 root 权限，则每次重启后都需要重新启用这些命令。

在某些设备上（例如我正在测试的设备），由于未知原因，使用 adb 无线调试的方法不起作用。

**Android 13:**

```
adb shell "settings put global settings_enable_monitor_phantom_procs false"
```

```
adb shell "/system/bin/device_config get_sync_disabled_for_tests"
```

**Android 12:**

```
adb shell "/system/bin/device_config put activity_manager max_phantom_processes 2147483647"
```

```
adb shell "/system/bin/device_config is_sync_disabled_for_tests"
```

## 2. 原生Termux Linux桌面环境

### 2.1 安装xfce4桌面环境

```
pkg install xfce4
```

### 2.2 安装移植的Linux软件

**前置条件：**

```
pkg install tur-repo
```

**Chromium:**

```
pkg install chromium
```

_已知问题：_ 在Google账户登录时会崩溃。在后续图形界面中启动时需要在launch命令后添加`--no-sandbox`。

**Code-oss:** （Visual Studio Code的开源版本）

```
pkg install code-oss
```

_已知问题：_ 无法通过微软账户同步。

### 2.3 添加启动桌面环境的脚本

下载脚本：

```
wget https://raw.githubusercontent.com/LinuxDroidMaster/Termux-Desktops/main/scripts/termux_native/startxfce4_termux.sh
```

若源脚本不可用，这里有一份备份：

```
wget https://raw.githubusercontent.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/main/scripts/startxfce4_termux.sh
```

复制脚本到`./.shortcuts/`以使Termux:Widget能够访问：

```
cp ./startxfce4_termux.sh ./shortcuts/
```

赋予执行权限：

```
chmod +x ./.shortcuts/startxfce4_termux.sh
```

### 2.4 从Termux:Widget启动Termux原生桌面环境

- 长按Android桌面的空白处
- 添加**Android小插件"Termux:Widget"**
- 此时应该能找到`startxfce4_termux.sh`
- 点击后应该能启动**Termux:X11**.
- 也可以使用Termux终端，输入`sh ./startxfce4_termux.sh`

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/termux-android.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### 2.5 与Android共享文件

在Termux原生桌面中，您可以访问挂载在 `~/Desktop/shared/` 或 `/data/data/com.termux/files/home/Desktop/shared/` 目录下的Android主机用户文件和文件夹。您可以将这些文件和文件夹添加到桌面或固定到文件管理器的侧边栏。

## 3. 基于Termux的PRoot Linux发行版（Ubuntu）

Ubuntu 系统安装部分主要基于[Ivon的博客](https://ivonblog.com/en-us/posts/termux-proot-distro-ubuntu/)，软件安装部分是 _我从各种来源收集和适配的，以使一切正常运行_。

### 3.1 Ubuntu设置

**安装：**

```
pkg install proot-distro
```

```
proot-distro install ubuntu
```

**登录Ubuntu：**

```
proot-distro login ubuntu --user root --shared-tmp
```

**安装工具：**

```
apt update
```

```
apt install sudo vim software-properties-common
```

**由于Android上没有systemd，需要关闭Ubuntu snap：**

```
cat <<EOF | sudo tee /etc/apt/preferences.d/nosnap.pref
# To prevent repository packages from triggering the installation of Snap,
# this file forbids snapd from being installed by APT.
# For more information: https://linuxmint-user-guide.readthedocs.io/en/latest/snap.html
Package: snapd
Pin: release a=*
Pin-Priority: -10
EOF
```

**安装Firefox浏览器否则将没有浏览器来下载软件：**

```
sudo add-apt-repository ppa:mozillateam/ppa
```

```
sudo apt-get update
```

```
sudo apt-get install firefox-esr
```

**为root创建密码：**

```
passwd
```

**创建组：**

```
groupadd storage
groupadd wheel
groupadd video
```

**创建非root常规用户：**

```
useradd -m -g users -G wheel,audio,video,storage -s /bin/bash user
```

```
passwd user
```

**将用户添加到sudo组：**

```
visudo
```

按"I"键插入：

```
user ALL=(ALL:ALL) ALL
```

在屏幕上触摸"ESC"然后输入：

```
wq
```

以退出。

**切换到常规用户：**

```
su user
cd
```

**安装xfce桌面环境：**

```
sudo apt install xubuntu-desktop
```

```
sudo update-alternatives --config x-terminal-emulator
```

关于KDE和GNOME桌面可以参照
[Ivon的博客](https://ivonblog.com/en-us/posts/termux-proot-distro-ubuntu/)或者[LinuxDroidMaster的教程](https://github.com/LinuxDroidMaster/Termux-Desktops/blob/main/Documentation/proot/ubuntu_proot.md)。

**关闭Ubuntu的锁屏：** 当Android设备锁定和解锁后，Ubuntu 会显示一个没有正确密码的锁屏界面。这可能是由于与PRoot的兼容性问题导致的：

```
xset s off
```

```
xset -dpms
```

### 3.2 （可选）添加中文支持

**添加字体：**

```
sudo apt install locales fonts-noto-cjk
```

**修改配置文件：**

```
vim /etc/locale.gen
```

将其中`zh_CN.UTF-8 UTF-8`前的#号移除
使用`:wq!`退出vim

**生成语言：**

```
locale-gen
```

```
echo "LANG=zh_CN.UTF-8 UTF-8" > /etc/locale.conf
```

**移除ibus组件：**

```
sudo apt purge ibus
```

**安装fcitx组件和Google拼音：**

```
apt install fcitx fcitx-pinyin
```

```
fcitx-googlepinyin
```

在3.3节成功进入xfce4图形界面后，在应用菜单>语言支持(Language Support)和fcitx设置中，添加English(US)作为键盘布局，以及选择Google Pinyin作为输入法，重启终端。

### 3.3 添加启动桌面环境的脚本：

下载以下脚本：

```
wget https://raw.githubusercontent.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/main/scripts/startproot_ubuntu.sh
```

复制脚本到`./.shortcuts/`使Termux:Widget能够访问：

```
cp ./startproot_ubuntu.sh ./shortcuts/
```

赋予执行权限：

```
chmod +x ./.shortcuts/startproot_ubuntu.sh
```

### 3.4 从Termux:Widget启动Ubuntu桌面环境

- 长按Android桌面的空白处
- 添加**Android小插件"Termux:Widget"**
- 应该能找到`startproot_ubuntu.sh`
- 点击后应该能启动Termux:X11.
- 或者在Termux终端中输入`sh ./startproot_ubuntu.sh`

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/termux-ubuntu.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### 3.5 与Android共享文件

在Termux原生桌面中，您可以访问挂载在`/storage/emulated/0`目录下的Android主机用户文件和文件夹。您可以将其添加到桌面或固定到文件管理器的侧边栏。

### 3.6 Ubuntu软件

#### 已测试能直接工作：

- GIMP（已经预装）
- Octave (`sudo apt install octave`)
- TeX Live (`sudo apt install texlive`)

#### 不工作：

- WPS office（启动时崩溃）
- blender（启动时崩溃）

#### Visual Studio Code

- 访问[VS Code下载页面](https://code.visualstudio.com/download#)然后选择Linux Arm64。
- 在`Downloads`文件夹中：`sudo dpkg -i code*.deb`
- 在VS Code启动图标的属性中添加`--no-sandbox`

#### Chromium

2024 年 9 月，教程视频[Technical Bot的“如何在 Ubuntu Termux 中安装 Chromium”](https://www.youtube.com/watch?v=SA03NwenOck)中介绍的方法已无法顺利运行，主要是由于当前服务器状况和软件更新导致的gpg密钥管理问题。

**检查gpg是否安装：**

```
sudo apt install gnupg
```

**添加有Chromium的debian源：**

```
echo "deb http://ftp.debian.org/debian buster main" >> /etc/apt/sources.list
```

```
sudo apt update
```

**接着gpg密钥错误就会出现。**此时原来的方法：

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv-keys 648ACFD622F3D138
```

将**完全无用**。

一种解决方法是退出图形环境，关闭Termux进程，然后重新打开：

```
proot-distro login ubuntu
```

尝试以下解决方案：

**方案1：**

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8B48AD6246925553
```

**方案2：**

```
gpg2 --keyserver hkps://keyserver.ubuntu.com:443 --recv-keys 648ACFD622F3D138
```

**方案3：**

```
gpg --keyserver pgp.mit.edu --recv-keys 54404762BBB6E853 BDE6D2B9216EC7A8 648ACFD622F3D138 0E98404D386FA1D9 F8D2585B8783D481 0E98404D386FA1D9 6ED0E7B82643E131
```

或

```
gpg --armor --export DC30D7C23CBBABEE | sudo apt-key add -
```

然后

```
sudo apt update
```

```
sudo apt install chromium
```

在VS Code启动图标的属性中添加`--no-sandbox`。
