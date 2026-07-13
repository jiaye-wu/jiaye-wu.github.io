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
toc:
  sidebar: left
---

Closed-source freeware. The repository is hosted on [GitHub](https://github.com/jiaye-wu/AcaRadar).

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

* **Publication Highlights**: Display each scholar's highest-cited publication and their latest publication by year.

* **Multi-Tag Management**: Organize your monitored scholars using a flexible tagging system. Filter the list by specific groups or research interests.

* **Anti-Block Mechanism**: Features a customizable delay slider to manage request frequency, reducing the risk of being blocked by Google Scholar's anti-crawling measures.

* **Filtering & Sorting**: Filter scholars by one or more labels, then sort the displayed list by citations, h-index, i10-index, publication count, or name in ascending or descending order.

* **Search & Refresh Controls**: Search by scholar name or Google Scholar ID, refresh a single profile, or update the full list in sequence.

* **CSV Import, Backup & Ranking**: Import scholars and labels in bulk, export a restorable CSV backup, or export the currently displayed ranking for reporting and analysis.

* **Recycle Bin**: Removed scholars are retained locally so they can be restored later, with permanent deletion available when needed.

* **Privacy & Persistence**: All data is stored locally in JSON format, and scholar avatars are cached on your machine to minimize network requests.

* **Internationalization (i18n)**: Supports dynamic language switching between Simplified Chinese, Traditional Chinese, US English, and UK English, with state persistence.

## Install & Update

* **Minimum Requirement**: Microsoft Windows 10/11 X64 with minimum resolution 1366x768. Linux AMD64 version coming soon.

* **Installation**: Download the compiled Windows `.exe` release and put it in a dedicated writable folder. The main application source code is not distributed as part of the release.

* **Update**: Check the **Releases** page, download and replace the `.exe` file.

* * *

## Acknowledgement

This project is built using [Flet](https://flet.dev/) in [Python](https://www.python.org/), with [MiSans](https://hyperos.mi.com/font) variable fonts.

* * *

## Important Disclaimer

**Developer Statement** I am an individual, non-professional developer. This tool was created primarily to satisfy my own academic tracking needs.

* **Feature Requests**: While suggestions are welcome, please understand that I cannot guarantee the implementation of any requested features. Priority is always given to my personal use requirements.

* **Bug Reports**: If you encounter a bug, please submit it via **GitHub Issues** using **English**.

* **Connectivity Issues**: I will **not** answer questions such as "Why can't I connect to Google Scholar?" or "Why did the fetch fail?". Google Scholar is highly sensitive to network environments. If you face these issues, **please check your network settings, proxies, or VPN status first.** Technical details are recorded in `acaradar.log` beside the application.

* **Localization**: The localization key-value files are published separately from the private application source. Contributions to the public `locales/` files are highly appreciated and may be submitted via **Pull Requests** for manual review.

_This project is provided "as is" without warranty of any kind._
