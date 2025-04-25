---
page_id: repositories
layout: page
permalink: /repositories/
title: related and useful repositories
description: useful links to helpful repos.
nav: false
nav_order: 99
---

## related GitHub users

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

## useful GitHub repositories

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

**Acknowledgements & Open-Source Information:** This website is powered by [Jekyll](https://github.com/jekyll/jekyll) with [al-folio](https://github.com/alshedivat/al-folio) and [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio) themes. Google Scholar statistics by [GH-ScholarBot](https://github.com/jiaye-wu/GH-ScholarBot/) derived from Jekyll theme [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). Hosted by [GitHub Pages](https://pages.github.com/). Typeface and fonts from [Xiaomi MiSans](https://hyperos.mi.com/font/) and [Source Han Sans](https://github.com/adobe-fonts/source-han-sans).
