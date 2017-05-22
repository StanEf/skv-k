<?
//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
// require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
// require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_after.php');
// IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/intranet/public/services/lists/index.php");
// $APPLICATION->SetTitle(GetMessage("SERVICES_TITLE"));



require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$APPLICATION->SetAdditionalCSS("/bitrix/panel/main/admin.css");

?>
<!DOCTYPE html>
<html lang="en" data-ng-app="website">

<head>
    <meta charset="utf-8">
    <title><?=$APPLICATION->ShowTitle('title')?></title>
    <?$APPLICATION->ShowHead()?>
    <link rel="SHORTCUT ICON" href="/favicon.ico" type="image/vnd.microsoft.icon" />


    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet">
-->
	<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin,greek,greek-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=latin,greek,greek-ext,latin-ext,cyrillic' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/assets.min.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/styles.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/another_styles.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/ext_styles.css" />
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/vendor/fancybox/jquery.fancybox.css">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/vendor/csslider/animated-slider.css">
    <style>
        @import url(//fonts.googleapis.com/css?family=Asap:regular,italic,700,700italic|Cutive:regular|Lato:100,300,regular,italic,700|Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic|PT+Sans:regular,italic,700,700italic&subset=latin,latin-ext);
        @import url(//fonts.googleapis.com/css?family=Raleway:100,200,300,regular,500,600,700,800,900|Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic|Sarina:reqular&subset=latin,latin-ext);
    </style>

   <script src="<?=SITE_TEMPLATE_PATH?>/js/js1.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/js/js2.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/js/script.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/js/owl.carousel.min.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/fancybox/jquery.fancybox.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/cloud9/jquery.cloud9carousel.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/csslider/jquery.cssslider.min.js"></script>

    <script src="<?=SITE_TEMPLATE_PATH?>/vendor/swipe/jquery.touchSwipe.min.js"></script>
    
	<script src="http://yandex.st/jquery/1.7.1/jquery.min.js"></script>
<script src="<?=SITE_TEMPLATE_PATH?>/js/postmessage.js"></script>
	<script src="<?=SITE_TEMPLATE_PATH?>/js/Frame.js"></script> 

	
	
</head>

<body>





<?
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

<?//require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>