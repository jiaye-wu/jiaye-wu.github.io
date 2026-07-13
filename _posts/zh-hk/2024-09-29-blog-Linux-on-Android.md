---
layout: post
title: "[檔案] 在Android平板電腦上運行Linux桌面發行版"
date: 2024-09-29 21:01:00
description: 在Android上運行Linux桌面的個人筆記
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

本項目的代碼倉庫位於[https://github.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/](https://github.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/)。

# Android-Termux-Subsystem-for-Linux

本代碼倉庫是**免 root** 在Android上運行Linux的個人配置集合。將您的Android平板電腦變成一臺（更便攜的）ARM64 Linux筆記本電腦！

本教程提供以下解決方案：

- **原生** 基於Android-Termux的Linux桌面環境
- 基於Termux的 **PRoot** Linux發行版（在本文中，我們以Ubuntu舉例）

**原生**解決方案速度更快，但 **PRoot** 擁有更多的Linux應用支持。

## 參考與致謝

關於如何在Android上運行Linux的教程有很多。然而，根據**您使用的Android版本**和**您安裝的Linux版本**（以及取決於**您決定嘗試的時間**——某些服務可能已經發生變化），**您的實際體驗可能會有所不同**。
我參考了以下列出的教程，並根據自己的需求進行了調整。
我寫這篇教程作為我的個人筆記和腳本備份，同時也作為未來讀者的參考。

- [Termux項目](https://termux.dev/en/) [GitHub](https://github.com/termux/termux-app)
- [Ivon的博客](https://ivonblog.com/en-us/posts/termux-proot-distro-ubuntu/)
- [Termux-Desktops教程](https://github.com/LinuxDroidMaster/Termux-Desktops)
- [Technical Bot關於PRoot安裝Chromium的視頻](https://www.youtube.com/watch?v=SA03NwenOck)
- [關於Android幽靈進程殺手 (phantom process killer) 的文檔](https://github.com/agnostic-apollo/Android-Docs/blob/master/en/docs/apps/processes/phantom-cached-and-empty-processes.md)

## 測試環境

- **設備:** Xiaomi Pad 6S Pro 12.4 (24018RPACC)
- **分辨率:** 3048x2032
- **處理器:** Qualcomm Snapdragon 8gen2 @ 3.19GHz
- **運行內存:** 16 GB
- **存儲版本:** 1 TB
- **Android 版本:** 14 (Patch 2024-09-01)
- **Android 內核:** 5.15.123-android13-8-00008-g2ca6a2912c7e-ab11087001
- **澎湃OS版本:** 1.0.11.0.UNXCNXM

## 1. 前置準備（適用於原生和 PRoot）

### 1.1 Android應用

#### 1.1.1 安裝Termux應用

**不要**從 _Google Play Store_ 下載，因為版本已過時。

- [Termux](https://github.com/termux/termux-app/releases)
- [Termux:X11](https://github.com/termux/termux-x11/releases/tag/nightly) 用於顯示您的桌面環境
- [Termux:Widget](https://github.com/termux/termux-widget/releases) 用於快速啟動Termux和PRoot桌面環境
- [Termux:Styling](https://github.com/termux/termux-styling/releases) （可選，如果您想調整Termux命令行界面的外觀）

#### 1.1.2 在Termux應用中使用命令：

授予存儲權限：

```
termux-setup-storage
```

檢查更新：

```
pkg update
```

```
pkg upgrade
```

安裝X11 repo用於顯示：

```
pkg install x11-repo
```

```
pkg install termux-x11-nightly
```

```
pkg install pulseaudio
```

修復任何倉庫問題：

```
termux-change-repo
```

實用工具：

```
pkg install wget
```

```
pkg install git
```

#### 1.1.3 設置Termux:X11應用：

如果沒有`preference`按鈕，請查看Android中的通知列表。更改默認設置為：

- **Display resolution mode:** scaled
- **Fullscreen on device display:** on
- **Force landscape orientation:** on
- **Hide display cutout:** on
- **Touchscreen input mode:** trackpad
- **Capture external mouse when possible:** on
- **Show additional keyboard:** off

推薦連接到無線鍵鼠。

### 1.2 關閉Android幽靈進程殺手

#### 1.2.1 什麼是幽靈進程殺手？

簡而言之，幽靈進程殺手是Android開源項目 (AOSP) 最近（Android 版本 >= 12）引入的一種機制，幾乎所有運行Android操作系統的智能設備（原生Android、澎湃OS/MIUI、OriginOS、ColorOS、MagicOS、鴻蒙OS（NEXT版本之前）、One UI、myUI、Flyme 等）都具備此功能。
它限制應用程序的子進程（在後臺運行的幽靈進程）數量，並在不提示的情況下將其終止。
默認允許的幽靈進程總數為 32 個，這對於在Android系統上運行操作系統來說遠遠不夠。

關於此機制的更多信息：[Android 幽靈進程殺手文檔](https://github.com/agnostic-apollo/Android-Docs/blob/master/en/docs/apps/processes/phantom-cached-and-empty-processes.md)。**本節內容基於此文章，並遵循 MIT 許可證。**

致鴻蒙OS（1.x-4.x）用戶：鴻蒙OS不顯示Android版本。要查看您的系統基於哪個Android版本，您可以使用第三方工具來檢測API級別。請注意，鴻蒙OS的開發者選項也與標準Android略有不同。

#### 1.2.2 方法1：開發者選項（推薦）

**僅供Android版本 >= 14** 

在`Android 設置 -> 系統 -> 開發者選項 -> 禁用子進程限制`中啟用一次，即可禁用終止**超過 32 個的額外幽靈進程**和佔用過多 CPU 資源的進程。您需要先在設備上啟用開發者選項，才能在`系統`設置頁面中看到此選項。通常可以通過連續點擊`Android 設置 -> 關於此設備 -> 版本號`**7**次來完成此操作。

如果再次禁用`開發者選項`，則`禁用子進程限制`開關將自動再次禁用，並且終止幽靈進程的功能將再次啟用。

#### 1.2.3 方法2：無線ADB調試（不推薦）

**對於Android 12L & 13+**

無線 adb 調試功能也位於`開發者選項`中。假設沒有 root 權限，則每次重啟後都需要重新啟用這些命令。

在某些設備上（例如我正在測試的設備），由於未知原因，使用 adb 無線調試的方法不起作用。

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

## 2. 原生Termux Linux桌面環境

### 2.1 安裝xfce4桌面環境

```
pkg install xfce4
```

### 2.2 安裝移植的Linux軟件

**前置條件：**

```
pkg install tur-repo
```

**Chromium:**

```
pkg install chromium
```

_已知問題：_ 在Google賬戶登錄時會崩潰。在後續圖形界面中啟動時需要在launch命令後添加`--no-sandbox`。

**Code-oss:** （Visual Studio Code的開源版本）

```
pkg install code-oss
```

_已知問題：_ 無法通過微軟賬戶同步。

### 2.3 添加啟動桌面環境的腳本

下載腳本：

```
wget https://raw.githubusercontent.com/LinuxDroidMaster/Termux-Desktops/main/scripts/termux_native/startxfce4_termux.sh
```

若源腳本不可用，這裡有一份備份：

```
wget https://raw.githubusercontent.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/main/scripts/startxfce4_termux.sh
```

複製腳本到`./.shortcuts/`以使Termux:Widget能夠訪問：

```
cp ./startxfce4_termux.sh ./shortcuts/
```

賦予執行權限：

```
chmod +x ./.shortcuts/startxfce4_termux.sh
```

### 2.4 從Termux:Widget啟動Termux原生桌面環境

- 長按Android桌面的空白處
- 添加**Android小插件"Termux:Widget"**
- 此時應該能找到`startxfce4_termux.sh`
- 點擊後應該能啟動**Termux:X11**.
- 也可以使用Termux終端，輸入`sh ./startxfce4_termux.sh`

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/termux-android.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### 2.5 與Android共享文件

在Termux原生桌面中，您可以訪問掛載在 `~/Desktop/shared/` 或 `/data/data/com.termux/files/home/Desktop/shared/` 目錄下的Android主機用戶文件和文件夾。您可以將這些文件和文件夾添加到桌面或固定到文件管理器的側邊欄。

## 3. 基於Termux的PRoot Linux發行版（Ubuntu）

Ubuntu 系統安裝部分主要基於[Ivon的博客](https://ivonblog.com/en-us/posts/termux-proot-distro-ubuntu/)，軟件安裝部分是 _我從各種來源收集和適配的，以使一切正常運行_。

### 3.1 Ubuntu設置

**安裝：**

```
pkg install proot-distro
```

```
proot-distro install ubuntu
```

**登錄Ubuntu：**

```
proot-distro login ubuntu --user root --shared-tmp
```

**安裝工具：**

```
apt update
```

```
apt install sudo vim software-properties-common
```

**由於Android上沒有systemd，需要關閉Ubuntu snap：**

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

**安裝Firefox瀏覽器否則將沒有瀏覽器來下載軟件：**

```
sudo add-apt-repository ppa:mozillateam/ppa
```

```
sudo apt-get update
```

```
sudo apt-get install firefox-esr
```

**為root創建密碼：**

```
passwd
```

**創建組：**

```
groupadd storage
groupadd wheel
groupadd video
```

**創建非root常規用戶：**

```
useradd -m -g users -G wheel,audio,video,storage -s /bin/bash user
```

```
passwd user
```

**將用戶添加到sudo組：**

```
visudo
```

按"I"鍵插入：

```
user ALL=(ALL:ALL) ALL
```

在屏幕上觸摸"ESC"然後輸入：

```
wq
```

以退出。

**切換到常規用戶：**

```
su user
cd
```

**安裝xfce桌面環境：**

```
sudo apt install xubuntu-desktop
```

```
sudo update-alternatives --config x-terminal-emulator
```

關於KDE和GNOME桌面可以參照
[Ivon的博客](https://ivonblog.com/en-us/posts/termux-proot-distro-ubuntu/)或者[LinuxDroidMaster的教程](https://github.com/LinuxDroidMaster/Termux-Desktops/blob/main/Documentation/proot/ubuntu_proot.md)。

**關閉Ubuntu的鎖屏：** 當Android設備鎖定和解鎖後，Ubuntu 會顯示一個沒有正確密碼的鎖屏界面。這可能是由於與PRoot的兼容性問題導致的：

```
xset s off
```

```
xset -dpms
```

### 3.2 （可選）添加中文支持

**添加字體：**

```
sudo apt install locales fonts-noto-cjk
```

**修改配置文件：**

```
vim /etc/locale.gen
```

將其中`zh_CN.UTF-8 UTF-8`前的#號移除
使用`:wq!`退出vim

**生成語言：**

```
locale-gen
```

```
echo "LANG=zh_CN.UTF-8 UTF-8" > /etc/locale.conf
```

**移除ibus組件：**

```
sudo apt purge ibus
```

**安裝fcitx組件和Google拼音：**

```
apt install fcitx fcitx-pinyin
```

```
fcitx-googlepinyin
```

在3.3節成功進入xfce4圖形界面後，在應用菜單>語言支持(Language Support)和fcitx設置中，添加English(US)作為鍵盤佈局，以及選擇Google Pinyin作為輸入法，重啟終端。

### 3.3 添加啟動桌面環境的腳本：

下載以下腳本：

```
wget https://raw.githubusercontent.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/main/scripts/startproot_ubuntu.sh
```

複製腳本到`./.shortcuts/`使Termux:Widget能夠訪問：

```
cp ./startproot_ubuntu.sh ./shortcuts/
```

賦予執行權限：

```
chmod +x ./.shortcuts/startproot_ubuntu.sh
```

### 3.4 從Termux:Widget啟動Ubuntu桌面環境

- 長按Android桌面的空白處
- 添加**Android小插件"Termux:Widget"**
- 應該能找到`startproot_ubuntu.sh`
- 點擊後應該能啟動Termux:X11.
- 或者在Termux終端中輸入`sh ./startproot_ubuntu.sh`

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/termux-ubuntu.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### 3.5 與Android共享文件

在Termux原生桌面中，您可以訪問掛載在`/storage/emulated/0`目錄下的Android主機用戶文件和文件夾。您可以將其添加到桌面或固定到文件管理器的側邊欄。

### 3.6 Ubuntu軟件

#### 已測試能直接工作：

- GIMP（已經預裝）
- Octave (`sudo apt install octave`)
- TeX Live (`sudo apt install texlive`)

#### 不工作：

- WPS office（啟動時崩潰）
- blender（啟動時崩潰）

#### Visual Studio Code

- 訪問[VS Code下載頁面](https://code.visualstudio.com/download#)然後選擇Linux Arm64。
- 在`Downloads`文件夾中：`sudo dpkg -i code*.deb`
- 在VS Code啟動圖標的屬性中添加`--no-sandbox`

#### Chromium

2024 年 9 月，教程視頻[Technical Bot的“如何在 Ubuntu Termux 中安裝 Chromium”](https://www.youtube.com/watch?v=SA03NwenOck)中介紹的方法已無法順利運行，主要是由於當前服務器狀況和軟件更新導致的gpg密鑰管理問題。

**檢查gpg是否安裝：**

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

**接著gpg密鑰錯誤就會出現。**此時原來的方法：

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv-keys 648ACFD622F3D138
```

將**完全無用**。

一種解決方法是退出圖形環境，關閉Termux進程，然後重新打開：

```
proot-distro login ubuntu
```

嘗試以下解決方案：

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

然後

```
sudo apt update
```

```
sudo apt install chromium
```

在VS Code啟動圖標的屬性中添加`--no-sandbox`。
