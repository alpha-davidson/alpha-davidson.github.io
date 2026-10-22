---
layout: default
title: ALPhA Code
stylesheet: /assets/css/code.css?v=20261021
---

<div class="container code-page">

<h1>Code</h1>

<p>A selection of open-source code related to ALPhA publications. These repositories live in the <a href="https://github.com/alpha-davidson">alpha-davidson GitHub organization</a>.</p>

<p class="code-acknowledgement">ALPhA's research is supported by the National Science Foundation under awards <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2311263">2311263</a> and <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2012865">2012865</a>; see the <a href="{{ '/' | relative_url }}#funding">full list of ALPhA funding</a>. Each repository's README acknowledges the specific funding for that work.</p>

<ul class="repo-list">
{% for repo in site.data.code.research %}
  <li class="repo">
    <a class="repo-name" href="https://github.com/alpha-davidson/{{ repo.name }}">{{ repo.name }}</a>
    <p>{{ repo.description }}</p>
    <p class="repo-paper">Paper: <a href="{{ repo.paper_url }}">{{ repo.paper }}</a></p>
  </li>
{% endfor %}
</ul>

</div>
