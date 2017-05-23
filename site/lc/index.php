<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Cabinet");
?>

<?
// echo '<pre>';
// print_r($_SESSION['SESS_AUTH']['USER_ID']);
// echo '</pre>';

// $res = CIBlock::GetProperties(54, Array(), Array());
// if($res_arr = $res->Fetch()){
	// echo 'GetProperties<pre>';
	// print_r($res_arr);
	// echo '</pre>';
// }


$db_props = CIBlockElement::GetProperty(54, 769, "sort", "asc", array());
	$PROPS = array();
	while($ar_props = $db_props->Fetch()){
		//echo '<pre>';
//print_r($ar_props);
//echo '</pre>';
	}


$res = CIBlock::GetProperties(
 54, 
Array(), 
Array()
);
if($res_arr = $res->Fetch()){

//echo '<pre>';
//print_r($res_arr);
//echo '</pre>';
}
//$arFilter["=PROPERTY_OBJECT_ID"] = 1;



$user_groups = CUser::GetUserGroup($_SESSION['SESS_AUTH']['USER_ID']);
// echo 'user_groups<pre>';
// print_r($user_groups);
// echo '</pre>';
if(!in_array(1, $user_groups)){
	$arFilter["=CREATED_BY"] = $_SESSION['SESS_AUTH']['USER_ID'];
}


$arFilter["=PROPERTY_OBJECT_ID"] = 1;
$arFilter["=IBLOCK_ID"] = 54;



$rsElements = CIBlockElement::GetList(
	array(), $arFilter, false, false, array("ID", "IBLOCK_ID", "PROPERTY_OBJECT_ID")
);

while($obElement = $rsElements->GetNextElement()){
	
// echo '555<pre>';
// print_r($obElement);
// echo '</pre>';
}



// SELECT BE.ID as ID,
// REPLACE(REPLACE(DATE_FORMAT(BE.TIMESTAMP_X, '%m/%d/%Y %h:%i:%s %p'), 'PM', 'pm'), 'AM', 'am') as TIMESTAMP_X,
// UNIX_TIMESTAMP(BE.TIMESTAMP_X) as TIMESTAMP_X_UNIX,
// BE.MODIFIED_BY as MODIFIED_BY,
// REPLACE(REPLACE(DATE_FORMAT(BE.DATE_CREATE, '%m/%d/%Y %h:%i:%s %p'), 'PM', 'pm'), 'AM', 'am') as DATE_CREATE,
// UNIX_TIMESTAMP(BE.DATE_CREATE) as DATE_CREATE_UNIX,
// BE.CREATED_BY as CREATED_BY,
// BE.IBLOCK_ID as IBLOCK_ID,
// BE.IBLOCK_SECTION_ID as IBLOCK_SECTION_ID,
// BE.ACTIVE as ACTIVE,
// IF(EXTRACT(HOUR_SECOND FROM BE.ACTIVE_FROM)>0, REPLACE(REPLACE(DATE_FORMAT(BE.ACTIVE_FROM, '%m/%d/%Y %h:%i:%s %p'), 'PM', 'pm'), 'AM', 'am'), DATE_FORMAT(BE.ACTIVE_FROM, '%m/%d/%Y'))
	// as ACTIVE_FROM,
// IF(EXTRACT(HOUR_SECOND FROM BE.ACTIVE_TO)>0, REPLACE(REPLACE(DATE_FORMAT(BE.ACTIVE_TO, '%m/%d/%Y %h:%i:%s %p'), 'PM', 'pm'), 'AM', 'am'), DATE_FORMAT(BE.ACTIVE_TO, '%m/%d/%Y')) as ACTIVE_TO,
// IF(EXTRACT(HOUR_SECOND FROM BE.ACTIVE_FROM)>0, REPLACE(REPLACE(DATE_FORMAT(BE.ACTIVE_FROM, '%m/%d/%Y %h:%i:%s %p'), 'PM', 'pm'), 'AM', 'am'), DATE_FORMAT(BE.ACTIVE_FROM, '%m/%d/%Y')) as DATE_ACTIVE_FROM,
// IF(EXTRACT(HOUR_SECOND FROM BE.ACTIVE_TO)>0, REPLACE(REPLACE(DATE_FORMAT(BE.ACTIVE_TO, '%m/%d/%Y %h:%i:%s %p'), 'PM', 'pm'), 'AM', 'am'), DATE_FORMAT(BE.ACTIVE_TO, '%m/%d/%Y')) as DATE_ACTIVE_TO,
// BE.SORT as SORT
// BE.NAME as NAME,
// BE.PREVIEW_PICTURE as PREVIEW_PICTURE,
// BE.PREVIEW_TEXT as PREVIEW_TEXT,
// BE.PREVIEW_TEXT_TYPE as PREVIEW_TEXT_TYPE,
// BE.DETAIL_PICTURE as DETAIL_PICTURE,
// BE.DETAIL_TEXT as DETAIL_TEXT,
// BE.DETAIL_TEXT_TYPE as DETAIL_TEXT_TYPE,
// BE.SEARCHABLE_CONTENT as SEARCHABLE_CONTENT,
// BE.WF_STATUS_ID as WF_STATUS_ID
// BE.WF_PARENT_ELEMENT_ID as WF_PARENT_ELEMENT_ID,
// BE.WF_LAST_HISTORY_ID as WF_LAST_HISTORY_ID,
// BE.WF_NEW as WF_NEW,
// if (BE.WF_DATE_LOCK is null, 'green', if(DATE_ADD(BE.WF_DATE_LOCK, interval 60 MINUTE)



$APPLICATION->IncludeComponent("skv:lc.view", "", array(
		"IBLOCK_ID" => "54", 
	),
	false
);



?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>