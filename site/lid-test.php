<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Главная");
echo '<pre>';
print_r($_REQUEST);
echo '</pre>';

$_POST["LOGIN"] = "penza";
$_POST["PASSWORD"] = "Ghjgbkty_11";
$_POST["TITLE"] = "registration";
$_POST["NAME"] = $_POST["USER_NAME"];
$_POST["LAST_NAME"] = $_POST["USER_LAST_NAME"];
$_POST["POST"] = $_POST["USER_ROLE"];
$_POST["EMAIL_WORK"] = $_POST["USER_EMAIL"];

//exit();
?>
<?$APPLICATION->IncludeComponent(
	"bitrix:crm.lead.rest",
	"",
    Array(

        "NAME"    => $_REQUEST["USER_NAME"],
        "LAST_NAME" => $_REQUEST["USER_LAST_NAME"],
        "POST"    => $_REQUEST["USER_ROLE"],
        "EMAIL_WORK"    => $_REQUEST["USER_EMAIL"],


    )
);?>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>