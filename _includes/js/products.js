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
	        colNames:['name', 'image', 'supplier', 'category', 'rrp'],
	        colModel:[
	        	{name:'name',index:'name', width:150, sortable:true},
	        	{name:'image',index:'image', width:100, sortable:true},
	          {name:'supplier',index:'supplier', width:150, sortable:true},
	          {name:'category',index:'category', width:150, sortable:true},
	          {name:'rrp',index:'rrp', width:50, sortable:true}
	        ],
	        rowNum:10,
	        rowList:[5,10,20],
	        pager: '#pager',
	        sortname: 'supplier',
	        viewrecords: true,
	        sortorder: "desc",
	        caption:"Sorting and paging of local data",
	        height: "100%"
	    }).jqGrid('navGrid','#pager',{add:false,edit:false,del:false});
		});

  });
</script>