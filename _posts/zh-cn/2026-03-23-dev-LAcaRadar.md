---
layout: post
title: "[学术工具] L'AcaRadar项目"
date: 2026-03-23 10:20:00
description: PC端谷歌学术档案追踪工具
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

闭源的PC端谷歌学术档案追踪免费软件。本项目的代码仓库位于 [GitHub](https://github.com/jiaye-wu/AcaRadar)。

# L'AcaRadar

**L'AcaRadar** 是一款轻量、本地优先的学术动态跟踪工具，用于通过 Google Scholar 监测并呈现研究人员的引用指标和论文更新。它可以作为个人学术仪表盘，帮助您持续关注学者的学术发展。

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/LAcaRadar.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## 核心功能

* **学者监测**：跟踪总引用数、h-index、i10-index 和论文总数等关键指标。

* **指标对比**：自动计算最近一次抓取与上一条记录之间的差值，突出显示学术指标的增长，例如引用数 `+10`。

* **论文亮点**：显示每位学者的最高引用论文，以及按年份判断的最新论文。

* **多标签管理**：使用灵活的标签系统整理关注的学者，并按特定分组或研究方向筛选列表。

* **防封禁机制**：提供可调节的请求延迟滑块，用于控制请求频率，降低触发 Google Scholar 反爬虫机制的风险。

* **筛选与排序**：使用一个或多个标签筛选学者，再按引用数、h-index、i10-index、论文数或姓名，对当前显示的列表进行升序或降序排列。

* **搜索与刷新控制**：按学者姓名或 Google Scholar ID 搜索；可单独刷新某位学者，也可依次更新完整列表。

* **CSV 导入、备份与排名导出**：批量导入学者和标签，导出可用于恢复的 CSV 备份，或导出当前显示的排名以供报告和分析使用。

* **回收站**：删除的学者会保留在本地，以便日后恢复；如有需要，也可永久删除。

* **隐私与持久化**：所有数据均以 JSON 格式保存在本地，学者头像也会缓存在您的电脑上，以减少网络请求。

* **国际化（i18n）**：支持简体中文、繁体中文、美式英语和英式英语之间的动态切换，并保存语言选择。

## 安装与更新

* **最低要求**：Microsoft Windows 10/11 x64，最低分辨率为 1366×768。Linux AMD64 版本即将推出。

* **安装**：下载编译好的 Windows `.exe` 发布文件，并将其放在一个专用且可写的文件夹中。发布包不包含主程序源代码。

* **更新**：查看 **Releases** 页面，下载并替换原有 `.exe` 文件。

* * *

## 致谢

本项目使用 [Python](https://www.python.org/) 和 [Flet](https://flet.dev/) 构建，并采用 [MiSans](https://hyperos.mi.com/font) 可变字体。

* * *

## 重要免责声明

**开发者声明**：我是一名个人非专业开发者。本工具主要用于满足我个人的学术动态跟踪需求。

* **功能请求**：欢迎提出建议，但请理解，我无法保证实现所有功能请求。开发优先级始终以我的个人使用需求为准。

* **错误报告**：如果遇到程序错误，请使用**英语**通过 GitHub Issues 提交。

* **连接问题**：对于“为什么无法连接 Google Scholar？”或“为什么抓取失败？”之类的问题，我将**不予答复**。Google Scholar 对网络环境高度敏感；如遇此类问题，请先检查您的网络设置、代理或 VPN 状态。技术详情会记录在应用程序旁的 `acaradar.log` 中。

* **本地化**：本地化键值文件与私有的应用程序源代码分开发布。非常欢迎改进公开的 `locales/` 文件，并可通过 **Pull Request** 提交以供人工审核。

_本项目按“现状”提供，不作任何形式的保证。_
