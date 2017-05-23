<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

global $USER;
if (!$USER->IsAuthorized() && $_SERVER['REMOTE_USER']==''){
	echo "fdfd";
	//LocalRedirect("/404.php", "404 Not Found");
}
//$APPLICATION->SetTitle("Cabinet");

?>



<?

$APPLICATION->IncludeComponent("skv:lc.view", "", array(
		"IBLOCK_ID" => "54", 
	),
	false
);

?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>