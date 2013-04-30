---
layout: page
title: 首页
tagline: 
group: navigation
permalink: index.html
---

<div id="this-carousel-id" class="carousel slide">
  <div class="carousel-inner">
    <div class="item active">
      <a href="http://www.coles.com.au"><img src="/assets/images/slider-coles.png" alt="Coles" /></a>
      <div class="carousel-caption">
        <p>澳洲最大连锁超市之一 Coles</p>
        <p><a href="http://www.coles.com.au">去Coles看看 &raquo;</a></p>
      </div>
    </div>
    <div class="item">
      <a href="http://www.woolworths.com.au"><img src="/assets/images/slider-woolworths.png" alt="Woolworths" /></a>
      <div class="carousel-caption">
        <p>澳洲最大连锁超市之一 Woolworths</p>
        <p><a href="http://www.woolworths.com.au">去Woolworths看看 &raquo;</a></p>
      </div>
    </div>
  </div>
  <a class="carousel-control left" href="#this-carousel-id" data-slide="prev">&lsaquo;</a>
  <a class="carousel-control right" href="#this-carousel-id" data-slide="next">&rsaquo;</a>
</div>

<hr>

<!-- Example row of columns -->
<div class="row-fluid">
<div class="span4">
  <h2>Heading</h2>
  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
  <p><a class="btn" href="#">View details &raquo;</a></p>
</div>
<div class="span4">
  <h2>Heading</h2>
  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
  <p><a class="btn" href="#">View details &raquo;</a></p>
</div>
<div class="span4">
  <h2>Heading</h2>
  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
  <p><a class="btn" href="#">View details &raquo;</a></p>
</div>
</div>

<hr>
<script src="/assets/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function(){
    $('.carousel').carousel({
      interval: 4000
    });
  });
</script>
