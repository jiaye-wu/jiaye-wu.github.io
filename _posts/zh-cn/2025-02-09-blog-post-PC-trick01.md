---
layout: post
title: "[档案] 文件管理强迫症福音"
date: 2025-02-09 20:05:00
description: 经验分享和个人笔记
tags:
  - software
  - miciroft windows
  - freefilesync
  - pc
  - pc tricks
categories:
  - development
  - archive
  - blog
thumbnail: assets/img/Computers.png
---

如果你有将所有文件和目录结构在你的个人设备之间（特指Windows个人电脑和Android手机与平板）保持相同和同步的习惯，这篇笔记就是为你准备的。本文是我的个人笔记，如果你决定尝试实践此方法，本人不对由此可能造成的任何潜在的数据损失负责。

## 备份原则：最佳实践

你的数据和文档是无价的。在此领域最著名的准则便是“3-2-1原则”

- **3**：*三个*备份.
- **2**：*两种不同*介质。**机械硬盘**（HDD）对于冷数据有更长的存储寿命，但读写速度相对较慢。这类介质对冲击敏感（跌落和振动），容易损坏。**固态硬盘**（SSD）快速而轻便，比机械硬盘更加坚固，然而长久不连接电脑进行刷新的话，数据很容易损坏，一旦损坏很难恢复（对比机械硬盘）。因此它们不适合存储冷数据和归档。**传统的U盘闪存**只适合小尺寸文件和数据的交换，并不适合用于长期存储数据，因为它们普遍寿命偏短，容易损坏。一种便携的日常数据备份存储介质是被称为**固态U盘**（USSD，U盘大小的固态硬盘）的东西，但是也需要经常向*两种不同介质*（即固态硬盘和机械硬盘）备份。
- **1**：至少有*一份*异地备份。本地备份容易在遭受盗窃、遗失和自然灾害后丢失。异地备份可以是存在于其它地方或者存在云端。但永远要记住，除了个人NAS（私有云网络存储）之外，你的数据*并不真正*掌握在你手中。

## 文件同步

