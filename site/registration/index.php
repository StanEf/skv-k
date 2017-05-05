<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Главная");
echo '559<pre>';
//print_r($_GET);
echo '</pre>';
?><?$APPLICATION->IncludeComponent(
	"bitrix:system.auth.registration",
	"flat",
Array()
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>