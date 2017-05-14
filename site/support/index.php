<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
//$APPLICATION->SetPageProperty("TITLE", "Авторизация - Строительная компания \"Восток\"");
$APPLICATION->SetTitle("Авторизация");
// echo '555<pre>';
// print_r($_SESSION);
// echo '</pre>';
?><?$APPLICATION->IncludeComponent(
	"bitrix:system.auth.form", 
	"custom", 
	array(
		"REGISTER_URL" => "/registration/",
		"COMPONENT_TEMPLATE" => "custom",
		"FORGOT_PASSWORD_URL" => "",
		"PROFILE_URL" => "/lc/",
		"SHOW_ERRORS" => "N"
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>