---
page_id: repositories
layout: page
permalink: /repositories/
title: 代码仓库
description: 相关和实用代码仓库列表
nav: false
nav_order: 99
---

## 实验室相关GitHub用户

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

<h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

## 实用GitHub代码仓库

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

**致谢及开源信息：** 本网站基于[Jekyll](https://github.com/jekyll/jekyll)主题[al-folio](https://github.com/alshedivat/al-folio)和[multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio)制作。谷歌学术统计由衍生自[AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io)主题的[GH-ScholarBot](https://github.com/jiaye-wu/GH-ScholarBot/)项目实现。网站服务搭建于[GitHub Pages](https://pages.github.com/)上。字形字体出自[小米MiSans](https://hyperos.mi.com/font/)项目和[思源黑体](https://github.com/adobe-fonts/source-han-sans)。
