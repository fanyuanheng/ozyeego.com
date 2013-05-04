<script>
	$(document).ready(function(){

		var reloadProducts = function(category) {
			$.getJSON('assets/products.json', function(response){
				$("#products").jqGrid({
		        datatype: "local",
		        data: filterProducts(response.products, category),
	        	autowidth:true,	
		        colNames:['', '产品名称', '供应商', '类别', '建议零售价'],
		        colModel:[
		        	{name:'image',index:'image', sortable: false, formatter:function(cellvalue, options, rowObject){
		        		return "<img src='" + cellvalue + "' />";
		        	}},
		        	{name:'name',index:'name', sorttype: "text"},
		          {name:'supplier',index:'supplier', sorttype: "text"},
		          {name:'category',index:'category', sorttype: "text"},
		          {name:'rrp',index:'rrp', sorttype: "text"}
		        ],
		        rowNum:20,
		        rowList:[20,50,100],
		        pager: '#pager',
		        gridview:true,
	          rownumbers:true,
	          viewrecords: true,
	          sortorder: 'asc',
	          caption:'产品列表',
	          height: '100%'
		    }).trigger("reloadGrid");
		    $("#products").jqGrid('navGrid','#pager',{add:false,edit:false,del:false});
	    });
		};

		var filterProducts = function(products, category) {
			return _.filter(products, function(product){
				return product.category === category;
			});
		};

    $('.nav li').click(function(){
    	$('.nav li').removeClass('active');
    	$(this).addClass('active');
    	var category = $(this).attr('category');
    	$.getJSON('assets/products.json', function(response){
	    	$("#products").jqGrid('clearGridData')
	    		.jqGrid('setGridParam', { data: filterProducts(response.products, category)})
	  			.trigger('reloadGrid', [{ page: 1}]);
  		});
    });

		reloadProducts('vitamins');

  });
</script>