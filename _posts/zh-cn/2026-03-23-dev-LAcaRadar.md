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

**L'AcaRadar** 是一款轻量级、本地优先的学术追踪工具，旨在通过 Google Scholar 监控和可视化研究人员的引用指标和出版物更新。它可作为个人仪表板，对学者的学术成长保持“雷达”追踪。

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/LAcaRadar.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## 核心功能

* **学者监控**：追踪关键指标，包括总引用次数、h-index、i10-index 和总出版物数量。

* **指标比较**：自动计算最新抓取和先前记录之间的差异，突出学术增长（例如，`+10` 次引用）。

* **多标签管理**：使用灵活的标签系统组织您监控的学者。按特定组或研究兴趣筛选列表。

* **防封锁机制**：具有可自定义的延迟滑块来管理请求频率，降低被 Google Scholar 反爬虫措施封锁的风险。

* **高级排序**：按引用次数、h-index、出版物数量、姓名或组对您的学术列表进行排序。

* **数据导出**：将您的学者排名列表导出到 CSV 文件以进行外部报告或分析。

* **隐私与持久化**：所有数据均以 JSON 格式存储在本地，学者头像缓存在您的机器上，以最大程度地减少网络请求。

* **国际化 (i18n)**：支持动态语言切换（目前包括英语和中文）并具有状态持久性。

## 安装与更新

* **最低要求**：Microsoft Windows 10/11 X64，最低分辨率 1366x768。Linux AMD64 版本即将推出。

* **安装**：下载 zip 压缩包（`.zip`、`.z01`、`.z02` 等）并解压。将提取出的 `.exe` 文件放在一个专用文件夹中。

* **更新**：查看 **Releases** 页面，下载并替换 `.exe` 文件。

## 常见问题 (FAQ)

- 刷新/获取后最后更新日期没有变化？

> 检查您与 Google 的网络连接。或者，同时发出的请求过多触发了 Google 的封锁。在后一种情况下，请稍后对该位学者重试（而不是全局刷新）。

* * *

## 致谢

本项目使用 [Python](https://www.python.org/) 中的 [Flet](https://flet.dev/) 构建，并采用 [MiSans](https://hyperos.mi.com/font) 可变字体。

* * *

## 重要免责声明

**开发者声明** 我是一名个人非专业开发者。创建此工具主要是为了满足我自己的学术追踪需求。

* **功能请求**：虽然欢迎提出建议，但请理解我无法保证实现任何请求的功能。将始终优先考虑我个人的使用需求。

* **错误报告**：如果您遇到 bug，请通过 **GitHub Issues** 使用 **English 英语** 提交。

* **连接问题**：我**不会**回答诸如“为什么我无法连接到 Google Scholar？”或“为什么获取失败？”之类的问题。Google Scholar 对网络环境高度敏感。如果您遇到这些问题，**请首先检查您的网络设置、代理或 VPN 状态。**

* **本地化**：非常感谢对 `locales/` 目录中其他语言的贡献。请通过 **Pull Requests** 提交您的改进。

_本项目按“原样”提供，不提供任何形式的保证。_
