<script>
	$(document).ready(function(){
    $('.nav li').click(function(){
    	$('.nav li').removeClass('active');
    	$(this).addClass('active');
    });
    _.each(products.products, function(product){
    	$('#product-list').append("<li><img src='" + product.image + "' /></li>");
    });
  });
</script>