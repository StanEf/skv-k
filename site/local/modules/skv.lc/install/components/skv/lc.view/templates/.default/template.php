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
echo'<pre>';
print_r($arResult);
echo'</pre>';




?>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,700' rel='stylesheet' type='text/css'>
<link href="css/font-awesome.min.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/templatemo-style.css" rel="stylesheet">

<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script>
$(function() {
	$(".top_menu_button").on("click", function(){
		page_lc.show_hide();
	});
	
	$(".left-nav-object").on("click", function(){
		page_lc.active_object = $(this).data("object");
		$(".left-nav-object").each(function() {
			if($(this).data("object") == page_lc.active_object){
				$(this).children("a").addClass("active");
			}else{
				$(this).children("a").removeClass("active");
			}
		});
		page_lc.show_hide();
	});
	
	var page_lc = new Object();
	
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
	page_lc.show_hide();

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
	  <!--
		<li><a href="#" class="active">object1</a></li>
		<li><a href="#">object2</a></li>
		<li><a href="#">object3</a></li>
		<li><a href="#">object4</a></li>
		<li><a href="#">object5</a></li>
		-->
	  </ul>  
	</nav>
  </div>
  <!-- Main content --> 
  <div class="templatemo-content col-1 light-gray-bg">
	<div class="templatemo-top-nav-container">
	  <div class="row">
		<nav class="templatemo-top-nav col-lg-12 col-md-12">
		  <ul class="text-uppercase">
			<li class="top_menu_button" data-type="video"><a href="" class="active">Видео</a></li>
			<li class="top_menu_button" data-type="docs"><a href="">Документы</a></li>
			<li class="top_menu_button" data-type="report"><a href="">Отчеты</a></li>
		  </ul>  
		</nav> 
	  </div>
	</div>
	<?if(!empty($arResult['cameras'])):?>
		<?foreach($arResult['cameras'] as $object_id => $cameras):?>
		
	<div class="templatemo-content-container" data-type="video" data-object="<?= $object_id ?>" style="display:none;">
			<?for($row=0;$row<ceil(count($cameras)/2);$row++):?>
	  <div class="templatemo-flex-row flex-content-row">
		<div class="templatemo-content-widget white-bg col-1 text-center">
		  <h2 class="text-uppercase"><?=$cameras[2*$row]['NAME']?></h2>
		  <?= htmlspecialcharsBack($cameras[2*$row]['LINK'])?>
		</div>
		<?if(isset($cameras[2*$row+1])):?>
		<div class="templatemo-content-widget white-bg col-1 text-center">
		  <h2 class="text-uppercase"><?=$cameras[2*$row+1]['NAME']?></h2>
		  <?= htmlspecialcharsBack($cameras[2*$row+1]['LINK'])?>
		</div>
		<?endif;?>
	  </div>
			<?endfor;?>
	</div> 
		<?endforeach;?>
	<?endif;?>
	
	<div class="templatemo-content-container" style="display:none;" data-type="docs" style="display:none;">
	  <div class="templatemo-flex-row flex-content-row">
		<div class="templatemo-content-widget white-bg col-1 text-center">
		  <h3 class="text-uppercase margin-bottom-10">Документ 1</h3>
		</div>
		<div class="templatemo-content-widget white-bg col-1 text-center">
		  <h3 class="text-uppercase margin-bottom-10">Документ 2</h3>
		</div>
	  </div>
	</div> 
		  
	</div>
  </div>
</div>