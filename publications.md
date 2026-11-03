---
layout: publications_layout
title: ALPhA Publications
stylesheet: /assets/css/publications.css?v=20261103
---

*ALPhA members are **bold** in the author lists below.*

---------

{% assign publications = site.data.publications %}
{% for publication in publications %}
<div class="publication-item">
  <div class="publication-preview">
    <span class="preview-label">Publication</span>
    <span class="preview-year">{{ publication.year }}</span>
    <span class="preview-journal">{{ publication.journal }}</span>
  </div>
  <div class="publication-details">
    <h3>{{ publication.title }}</h3>
    <p class="authors">{{ publication.authors }}</p>
    <p class="journal">{{ publication.journal }}{% if publication.volume %}, {{ publication.volume }}{% endif %}, {{ publication.year }}</p>
    {% if publication.doi %}
    <p class="doi">DOI: <a href="{{ publication.doi }}" target="_blank">{{ publication.doi }}</a></p>
    {% endif %}
    <p class="url">URL: <a href="{{ publication.url }}" target="_blank">{{ publication.url }}</a></p>
    <a class="view-publication" href="{{ publication.url }}" target="_blank" rel="noopener">View Full Publication</a>
    {% if publication.code %}<a class="view-code" href="{{ publication.code }}" target="_blank" rel="noopener">View Code</a>{% endif %}
  </div>
</div>
{% endfor %}
