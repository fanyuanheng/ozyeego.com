<script>
	$(document).ready(function(){
    $('.nav li').click(function(){
    	$('.nav li').removeClass('active');
    	$(this).addClass('active');
    });

		$.getJSON('assets/products.json', function(response){
			$("#products").jqGrid({
	        datatype: "local",
	        data: response.products,
          autowidth:true,	
	        colNames:['name', 'image', 'supplier', 'category', 'rrp'],
	        colModel:[
	        	{name:'name',index:'name', sorttype: "text"},
	        	{name:'image',index:'image', sortable: false},
	          {name:'supplier',index:'supplier', sorttype: "text"},
	          {name:'category',index:'category', sorttype: "text"},
	          {name:'rrp',index:'rrp', sorttype: "text"}
	        ],
	        rowNum:20,
	        rowList:[5,10,20],
	        pager: '#pager',
	        gridview:true,
          rownumbers:true,
          viewrecords: true,
          sortorder: 'asc',
          caption:'产品列表',
          height: '100%'
	    });
	    $("#products").jqGrid('navGrid','#pager',{add:false,edit:false,del:false});
		});

  });
</script>