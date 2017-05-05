<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
//$APPLICATION->SetPageProperty("TITLE", "Авторизация - Строительная компания \"Восток\"");
$APPLICATION->SetTitle("Авторизация");/* echo '555<pre>';
print_r($_GET);
echo '</pre>'; */
?><?$APPLICATION->IncludeComponent(
    "bitrix:system.auth.form",
    "",
    Array()
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>