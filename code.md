---
layout: default
title: ALPhA Code
stylesheet: /assets/css/code.css?v=20261021
---

<div class="container code-page">

<h1>Code</h1>

<p>A selection of open-source code related to ALPhA publications. These repositories live in the <a href="https://github.com/alpha-davidson">alpha-davidson GitHub organization</a>.</p>

<ul class="repo-list">
{% for repo in site.data.code.research %}
  <li class="repo">
    <a class="repo-name" href="https://github.com/alpha-davidson/{{ repo.name }}">{{ repo.name }}</a>
    <p>{{ repo.description }}</p>
    {% if repo.papers %}{% for p in repo.papers %}
    <p class="repo-paper">Paper: <a href="{{ p.paper_url }}">{{ p.paper }}</a><br>Code: <a href="https://github.com/alpha-davidson/{{ repo.name }}/tree/{{ p.release }}">release {{ p.release }}</a> · Zenodo: <a href="https://doi.org/{{ p.doi }}">doi:{{ p.doi }}</a></p>
    {% endfor %}{% else %}
    <p class="repo-paper">Paper: <a href="{{ repo.paper_url }}">{{ repo.paper }}</a></p>
    {% if repo.doi %}<p class="repo-paper">Archived on Zenodo: <a href="https://doi.org/{{ repo.doi }}">doi:{{ repo.doi }}</a></p>{% endif %}{% endif %}
  </li>
{% endfor %}
</ul>

<p class="code-acknowledgement">ALPhA's research is supported by the National Science Foundation under awards <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2311263">2311263</a> and <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2012865">2012865</a>; see the <a href="{{ '/' | relative_url }}#funding">full list of ALPhA funding</a>. Each repository's README acknowledges the specific funding for that work.</p>

</div>
