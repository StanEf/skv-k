<?
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
// require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
// require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_after.php');
// IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/intranet/public/services/lists/index.php");
// $APPLICATION->SetTitle(GetMessage("SERVICES_TITLE"));


require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

global $USER;
if (!$USER->IsAuthorized() && $_SERVER['REMOTE_USER']==''){
	echo "Авторизуйтесь в личном кабинете";
	die();
}

$user_groups = $USER->GetUserGroupArray();
//1-администраторы
//12 - сотрудники скв
//20 - пользователи лк
$group_access_allowed[20] = "user";
$group_access_allowed[12] = "worker";
$group_access_allowed[1] = "admin";

foreach($group_access_allowed as $group => $user_type){
	if (in_array($group, $user_groups)){
		$current_user_type = $user_type;
	}
}

//echo $current_user_type.'<br>';
?>

<head>
<?$APPLICATION->ShowHead();?>
<title><?$APPLICATION->ShowTitle()?></title>
</head>



<body>

<?
	$APPLICATION->IncludeComponent(
	"skv:lc.lists", 
	".default", 
	array(
		"INFOBLOCK_ID" => 54,
		"USER_TYPE" => $current_user_type,
		//"OBJECT_ID" => $_GET["object"],
		"IBLOCK_TYPE_ID" => "lists",
		"SEF_MODE" => "Y",
		"SEF_FOLDER" => "/lc/docs/",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"COMPONENT_TEMPLATE" => ".default",
		"SEF_URL_TEMPLATES" => array(
			"lists" => "",
			
			"list" => "#list_id#/view/#section_id#/#object_id#/",
			"list_element_edit" => "#list_id#/element/#section_id#/#element_id#/#object_id#/",
			
			"list_sections" => "#list_id#/edit/#section_id#/",
			"list_edit" => "#list_id#/edit/",
			"list_fields" => "#list_id#/fields/",
			"list_field_edit" => "#list_id#/field/#field_id#/",
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

?>

<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>