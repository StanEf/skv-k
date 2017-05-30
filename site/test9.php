<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?>
<?
$arStructure = CIntranetUtils::getSubStructure(53, 1);

echo '$arStructure<pre>';
print_r($arStructure);
echo '</pre>';

// 77777777777777777777777777777777
?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>