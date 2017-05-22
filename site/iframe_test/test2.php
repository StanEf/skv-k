<!DOCTYPE html>
<html>
<body>
    <!--<script src="http://yandex.st/jquery/1.7.1/jquery.min.js"></script>-->
    <script src="postmessage.js"></script>
    <script src="Frame.js"></script>
<div style="border:1px solid red;margin:0; height:200px;">
  test2
  
  
  
  
  <?
//if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

//global $APPLICATION;

// require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
// require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_after.php');


define('STOP_STATISTICS', true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
$GLOBALS['APPLICATION']->RestartBuffer(); 

	$APPLICATION->IncludeComponent(
	"bitrix:lists", 
	".default", 
	array(
		"IBLOCK_TYPE_ID" => "lists",
		"SEF_MODE" => "Y",
		"SEF_FOLDER" => "/lc/docs/",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"COMPONENT_TEMPLATE" => ".default",
		"SEF_URL_TEMPLATES" => array(
			"lists" => "",
			"list" => "#list_id#/view/#section_id#/",
			"list_sections" => "#list_id#/edit/#section_id#/",
			"list_edit" => "#list_id#/edit/",
			"list_fields" => "#list_id#/fields/",
			"list_field_edit" => "#list_id#/field/#field_id#/",
			"list_element_edit" => "#list_id#/element/#section_id#/#element_id#/",
			"list_file" => "#list_id#/file/#section_id#/#element_id#/#field_id#/#file_id#/",
			"bizproc_log" => "#list_id#/bp_log/#document_state_id#/",
			"bizproc_workflow_start" => "#list_id#/bp_start/#element_id#/",
			"bizproc_task" => "#list_id#/bp_task/#section_id#/#element_id#/#task_id#/",
			"bizproc_workflow_admin" => "#list_id#/bp_list/",
			"bizproc_workflow_edit" => "#list_id#/bp_edit/#ID#/",
			"bizproc_workflow_vars" => "#list_id#/bp_vars/#ID#/",
			"bizproc_workflow_constants" => "#list_id#/bp_constants/#ID#/",
			"list_export_excel" => "#list_id#/excel/",
			"catalog_processes" => "catalog_processes/",
		)
	),
	false
);








//die();
?>
  
  
  
  
  
  
  
  
  
  
  sdsds
  
  
  
  
  
  
  
  
  </div>
</body>
</html>