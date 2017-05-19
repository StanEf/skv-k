<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#^/information/links/([a-zA-Z0-9_]+)/\\?{0,1}(.*)\$#",
		"RULE" => "/information/links/index.php?SECTION_CODE=\\1&\\2",
		"ID" => "",
		"PATH" => "",
	),
	array(
		"CONDITION" => "#^/online/([\\.\\-0-9a-zA-Z]+)(/?)([^/]*)#",
		"RULE" => "alias=\$1",
		"ID" => "bitrix:im.router",
		"PATH" => "/desktop_app/router.php",
	),
	array(
		"CONDITION" => "#^/board/([a-zA-Z0-9_]+)/\\?{0,1}(.*)\$#",
		"RULE" => "/board/index.php?SECTION_CODE=\\1&\\2",
		"ID" => "",
		"PATH" => "",
	),
	array(
		"CONDITION" => "#^/online/(/?)([^/]*)#",
		"RULE" => "",
		"ID" => "bitrix:im.router",
		"PATH" => "/desktop_app/router.php",
	),
	array(
		"CONDITION" => "#^/nationalnews/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/nationalnews/index.php",
	),
	array(
		"CONDITION" => "#^/about/career/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/about/career/index.php",
	),
	array(
		"CONDITION" => "#^/job/vacancy/#",
		"RULE" => "",
		"ID" => "bitrix:catalog",
		"PATH" => "/job/vacancy/index.php",
	),
	array(
		"CONDITION" => "#^/job/resume/#",
		"RULE" => "",
		"ID" => "bitrix:catalog",
		"PATH" => "/job/resume/index.php",
	),
	array(
		"CONDITION" => "#^/services/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/services/index.php",
	),
	array(
		"CONDITION" => "#^/lc/docs/#",
		"RULE" => "",
		"ID" => "bitrix:lists",
		"PATH" => "/lc/docs/index.php",
	),
	array(
		"CONDITION" => "#^/services#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/services/index.php",
	),
	array(
		"CONDITION" => "#^/themes/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/themes/index.php",
	),
	array(
		"CONDITION" => "#^/photo/#",
		"RULE" => "",
		"ID" => "bitrix:photogallery_user",
		"PATH" => "/photo/index.php",
	),
	array(
		"CONDITION" => "#^/blogs/#",
		"RULE" => "",
		"ID" => "bitrix:blog",
		"PATH" => "/blogs/index.php",
	),
	array(
		"CONDITION" => "#^/forum/#",
		"RULE" => "",
		"ID" => "bitrix:forum",
		"PATH" => "/forum/index.php",
	),
	array(
		"CONDITION" => "#^/news/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/news/index.php",
	),
);

?>