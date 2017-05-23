<?
//if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

//global $APPLICATION;

// require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
// require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_after.php');


define('STOP_STATISTICS', true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
$GLOBALS['APPLICATION']->RestartBuffer(); 

if($_POST["type"] == "docs"){
 ?>
<iframe src="/lc/docs/?object=<?= $_POST["object"] ?>" width="100%" height="100%"  scrolling="no" frameborder="0" marginheight="0" marginwidth="0"  onload="autoResize(this);" id="document_frame" name="document_frame"></iframe>
 <?
 ?>

<?
}else if($_POST["type"] == "video"){
	$APPLICATION->IncludeComponent("skv:lc.view.camera", "", array(
		"OBJECT_ID" => $_POST["object"],
		),
		""
	);
	
}








//die();
?>