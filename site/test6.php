<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?>
test6
<?

CModule::IncludeModule('lists');


$obList = new CList(54);
$listFields = $obList->GetFields();

echo '<pre>';
print_r($listFields);
echo '</pre>';
$arSort = array("NAME" => "asc");
$arFilter = array("IBLOCK_ID" => 54,
				"CHECK_PERMISSIONS" => "N",
				"SHOW_NEW" => "Y");
$arNav = array("nPageSize" => 20);			

$arSelect = array("ID", "IBLOCK_ID");
foreach($listFields as $FIELD_ID => $arField)
{
	$arSelect[] = $FIELD_ID;
	if(substr($FIELD_ID, 0, 9) == "PROPERTY_"){
		//if($arField["MULTIPLE"] == "N"){
		$arLink[$FIELD_ID] = $arField["CODE"];
		//}
	}
		
}

echo 'arLink<pre>';
print_r($arLink);
echo '</pre>';
				
$rsElements = CIBlockElement::GetList(
	$arSort, $arFilter, false, $arNav, $arSelect
);


while($arElement = $rsElements->Fetch())
{
	foreach($arElement as $FIELD_ID => $val){
		echo $FIELD_ID.'<br>';
		if(substr($FIELD_ID, 0, 9) == "PROPERTY_"){
			echo 'is PROPERTY_<br>';
			if(strpos($FIELD_ID, "_VALUE_ID")){
				echo 'is _VALUE_ID<br><br>';
				unset($arElement[$FIELD_ID]);
				continue;
			}
			unset($arElement[$FIELD_ID]);
			$FIELD_ID = str_replace("_VALUE", "", $FIELD_ID);
			echo $arLink[$FIELD_ID] .' -+- '. $FIELD_ID.'<br><br>';
			$arElement[$arLink[$FIELD_ID]] = $val;
		}
	}
	
	$arResult["DOCUMENTS"][] = $arElement;
	
	echo 'arElement<pre>';
	print_r($arElement);
	echo '</pre>';
	
}
 // $arResult['FOLDER'] = '/lc/';
// $arResult['URL_TEMPLATES']= Array(
            // 'lists'=> '',
            // 'list' => '#list_id#/view/#section_id#/',
            // 'list_edit' => '#list_id#/edit/',
            // 'list_fields' => '#list_id#/fields/',
            // 'list_field_edit' => '#list_id#/field/#field_id#/',
            // 'list_element_edit' => '#list_id#/element/#section_id#/#element_id#/',
            // 'list_file' => '#list_id#/file/#section_id#/#element_id#/#field_id#/#file_id#/',
            // 'bizproc_log' => '#list_id#/bp_log/#document_state_id#/',
            // 'bizproc_workflow_start' => '#list_id#/bp_start/#element_id#/',
            // 'bizproc_task' => '#list_id#/bp_task/#section_id#/#element_id#/#task_id#/',
            // 'bizproc_workflow_admin' => '#list_id#/bp_list/',
            // 'bizproc_workflow_edit' => '#list_id#/bp_edit/#ID#/',
            // 'bizproc_workflow_vars' => '#list_id#/bp_vars/#ID#/',
            // 'bizproc_workflow_constants' => '#list_id#/bp_constants/#ID#/',
            // 'list_export_excel' => '#list_id#/excel/',
            // 'list_sections' => '#list_id#/edit/#section_id#/',
            // 'bizproc_workflow_delete' => '?action=del_bizproc',
        // );



?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>

