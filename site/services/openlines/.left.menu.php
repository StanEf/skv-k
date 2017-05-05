<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/intranet/public/services/openlines/.left.menu.php");
if(CModule::IncludeModule('imopenlines'))
{
	$aMenuLinks = Array(
		Array(
			GetMessage("SERVICES_MENU_OPENLINES_LINES"),
			"#SITE_DIR#services/openlines/",
			Array("#SITE_DIR#services/openlines/index.php","#SITE_DIR#services/openlines/edit.php"),
			Array("menu_item_id"=>"menu_openlines_lines"),
			'Bitrix\ImOpenlines\Security\Helper::isLinesMenuEnabled()'
		),
		Array(
			GetMessage("SERVICES_MENU_OPENLINES_BUTTON"),
			"#SITE_DIR#crm/button/",
			Array(),
			Array(),
			'Bitrix\ImOpenlines\Security\Helper::isCrmWidgetEnabled()'
		),
		Array(
			GetMessage("SERVICES_MENU_OPENLINES_STATISTICS"),
			"#SITE_DIR#services/openlines/statistics.php",
			Array(),
			Array("menu_item_id"=>"menu_openlines_statistics"),
			'Bitrix\ImOpenlines\Security\Helper::isStatisticsMenuEnabled()'
		),
		Array(
			GetMessage("SERVICES_MENU_OPENLINES_PERMISSIONS"),
			"#SITE_DIR#services/openlines/permissions.php",
			Array("/services/openlines/editrole.php"),
			Array("menu_item_id"=>"menu_openlines_permissions"),
			'Bitrix\ImOpenlines\Security\Helper::isSettingsMenuEnabled()'
		),
	);
}

?>