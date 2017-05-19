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



 $arResult['FOLDER'] = '/lc/doc/';
$arResult['URL_TEMPLATES']= Array(
            'lists'=> '',
            'list' => '#list_id#/view/#section_id#/',
            'list_edit' => '#list_id#/edit/',
            'list_fields' => '#list_id#/fields/',
            'list_field_edit' => '#list_id#/field/#field_id#/',
            'list_element_edit' => '#list_id#/element/#section_id#/#element_id#/',
            'list_file' => '#list_id#/file/#section_id#/#element_id#/#field_id#/#file_id#/',
            'bizproc_log' => '#list_id#/bp_log/#document_state_id#/',
            'bizproc_workflow_start' => '#list_id#/bp_start/#element_id#/',
            'bizproc_task' => '#list_id#/bp_task/#section_id#/#element_id#/#task_id#/',
            'bizproc_workflow_admin' => '#list_id#/bp_list/',
            'bizproc_workflow_edit' => '#list_id#/bp_edit/#ID#/',
            'bizproc_workflow_vars' => '#list_id#/bp_vars/#ID#/',
            'bizproc_workflow_constants' => '#list_id#/bp_constants/#ID#/',
            'list_export_excel' => '#list_id#/excel/',
            'list_sections' => '#list_id#/edit/#section_id#/',
            'bizproc_workflow_delete' => '?action=del_bizproc',
        );
echo'arResult<pre>';
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
		$(".templatemo-content-container").html(request);
																	
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
	//page_lc.show_hide();
	
	page_lc.store_session = function(){
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
		
	<div class="templatemo-content-container" data-type="docs" data-object="<?= $object_id ?>">
	
	<?$APPLICATION->IncludeComponent("bitrix:lists.list", ".default", array(
		"IBLOCK_TYPE_ID" => "lists",
		"IBLOCK_ID" => 54,
		"SECTION_ID" => 0,
		"LISTS_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["lists"],
		"LIST_EDIT_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_edit"],
		"LIST_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list"],
		"LIST_SECTIONS_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_sections"],
		"LIST_ELEMENT_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_element_edit"],
		"LIST_FILE_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_file"],
		"LIST_FIELDS_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_fields"],
		"EXPORT_EXCEL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_export_excel"],
		"BIZPROC_LOG_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["bizproc_log"],
		"BIZPROC_TASK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["bizproc_task"],
		"BIZPROC_WORKFLOW_START_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["bizproc_workflow_start"],
		"BIZPROC_WORKFLOW_ADMIN_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["bizproc_workflow_admin"],
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		),
		$component
	);	?>
	
	
	</div> 

	

		  
	</div>
  </div>
</div>