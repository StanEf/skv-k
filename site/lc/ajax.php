<?
//if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

//global $APPLICATION;

require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');

if($_POST["type"] == "docs"){
	
	$APPLICATION->IncludeComponent("bitrix:lists.list", ".default", array(
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
		""
	);	
	
}else if($_POST["type"] == "video"){
	$APPLICATION->IncludeComponent("skv:lc.view.camera", "", array(
		"OBJECT_ID" => $_POST["object"],
		),
		""
	);
	
}









?>