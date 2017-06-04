<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
?>
	
<script>
function autoResize(iframe) {
	// console.log('height ' + $(iframe).contents().find('html').height());
    $(iframe).height($(iframe).contents().find('html').height()+400);
	//console.log("holla");
	
}


$(function() {	

	var page_lc = new Object();

	$(".top_menu_button").on("click", function(){

		page_lc.get_active_type($(this));
	
		$.post(
		  "/lc/ajax.php",
		  {
			object: page_lc.active_object ,
			type: page_lc.active_type
		  },
		  page_lc.onAjaxSuccess
		);
		
	});
	
	$(".left-nav-object").on("click", function(){
		page_lc.active_object = $(this).data("object");
		page_lc.get_active_object($(this));
		$.post(
		  "/lc/ajax.php",
		  {
			object: page_lc.active_object ,
			type: page_lc.active_type
		  },
		  page_lc.onAjaxSuccess
		);
		
	});
	
	page_lc.onAjaxSuccess =  function(request){
		// console.log('request post ' + request);
		
		$(".templatemo-content-container").html(request);
																	
		// console.log('request post ' + request);
	};
	
	
	
	page_lc.get_active_type = function(elem){
									if(!elem){
										$(".top_menu_button").each(function(){
											if($(this).children("a").hasClass("active")){
												active_type = $(this).data("type");
												// console.log('active_type 4 '+active_type);
												page_lc.active_type = active_type;
											}
										});
									}else{
										$(".top_menu_button").each(function(){
											$(this).children("a").removeClass("active");
										});
										elem.children("a").addClass("active");
										page_lc.active_type = elem.data("type");
									}
								};
									
	page_lc.get_active_object = function(elem){
										console.log("get_active_object");
										if(!elem){
											$(".left-nav-object").each(function(){
												if($(this).children("a").hasClass("active")){
													active_object = $(this).data("object");
													// console.log('active_object '+active_object);
													page_lc.active_object = active_object;
													
													if(page_lc.active_type == "docs"){
														var document_frame_src = $("#document_frame")[0].src;
														console.log(document_frame_src);
														// console.log(document_frame_src.indexOf('object') );
														var arr_document_frame_src = document_frame_src.split("/");
														console.log(arr_document_frame_src);
														arr_document_frame_src[arr_document_frame_src.length - 2] = page_lc.active_object;
														$("#document_frame")[0].src = arr_document_frame_src.join("/");
														
														// if(document_frame_src.indexOf('object_id') + 1) { 
															
														// }else{
															// $("#document_frame")[0].src = document_frame_src + "?object=" + page_lc.active_object;
														// }
														
														
													}
													
												}
											});
										}else{
											$(".left-nav-object").each(function(){
												$(this).children("a").removeClass("active");
											});
											elem.children("a").addClass("active");
											page_lc.active_object = elem.data("object");
											
											if(page_lc.active_type == "docs"){
												var document_frame_src = $("#document_frame")[0].src;
												console.log(document_frame_src);
												// console.log(document_frame_src.indexOf('object') );
												
												var arr_document_frame_src = document_frame_src.split("/");
												console.log(arr_document_frame_src);
												console.log(arr_document_frame_src[arr_document_frame_src.length - 2] );
												arr_document_frame_src[arr_document_frame_src.length - 2] = page_lc.active_object;
												console.log(arr_document_frame_src.join("/"));
												$("#document_frame")[0].src = arr_document_frame_src.join("/");
												
												// if(document_frame_src.indexOf('object') + 1) {
													// var arr_document_frame_src = document_frame_src.split("?object=");
												// }else{
													// $("#document_frame")[0].src = document_frame_src + "?object=" + page_lc.active_object;
												// }	
											}
											
												
										}	
									};
	page_lc.get_active_type();
	page_lc.get_active_object();

	page_lc.show_hide = function(){
								$(".templatemo-content-container").each(function(){
									if($(this).data("type") == page_lc.active_type && $(this).data("object") == page_lc.active_object){
										$(this).show();
									}else{
										$(this).hide();
									}
								});								
							};


});	
</script>
<?if(empty($arResult['objects'])):?>
	<h2>У Вас нет доступных объектов</h2>
<?else:?>
	<div class="templatemo-flex-row">
	  <div class="templatemo-sidebar">
		<div class="mobile-menu-icon">
			<i class="fa fa-bars"></i>
		</div>
		<nav class="templatemo-left-nav moto-widget-menu">          
		  <ul>
			<?foreach($arResult['objects'] as $num => $object):?>
			<li class="left-nav-object" data-object="<?= $object['ID'] ?>"><a href="" <?if($num == 0):?>class="active"<?endif;?> ><?= $object['NAME'] ?></a></li>
			<?endforeach;?>
		  </ul>  
		</nav>
	  </div>
	  <!-- Main content --> 
	  <div class="templatemo-content col-1 light-gray-bg">
		<div class="templatemo-top-nav-container">
		  <div class="row">
			<nav class="templatemo-top-nav col-lg-10 col-md-10">
			  <ul class="text-uppercase">
				<li class="top_menu_button" data-type="docs"><a href="" class="active">Документы</a></li>
				<li class="top_menu_button" data-type="video"><a href="">Видео</a></li>
		<!--	<li class="top_menu_button" data-type="report"><a href="">Отчеты</a></li> -->
			  </ul>  
			</nav>
			  <nav class="templatemo-top-nav col-lg-2 col-md-2">
				  <ul class="text-uppercase">
					  <li class="" ><a href="/index.php?logout=yes">Выход</a></li>

				  </ul>
			  </nav>
			<!--<div style="text-align: right;" class="text-uppercase  ">
				<a href="" style="color: #7f7f7f;">Выход</a>
			</div>-->
		  </div>
		</div>
			
		<div class="templatemo-content-container" data-type="docs" data-object="<?= $object_id ?> "style="height: 100%" >
			<iframe src="/lc/docs/<?= $arParams["IBLOCK_ID"]?>/view/0/object_id/" width="100%" height="100%"  scrolling="no" frameborder="0" marginheight="0" marginwidth="0"  onload="autoResize(this);" id="document_frame" name="document_frame"></iframe>
		</div> 	  
		</div>
	  </div>
	</div>
<?endif;?>