<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Cabinet");

$APPLICATION->IncludeComponent("skv:lc.view", "", array(
		"IBLOCK_ID" => "54", 
	),
	false
);

?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>