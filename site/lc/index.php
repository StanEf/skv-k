<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>

<?
echo '<pre>';
print_r($_SESSION['SESS_AUTH']['USER_ID']);
echo '</pre>';
$APPLICATION->IncludeComponent(
	"skv:lc.view",
	"",
Array()
);
?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>