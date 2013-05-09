$(document).ready(function(){
  $('#weibo-topic').html('<wb:topic border="n" width="560" height="450" tags="澳洲易购" language="zh_cn" version="base" appkey="3emiG3" footbar="y" filter="y" title="澳洲易购"></wb:topic>');

  $('.carousel').carousel({
    interval: 4000
  });

  $.extend($.jgrid.search, {
      closeOnEscape: true,
      closeAfterSearch: true,
      closeAfterReset: true,
      width: 600,
      showQuery: true,
      searchOnEnter: true,
      sopt: ['cn'],
  });

  var reloadProducts = function(category) {
    $.getJSON('https://dl.dropboxusercontent.com/s/ormdv70pfub25r0/products.json?token_hash=AAEMqnrJ467iNRqPmGbKxGwPTrhM3V0Xmdp7eqNDOeIYeQ&dl=1', function(response){
      $("#products").jqGrid({
          datatype: "local",
          data: filterProducts(response.products, category),
          autowidth:true, 
          colNames:['', '产品名称', '建议零售价', '易购价', '折扣'],
          colModel:[
            {name:'image',index:'image', sortable: false, search: false, formatter:function(cellvalue, options, rowObject){
              return "<img class='small' src='" + cellvalue + "' />";
            }},
            {name:'name',index:'name', sorttype: "text", formatter:function(cellvalue, options, rowObject){
              return "<span id='product-name' style='word-wrap: break-word;'>" + cellvalue + "</span>";
            }},
            {name:'rrp',index:'rrp', sortable: true, search: false, formatter:function(cellvalue, options, rowObject){
              return cellvalue ? "<span style='text-decoration: line-through;'>" + cellvalue + "澳元" + "</span>" : '暂缺';
            }},
            {name:'our_price',index:'our_price', sortable: true, search: false, formatter:function(cellvalue, options, rowObject){
              return cellvalue ? "<span style='color: green'>" + cellvalue  + "澳元 + 邮费" + "</span>" : '暂缺';
            }},
            {name:'discount',index:'discount', sortable: true, search: false, formatter:function(cellvalue, options, rowObject){
              return cellvalue ? "<span style='color: red'>" + cellvalue  + "澳元" + "</span>" : '暂缺';
            }}
          ],
          ignoreCase: true,
          rowNum:10,
          rowList:[10,25,50,100],
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