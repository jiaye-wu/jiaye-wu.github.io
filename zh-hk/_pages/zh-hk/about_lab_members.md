## 實驗室成員

{% assign display_categories = "post-doc,doctor,master,bachelor,alumni" | split: "," %}

<div class="member-list-layout">
  <nav class="member-toc sticky-top">
    <ul class="nav navbar-nav">
      <li>
        <a class="nav-link" href="#principal-investigator">{{ site.data[site.active_lang].strings.members.pi }}</a>
      </li>
      {% for category in display_categories %}
        {% assign categorized_members = site.members | where: "category", category %}
        {% if categorized_members.size > 0 %}
          {% assign category_id = site.data[site.active_lang].strings.member_categories[category] | slugify %}
          <li>
            <a class="nav-link" href=".#{{ category_id }}">{{ site.data[site.active_lang].strings.member_categories[category] }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </nav>

  <div class="members">
    {% for category in display_categories %}
      {% assign categorized_members = site.members | where: "category", category %}
      {% if categorized_members.size > 0 %}
        {% assign category_id = site.data[site.active_lang].strings.member_categories[category] | slugify %}
        <h3 id="{{ category_id }}" class="category">
          <a href=".#{{ category_id }}">{{ site.data[site.active_lang].strings.member_categories[category] }}</a>
        </h3>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
          {% assign year_groups = categorized_members | group_by: "start_year" | sort: "name" | reverse %}
          {% for year_group in year_groups %}
            {% assign sorted_members = year_group.items | sort: "order" %}
            {% for member in sorted_members %}
              {% include members.liquid member=member %}
            {% endfor %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>
