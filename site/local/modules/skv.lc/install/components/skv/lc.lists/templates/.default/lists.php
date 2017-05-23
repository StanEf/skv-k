<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?><?
echo '$arParams<pre>';
print_r($arParams);
echo '</pre>';
echo '<pre>99999999999999999999$arResult';
print_r($arResult);
echo '</pre>';


/*$APPLICATION->IncludeComponent("bitrix:lists.list", ".default", array(
	"IBLOCK_TYPE_ID" => $arParams["IBLOCK_TYPE_ID"],
	"IBLOCK_ID" => $arResult["VARIABLES"]["list_id"],
	"SECTION_ID" => $arResult["VARIABLES"]["section_id"],
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
	"CACHE_TYPE" => $arParams["CACHE_TYPE"],
	"CACHE_TIME" => $arParams["CACHE_TIME"],
),
	$component
);*/


$APPLICATION->IncludeComponent("bitrix:lists.lists", ".default", array(
	"IBLOCK_TYPE_ID" => $arParams["IBLOCK_TYPE_ID"],
	"LISTS_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["lists"],
	"CATALOG_PROCESSES_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["catalog_processes"] ? $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["catalog_processes"] : '',
	"LIST_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list"],
	"LIST_EDIT_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["list_edit"],
	"CACHE_TYPE" => $arParams["CACHE_TYPE"],
	"CACHE_TIME" => $arParams["CACHE_TIME"],
	"LINE_ELEMENT_COUNT" => "3"
	),
	$component
);

?>