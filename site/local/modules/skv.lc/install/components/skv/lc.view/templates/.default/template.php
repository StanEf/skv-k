<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
//echo $arResult['cameras'][1][8]['LINK'] . '<br>';
//echo htmlspecialcharsBack($arResult['cameras'][1][8]['LINK']);
// $str = htmlspecialcharsBack($arResult['cameras'][1][8]['LINK']);
// $str = ltrim($str, '"');
//var_dump($str); 
// echo '<br>'.$str;
// echo '<h1>привет</h1>';
// echo '<iframe width="560" height="315" src="http://lideo.ru/embed/4186" frameborder="0" allowfullscreen></iframe>';
// exit();
// echo'arResult<pre>';
// print_r($arResult);
// echo'</pre>';
?>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
<link href="css/font-awesome.min.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/templatemo-style.css" rel="stylesheet">

<script src="http://code.jquery.com/jquery-1.8.3.js"></script>


<script src="<?=SITE_TEMPLATE_PATH?>/js/postmessage.js"></script>
<script src="<?=SITE_TEMPLATE_PATH?>/js/FrameManager.js"></script>
	
<script>

$(function() {
	// var body_height = $(".moto-background").height();
	// console.log("body_height " + body_height);
	
	// var iframe_body = $('#frame_docs');
	// console.log("iframe body_height " + iframe_body.height());
    // iframe.height($(document.body).height());
	
	$(".top_menu_button").on("click", function(){
		page_lc.active_type = $(this).data("type");
		
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
		
	});
	
	var page_lc = new Object();
	
	page_lc.onAjaxSuccess =  function(request){
		console.log('request post ' + request);
		$("#frame_docs").html(request);
																	
		console.log('request post ' + request);
	};
	
	
	
	page_lc.get_active_type = function(){
										$(".top_menu_button").each(function(){
											if($(this).children("a").hasClass("active")){
												active_type = $(this).data("type");
												console.log('active_type 4 '+active_type);
												page_lc.active_type = active_type;
											}
										});
									};
									
	page_lc.get_active_object = function(){
											$(".left-nav-object").each(function(){
												if($(this).children("a").hasClass("active")){
													active_object = $(this).data("object");
													console.log('active_object '+active_object);
													page_lc.active_object = active_object;
												}
											});
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


<div class="templatemo-flex-row">
  <div class="templatemo-sidebar">
	<div class="mobile-menu-icon">
		<i class="fa fa-bars"></i>
	</div>
	<nav class="templatemo-left-nav moto-widget-menu">          
	  <ul>
	<?if(!empty($arResult['objects'])):?>
		<?foreach($arResult['objects'] as $num => $object):?>
		<li class="left-nav-object" data-object="<?= $object['ID'] ?>"><a href="" <?if($num == 0):?>class="active"<?endif;?> ><?= $object['NAME'] ?></a></li>
		<?endforeach;?>
	<?endif;?>
	  </ul>  
	</nav>
  </div>
  <!-- Main content --> 
  <div class="templatemo-content col-1 light-gray-bg">
	<div class="templatemo-top-nav-container">
	  <div class="row">
		<nav class="templatemo-top-nav col-lg-12 col-md-12">
		  <ul class="text-uppercase">
			<li class="top_menu_button" data-type="docs"><a href="" class="active">Документы</a></li>
			<li class="top_menu_button" data-type="video"><a href="">Видео</a></li>
	<!--	<li class="top_menu_button" data-type="report"><a href="">Отчеты</a></li> -->
		  </ul>  
		</nav> 
	  </div>
	</div>
		
	<div class="templatemo-content-container" data-type="docs" data-object="<?= $object_id ?>" slyle="height:100%; width:100%;">

	<iframe id="frame_docs" name="frame_docs" src="/lc/docs/" onload="FrameManager.registerFrame(this)" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" ></iframe>
	

	</div> 

	

		  
	</div>
  </div>
</div>