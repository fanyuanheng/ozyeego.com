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
      <a href="http://hubblesite.org/gallery/album/entire/pr2006046a/xlarge_web/npp/128/">  <img src="/assets/images/antennae.jpg" alt="Antennae Galaxies" />
      </a>
      <div class="carousel-caption">
        <p>The Antennae Galaxies</p>
        <p><a href="http://hubblesite.org/gallery/album/entire/pr2006046a/xlarge_web/npp/128/">Hubblesite.org &raquo;</a></p>
      </div>
    </div>
    <div class="item">
      <a href="http://hubblesite.org/gallery/album/entire/pr2007016e/xlarge_web/npp/128/">
        <img src="/assets/images/carina.jpg" alt="Carina Caterpillar" />
      </a>
      <div class="carousel-caption">
        <p>Carina Nebula: The Caterpillar</p>
        <p><a href="http://hubblesite.org/gallery/album/entire/pr2007016e/xlarge_web/npp/128/">Hubblesite.org &raquo;</a></p>
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
