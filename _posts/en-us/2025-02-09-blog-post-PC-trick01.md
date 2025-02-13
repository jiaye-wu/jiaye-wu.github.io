---
layout: post
title: "[Archive] Tricks to keep all files the same & synced across your devices"
date: 2025-02-09 20:05:00
description: experience sharing and personal notes
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

If you have the habit of keeping all your files the same (file & file structures) and synced across all your gadgets (especially for Windows PCs and Android Phones/Talbets), this is the correct article for you. This article mainly serves as a personal note for myself, and I hold no responsibility for any potential file lost (in theory it shouldn't be) in your system shall you decide to try out these methods yourself.

## Backup principles

Your data and document files are valuable, and invaluable. The most famous principles for file backup is the "3-2-1 rule".

- **3**: _Three_ backups.
- **2**: _Two different_ media. **HDDs** (mechanical hard drives) offer longer storage time for cold data, but with much lower read/write speed. They are less resilient to shocks (fall, vibration). **SSDs** (solid-state drives) are fast and light, and more robust. However they can lose data if you don't connect it to a computer for a long time for refresh. It is not recommened to use them for your cold data and archive. **Conventional flash drives** (USB thumb disks) are only suitable for data transfer in small sizes. They are not for data storage since they are prone to fail and have a much shorter lifespan. A convenient option for your daily data storage is the high-speed **USSDs** (SSD in USB thumb disk form), but you will still need to back it up regularly to the _Two different_ media (HDD and SSD).
- **1**: At least _one_ remote copy. Local copies can fail due to theft, unintentially lost, and natural disasters. The remote copy can be physically located in another place, or on cloud. Always remember that, except for personal NAS (Network-Attached Storage), the data on cloud is _not truly yours_.

## File Synchronization

**Computers to computers** (Windows/Linux/macOS): [FreeFileSync](https://freefilesync.org/download.php) is a free, high-qulity, open-sourced software. A trick here is to store your FFS configuration files (`*.ffs_gui`) on OneDrive, then you can load them on all your computers. Also, by this method the changes to the configuration files themselves can be synced through OneDrive. _With this software you can keep your files and file structures the same across your computers._

**Computers to Android phones/tablets**: [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite&hl=en), a free/paid Android app allows you to visit and access your files (e.g., your published works, your unfinished literature, and your CVs) on your phones and tablets. The trick is that you put your files for your portable devices in a dedicated folder in OneDrive, and in the app, pair a corresponding local folder with the OneDrive folder. You can enable "allow deletion" in the settings according to your needs.

## Some of my PCs have only one drive (`C:\`) and some of them have multiple (`C:\, D:\`, ...), what are the solutions to the file paths for file sync & consistency?

On _Microsoft Windows_ platform, many people are used to separate their operating system OS (`C:\`) from their data/document files (`D:\, E:\`), when an addtional drive letter (e.g., `D:\`) is available.

If you have more than one physical drive in your system, having additoinal letters is natural. However, some systems have only one physical drive, problems can exist with file management (**consistency through file path, the need for keeping and maintaining different versions of file-sync configurations and keeping track of the change between the configurations, path too long such that some files cannot be opened or hard to be accessed**).

**Note**: the file name and the path in the following tutorial can be arbitrary. You can change them at will according to your specific use-case scenario.

### Solution 1: partitioning the only drive (not recommended)

You can go to disk management and partition your drive into two letters, one for your OS and one for your files. Then you can use one sync-configuration file for all your PCs.

However, this method has a significant problem: you cannot foresee how much space you should assign to `C:\` and `D:\` partitions. What if you installed a lot of software and you don't have enough space in `C:\`? What happens if you collected too much data to fit in `D:\`? When that happens, it is usually too late to re-assign the partition spaces, since you will need a third physical drive to move your data before they can be moved back-in.

### Solution 2: staying with the only drive (recommended)

This solution is more flexible. Now your focus should **not** be separating the OS with your data, **but rather**, creating a virtual `D:\` disk to quickly access your data without going through layers and layers of folders, and you can still use the configuration files for your other multiple-drive computers.

#### 2.1 Using the `subst` command on boot (not recommended)

1. Create a cmd file, say, `MountDisk.bat` in the root of `C:\`. and inside type the command, something like:

   `subst D: "C:\Users\your-profile-name\Documents\My Work Folder"`

2. Press `ctrl+R ` and type `taskschd.msc`.
3. Create a new scheduled task, set it to run upon user login.
4. Set trigger as when system boots and when user login.
5. The operation is to run a programme, in that you create a task that points to the `MountDisk.bat` file.
6. Reboot the computer and you shall have your new disk created. If not, tweak the trigger conditions in Step 4.
7. [optional] When succeed, you can export the scheduled task rule as a `.xml` file for setup in other computers.

The issue with this method is that `subst` does not support **recycle bin** and no programme (`*.exe`) can be launched from the new path. Due to the lack of recycle bin, it is **very unsafe** to use the path in file-sync software.

#### 2.2 Directory junction `mklink /j` in an automatically-mounted virtual disk `.vhdx` (recommended)

1. Go to disk management and create a `D-VDisk.vhdx` virtual disk. Use a small size, like 100 MB or 1 GB. The real size occupied is only relevent to the sizes of files that are put inside.
2. Initiate the virtual disk, format it as `NTFS` and assign it a letter D.
3. Open a command window (PowerShell or CMD) and type a command like:

   `mklink /J "D:\sub-folder" "C:\Users\your-profile-name\Documents\My Work Folder\subfolder"`

   you can mutilpicate the command for all subfolders, and save the commands in a `.cmd` file for future use on another computer. Now the link is saved on your `.vhdx` disk. In theory, if your Work Folder's path is the same on the other computer, you can simply copy-paste-mount this `.vhdx` file.

4. Creat somewhere convenient, a `MountDDisk.bat` file with command like:

   `diskpart /s "C:\Users\your-profile-name\Documents\DiskpartCMD.txt"`

5. In the path of the 4th step (i.e., here `C:\Users\your-profile-name\Documents\`), create a `DiskpartCMD.txt` file, type:

```
    select vdisk file="C:\your-vhdx-path-in-step-1\D-VDisk.vhdx"

    attach vdisk

    assign letter=D
```

6. Press `ctrl+R ` and type `taskschd.msc`.
7. Create a new scheduled task, set it to run **regardless** of user login. Opt to run as **adminstrator** with compatibility selected as _Windows 10_.
8. Set trigger as when system boots and when user login.
9. The operation is to run a programme, in that dialogue page you create a task that points to the `MountDDisk.bat` file in Step 4.
10. Confirm your changes and type in your login password.
11. Reboot the computer and you shall have your new disk created. If not, tweak the trigger conditions in Step 8.
12. [optional] When succeed, you can export the scheduled task rule as a `.xml` file for setup in other computers.

This method is perpetual and supports all functions including recycle bin in the `NTFS` file system.

A note is that, remember to exclude the `.vhdx` file shall it exist in the path of file-sync, since they are changed independently across your different computers.

#### 2.3 All work files in `.vhdx` virtual disk (not recommended)

Instead, you can abandon the `mklink` command and put all your files in a sufficiently big `.vhdx` virtual disk file (in 2.2 select a big enough size in Step 1 and skip Step 3) and mount it on boot.

This method is also flexible in partition size, and you can enjoy the functionality of _recycle bin_ and _running `.exe` programmes_. However, if all files are packaged in one giant file, any corrption on the virtual disk file will result in the loss of your data. It is also _hard_ and _not safe_ to move such a huge file around.

#### 2.4 Comparison among these methods

| Functions                                   |      Disk partitioning      |  Use the `subst` command   | Small `.vhdx` + `mklink /j` |         All files in a large `.vhdx`         |
| :------------------------------------------ | :-------------------------: | :------------------------: | :-------------------------: | :------------------------------------------: |
| Require maintaining a different sync config |           **No**            |            Yes             |           **No**            |                    **No**                    |
| Support for recycle bin                     |           **Yes**           |             No             |           **Yes**           |                   **Yes**                    |
| Support for running `.exe`                  |           **Yes**           |             No             |           **Yes**           |                   **Yes**                    |
| Required disk space                         |     Need to plan ahead      |       **negligible**       |     **100 MB -- 1 GB**      |          larger than all your data           |
| Flexibility of adjusting space              |          Very low           |     **high (no need)**     |  **high (almost no need)**  |                     Low                      |
| First-time setup difficulty                 |          moderate           |          **easy**          |    **easy to moderate**     |             **easy to moderate**             |
| Persistent after reboot                     |           **Yes**           | **scheduled-task remount** | **scheduled-task remount**  |          **scheduled-task remount**          |
| Migrate to other system                     |            hard             | **easy, re-do all steps**  |       **copy-paste**        |         sometimes too large to move          |
| Risk of data lost                           | partition at your own risk! |     **Almost no risk**     |     **Almost no risk**      | `.vhdx` file corruption = lose all your data |
