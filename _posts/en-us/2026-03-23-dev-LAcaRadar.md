---
layout: post
title: "[Academic Tool] L'AcaRadar Project"
date: 2026-03-23 10:20:00
description: a Google Scholar profile tracking tool on PC
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
---

The repository is hosted on [GitHub](https://github.com/jiaye-wu/AcaRadar).

# L'AcaRadar

**L'AcaRadar** is a lightweight, local-first academic tracking tool designed to monitor and visualize the citation metrics and publication updates of researchers via Google Scholar. It serves as a personal dashboard to keep a "radar" on scholars' academic growth.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/LAcaRadar.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## Core Features

* **Scholar Monitoring**: Track key metrics including total citations, h-index, i10-index, and total publication counts.

* **Metric Comparison**: Automatically calculates differences between the latest crawl and previous records, highlighting academic growth (e.g., `+10` citations).

* **Multi-Tag Management**: Organize your monitored scholars using a flexible tagging system. Filter the list by specific groups or research interests.

* **Anti-Block Mechanism**: Features a customizable delay slider to manage request frequency, reducing the risk of being blocked by Google Scholar's anti-crawling measures.

* **Advanced Sorting**: Sort your academic list by citations, h-index, publication count, name, or group.

* **Data Export**: Export your ranked scholar list to a CSV file for external reporting or analysis.

* **Privacy & Persistence**: All data is stored locally in JSON format, and scholar avatars are cached on your machine to minimize network requests.

* **Internationalization (i18n)**: Supports dynamic language switching (currently including English and Chinese) with state persistence.

## Install & Update

* **Minimum Requirement**: Microsoft Windows 10/11 X64 with minimum resolution 1366x768. Linux AMD64 version coming soon.

* **Installation**: Download the zip archive (`.zip`, `.z01`, `.z02`, ...) and decompress. Put the extracted `.exe` file in a dedicated folder.

* **Update**: Check the **Releases** page, download and replace the `.exe` file.

## FAQ

- Last updated date unchanged after a refresh/fetch?

> Check your network connection with Google. Or, too many requests at the same time that triggered a block by Google. In the latter case, try again later for that individual scholar (not global refresh).

* * *

## Acknowledgement

This project is built using [Flet](https://flet.dev/) in [Python](https://www.python.org/), with [MiSans](https://hyperos.mi.com/font) variable fonts.

* * *

## Important Disclaimer

**Developer Statement** I am an individual, non-professional developer. This tool was created primarily to satisfy my own academic tracking needs.

* **Feature Requests**: While suggestions are welcome, please understand that I cannot guarantee the implementation of any requested features. Priority is always given to my personal use requirements.

* **Bug Reports**: If you encounter a bug, please submit it via **GitHub Issues** using **English**.

* **Connectivity Issues**: I will **not** answer questions such as "Why can't I connect to Google Scholar?" or "Why did the fetch fail?". Google Scholar is highly sensitive to network environments. If you face these issues, **please check your network settings, proxies, or VPN status first.**

* **Localization**: Contributions to the `locales/` directory for additional languages are highly appreciated. Please submit your improvements via **Pull Requests**.

_This project is provided "as is" without warranty of any kind._
