<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("ЛИЧНЫЙ КАБИНЕТ");
?>

<?
// echo '<pre>';
// print_r($_SESSION['SESS_AUTH']['USER_ID']);
// echo '</pre>';
$APPLICATION->IncludeComponent("skv:lc.view", "", array(
		"IBLOCK_ID" => "54", 
	),
	false
);
?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>