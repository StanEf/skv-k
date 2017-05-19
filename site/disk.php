<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?>
<?
$arResult["VARIABLES"]["list_id"] = 54;
$arResult["VARIABLES"]["section_id"] = 0;
$arResult["VARIABLES"]["element_id"] = 770;
$arParams["IBLOCK_TYPE_ID"] = 'lists';
$APPLICATION->IncludeComponent("bitrix:lists.element.edit", ".default", array(
	"IBLOCK_TYPE_ID" => $arParams["IBLOCK_TYPE_ID"],
	"IBLOCK_ID" => $arResult["VARIABLES"]["list_id"],
	"SECTION_ID" => $arResult["VARIABLES"]["section_id"],
	"ELEMENT_ID" => $arResult["VARIABLES"]["element_id"],
	),
	''
);
// echo '000000000000000000000000000';
// $arIBlock = CIBlock::GetArrayByID(54);
// echo '<pre>';
// print_r($arIBlock);
// echo '</pre>99999999999999999999';
?>
1111111111111111
<?

$APPLICATION->IncludeComponent("bitrix:my", "", array(	),
	''
);
?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>