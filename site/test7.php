<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?>
test7
<?
$arResult = array(
	'FOLDER' => '/lc/docs/',
    'URL_TEMPLATES' => Array
        (
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
        )
);
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
	''
);?>




<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>