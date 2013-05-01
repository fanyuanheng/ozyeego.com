---
layout: page
title: "博客"
tagline: "博客"
group: navigation
permalink: blog.html
---
{% include JB/setup %}

<ul >
  {% for post in site.posts %}
  <li>
  	<span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
  </li>
  <p class="muted text-left">{{ post.content | strip_html | truncatewords:75 }}</p>
  <a href="{{ post.url }}">阅读全文...</a>
  <br><br>
  {% endfor %}
</ul>