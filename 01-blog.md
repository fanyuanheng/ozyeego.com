---
layout: page
title: "博客"
tagline: "博客"
group: navigation
permalink: blog.html
---
{% include JB/setup %}

<div class="row">
  <div class="span8">
		<ul class="posts">
		  {% for post in site.posts %}
		    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
		  {% endfor %}
		</ul>
	</div>
</div>
