---
layout: publications_layout
title: ALPhA Davidson
---

*ALPhA members are **bold** in the author lists below.*

---------

{% for publication in site.data.publications %}
<div class="publication-item">
  <div class="publication-preview">
    <iframe src="{{ publication.url }}" frameborder="0" scrolling="no"></iframe>
  </div>
  <div class="publication-details">
    <h3>{{ publication.title }}</h3>
    <p class="authors">{{ publication.authors }}</p>
    <p class="journal">{{ publication.journal }}{% if publication.volume %}, {{ publication.volume }}{% endif %}, {{ publication.year }}</p>
    {% if publication.doi %}
    <p class="doi">DOI: <a href="{{ publication.doi }}" target="_blank">{{ publication.doi }}</a></p>
    {% endif %}
    <p class="url">URL: <a href="{{ publication.url }}" target="_blank">{{ publication.url }}</a></p>
    <button class="view-publication" data-url="{{ publication.url }}">View Full Publication</button>
  </div>
</div>
{% endfor %}