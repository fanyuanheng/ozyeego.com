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

  var products_data_urls = {
    "vitamins" : 'https://dl.dropboxusercontent.com/s/o8f6dqz04pimrmw/vitamins.json?token_hash=AAHQTpeJwTgf78TibAZZRFiTJf2Xr5g4h0gSAocNxuPokg&dl=1',
    "weight loss" : 'https://dl.dropboxusercontent.com/s/914xylvpzez1vcs/weight%20loss.json?token_hash=AAEfZxFsdy-YdhcIoYVKQKAyLe8RqyoUdExBlAcS2NtWXg&dl=1',
    "baby care" : 'https://dl.dropboxusercontent.com/s/by6rdqodh30n2ze/baby%20care.json?token_hash=AAHvmMAEP6bNjIXcpf-fVU0k0jHvhqOva3qL_Y6S5TPzTw&dl=1',
    "skin care" : 'https://dl.dropboxusercontent.com/s/u7x9sl2inyagivx/skin%20care.json?token_hash=AAFgCrPcs_86-qEMsuruUGKFajKq8BKs0QB5jSDYEp7UTA&dl=1',
    "food" : 'https://dl.dropboxusercontent.com/s/sr4297cqcjlum91/food.json?token_hash=AAGL8ff5ywjPz-kwCnNBVieYfRwVi_cLm0Cja6uexIa1Wg&dl=1'
  };

  var reloadProducts = function(category) {
    $("#loading-message").show();
    $("#products-wrapper").hide();
    $.getJSON(products_data_urls[category], function(response){
      $("#loading-message").hide();
      $("#products-wrapper").show();
      $("#products").jqGrid({
          datatype: "local",
          data: filterProducts(response.products, category),
          autowidth:true, 
          colNames:['', '产品名称', '建议零售价', '易购价', '折扣'],
          colModel:[
            {name:'image',index:'image', width: 60, sortable: false, search: false, formatter:function(cellvalue, options, rowObject){
              return "<img class='small' src='" + cellvalue + "' />";
            }},
            {name:'name',index:'name', sorttype: "text", formatter:function(cellvalue, options, rowObject){
              return "<span id='product-name' style='word-wrap: break-word;'>" + cellvalue + "</span>";
            }},
            {name:'rrp',index:'rrp', sorttype: "float", search: false, formatter:function(cellvalue, options, rowObject){
              return cellvalue ? "<span style='text-decoration: line-through;'>" + cellvalue + "澳元" + "</span>" : '暂缺';
            }},
            {name:'our_price',index:'our_price', sorttype: "float", search: false, formatter:function(cellvalue, options, rowObject){
              return cellvalue ? "<span style='color: green'>" + cellvalue  + "澳元 + 邮费" + "</span>" : '暂缺';
            }},
            {name:'discount',index:'discount', sorttype: "float", search: false, formatter:function(cellvalue, options, rowObject){
              return cellvalue ? "<span style='color: red'>" + cellvalue  + "澳元" + "</span>" : '暂缺';
            }}
          ],
          hidegrid: false,
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

  $('#products-nav li').click(function(){
    $('#products-nav li').removeClass('active');
    $(this).addClass('active');
    var category = $(this).attr('category');
    $("#loading-message").show();
    $("#products-wrapper").hide();
    $.getJSON(products_data_urls[category], function(response){
      $("#loading-message").hide();
      $("#products-wrapper").show();
      $("#products").jqGrid('clearGridData')
        .jqGrid('setGridParam', { data: filterProducts(response.products, category)})
        .trigger('reloadGrid', [{ page: 1}]);
    });
  });

  reloadProducts('vitamins');
});