**计算机到计算机** (Windows/Linux/macOS)：[FreeFileSync](https://freefilesync.org/download.php)是一种免费、高质量的开源软件。一个技巧是将FFS配置文件(`*.ffs_gui`)保存到OneDrive上，这样你所有的计算机都能同步访问同一份配置文件。_这样你也能使用此配置保持所有电脑的文件和目录结构相同。_

**计算机到Android手机/平板**：[FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite&hl=en)是一款免费/付费Android应用程序，能够使你在手机平板上同步并本地访问你的文件（例如用于同步你已经发表的文章、待阅读的文献和自己的简历）。技巧是在OneDrive上设立移动设备专用的同步文件夹，然后在应用上创建同步文件夹对，连接到此OneDrive文件夹。配置时，根据需要勾选”允许删除“选项。

## 我的某些电脑只有一块物理磁盘一个存储分区(`C:\`)，而另一些却有多快硬盘多个资料分区(`C:\, D:\`, ...)，我如何保持文件路径一致性？

*微软 Windows*操作系统中，在有额外盘符（例如`D:\`）时，很多人习惯于将操作系统(`C:\`)和资料、数据、文档(`D:\, E:\`)用不同盘符分开。

如果你的计算机中拥有多于一块的物理硬盘，那么有额外盘符是很自然的一件事情。然而，对于只有一块物理硬盘的电脑，文件统一管理可能会遇到麻烦（例如**文件路径一致性、需要保存和同步维护多个不同文件同步配置文件、文件路径过长打不开文件或者难找**等）。

**注意**：在接下来教程中的文件名和路径都可以根据实际情况调整，是任意的。

### 解决方案1：将仅有的硬盘进行分区操作（不推荐）

进入磁盘管理，将你仅有的硬盘分成两个不同盘符的分区，一个是你的操作系统，另一个用于你的文件。这样你就可以用同一个同步配置文件管理你所有的电脑。

然而此方法有一个显著问题：你不能预见你需要向`C:\`和`D:\`分区分配多少磁盘空间。如果你后续安装了过多的软件， `C:\`盘空间就会吃紧；如果你的后续文件资料过多，`D:\`盘就会不够用。当这些情况发生时，重新分配磁盘空间往往比较麻烦，因为需要额外的一块硬盘来腾资料（分区剩余空间不能支持直接的资料转移）。

### 解决方案2：维持单个分区（推荐）

这种解决方案非常灵活。此时你**不应当**再执着于将操作系统和资料分开，**而是**着眼于建立一块虚拟的`D:\`盘来快速访问你的文件，而不需要在多个目录层级间翻动。这种方法也可以使你只用一种文件同步配置文件来管理你的文件，就像在多硬盘计算机上一样。

#### 2.1 使用开机执行的`subst`命令（不推荐）

1. 在`C:\`盘根目录建立一个新的命令行脚本，例如`MountDisk.bat`，在其中输入命令（路径尽量不要有中文）：

   `subst D: "C:\Users\你的用户名\Documents\你的工作目录"`

2. 按组合键`ctrl+R `然后输入`taskschd.msc`。
3. 创建一个计划任务，设置在用户登录时执行。
4. 设置触发器为系统启动和用户登录时执行。
5. 执行的操作为运行程序。程序指向刚刚的`MountDisk.bat`脚本。
6. 重启电脑，你应该能看到新的磁盘被创建了。如果出问题，请回到第4步尝试其他触发条件。
7. [可选]成功后可以将计划任务导出为`.xml`文件以便在其他类似的电脑上设置。

这种方法的问题在于，`subst`命令不支持**回收站**以及在新路径上运行程序(`*.exe`)。由于缺乏回收站功能，在新路径上进行文件同步**非常危险**（误删文件后无法恢复）。

#### 2.2 在自动挂载的`.vhdx`虚拟磁盘里使用目录连接`mklink /j`（推荐）

1. 进入磁盘管理，创建一个虚拟磁盘文件，例如`D-VDisk.vhdx`。创建大小可以很小，例如100 MB或1 GB。文件实际占用的空间只和被放入其中的文件大小有关，与创建时填写的大小无关（不会超出此大小）。
2. 初始化虚拟磁盘，格式化到`NTFS`，挂载并分配盘符D。
3. 打开命令行窗口（PowerShell或CMD）然后输入命令（路径尽量不要有中文）：

   `mklink /J "D:\sub-folder" "C:\Users\你的用户名\Documents\你的工作目录\子目录"`

   你可以复制这个命令应用于工作目录的所有子目录上，然后保存为一个`.cmd`文件以便在其他计算机上配置时使用。命令执行完后，你的目录连接就已经被保存在`.vhdx`虚拟磁盘里了。理论上，只要你的工作目录的路径在其他电脑上是一样的，你只需要复制粘贴`.vhdx`文件即可。

4. 在方便合适的地方创建`MountDDisk.bat`并输入以下命令（路径尽量不要有中文）：

   `diskpart /s "C:\Users\你的用户名\Documents\DiskpartCMD.txt"`

5. 在第四步中命令里提到的路径下（此处即是`C:\Users\你的用户名\Documents\`）创建一个`DiskpartCMD.txt`文件，在里面写入（路径尽量不要有中文）：

```
    select vdisk file="C:\你的虚拟磁盘文件路径\D-VDisk.vhdx"

    attach vdisk

    assign letter=D
```

6. 使用组合键`ctrl+R `然后输入`taskschd.msc`。
7. 创建计划任务，设置其**无论**用户是否登录都要执行。选择以**管理员权限**运行，兼容性选择*Windows 10*。
8. 设置触发器为系统启动和用户登录时执行。
9. 执行的操作为运行程序。程序指向刚刚第4步的`MountDDisk.bat`脚本。
10. 确认应用更改，然后输入用户登录密码。
11. 重启电脑，你应该能看到新的磁盘被创建了。如果出问题，请回到第8步尝试其他触发条件。
12. [可选]成功后可以将计划任务导出为`.xml`文件以便在其他类似的电脑上设置。

此方法是半永久的，而且支持包含回收站在内的所有`NTFS`文件系统功能。

提示：如果你的 `.vhdx`虚拟磁盘文件在同步文件的路径上，请在同步规则里将它排除，因为每台电脑的的此文件都独立发生更改。

#### 2.3 将所有工作文件放入`.vhdx`虚拟磁盘并挂载（不推荐）

其实，你可以抛弃`mklink`指令然后将你的所有工作文件资料放入一个足够大的`.vhdx`虚拟磁盘里（在2.2的第1步里创建足够大的虚拟磁盘，并忽略第3步），然后使用上面的方法开机挂载此磁盘。

这种方法对于分区空间调整也很灵活，而且你也能够享受*回收站*和运行`.exe`程序的功能。然而如果所有文件都包装在一个巨大的单体文件里，只要此文件有一丁点损坏，都会导致虚拟磁盘不可读，从而丢失数据。而且同步和移动这么大的一个文件既**困难**又**不安全**。

#### 2.4 方法对比

| 功能需求                       |   磁盘分区   |        使用`subst`命令         |  小尺寸`.vhdx` + `mklink /j`   |     所有文件放在大`.vhdx`里      |
| :----------------------------- | :----------: | :----------------------------: | :----------------------------: | :------------------------------: |
| 需要维护不同版本的同步配置文件 |    **否**    |               是               |             **否**             |              **否**              |
| 支持回收站功能                 |    **是**    |               否               |             **是**             |              **是**              |
| 支持运行`.exe`                 |    **是**    |               否               |             **是**             |              **是**              |
| 所需磁盘空间                   | 需要提前规划 |           **可忽略**           |       **100 MB -- 1 GB**       |     大于你所有数据的大小总和     |
| 调整磁盘空间的灵活性           |    非常低    |         **高（无需）**         |       **高（几乎无需）**       |                低                |
| 初次设置的难度                 |     中等     |            **容易**            |         **容易到中等**         |          **容易到中等**          |
| 重启后能维持状态               |    **是**    | **使用计划任务和脚本重新挂载** | **使用计划任务和脚本重新挂载** |  **使用计划任务和脚本重新挂载**  |
| 迁移到其他设备难度             |      难      |     **容易，重做所有步骤**     |        **复制粘贴即可**        |        文件太大时很难移动        |
| 丢失数据的风险                 | 分区有风险！ |         **几乎无风险**         |         **几乎无风险**         | `.vhdx`文件一但损坏=丢失所有数据 |
