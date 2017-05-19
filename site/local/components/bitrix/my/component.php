<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
   die();

//здесь обработка POST (см. ниже)

//это список групп пользователей, нужен будет для фильтра
$aGroups = array();
$gr_res = CGroup::GetDropDownList("AND ID!=2");
while($aGr = $gr_res->Fetch())
   $aGroups[$aGr["REFERENCE_ID"]] = $aGr["REFERENCE"];

//уникальный идентификатор грида
$arResult["GRID_ID"] = "user_grid";

//определяем фильтр, поля фильтра типизированы
//по умолчанию тип text, поддерживается date, list, number, quick (поле ввода и список), custom
$arIBlock = CIBlock::GetFields(54);
echo 'CIBlock::GetFields(54)<pre>';
print_r($arIBlock);
echo '</pre>';
foreach($arIBlock['FIELDS'] as $field => $v){
	if($v['IS_REQUIRED'] == 'Y'){
		$required_fields[$field] = $v['NAME'];
	}
}
echo '<pre>';
print_r($required_fields);
echo '</pre>';

$res = CIBlock::GetProperties(54, array(), array());
$res_arr = $res->Fetch();

echo 'res_arr<pre>';
print_r($res_arr);
echo '</pre>';

$res = CIBlock::GetByID(54);
echo 'res<pre>';
print_r($res);
echo '</pre>';

$res = CIBlock::GetByID(54);
if($ar_res = $res->GetNext())
echo 'ar_res<pre>';
print_r($ar_res);
echo '</pre>';

$res = CIBlock::GetList(
						 Array(),
						 Array("=ID"=>54),
						 false
					);
					
while($ar_res = $res->Fetch())
{
    echo 'ar_res55<pre>';
print_r($ar_res);
echo '</pre>';
}					

$obList = new CList(54);
$listFields = $obList->GetFields();
echo 'listFields<pre>';
print_r($listFields);
echo '</pre>';
// foreach($listFields as $FIELD_ID => $arField)
// {
	// $arResult["FILTER"][] = array(
									// "id"=>"FIND", 
									// "name"=>"Найти", 
									// "type"=>"quick", 
									// "items"=>array("login"=>"Логин", 
													// "email"=>"Email", 
													// "name"=>"Имя"
													// )					
	// );
// }

$arResult["FILTER"] = array();

// $arResult["FILTER"] = array(
   // array("id"=>"FIND", "name"=>"Найти", "type"=>"quick", "items"=>array("login"=>"Логин", "email"=>"Email", "name"=>"Имя")),
   // array("id"=>"PERSONAL_BIRTHDAY", "name"=>"День рождения", "type"=>"date"),
   // array("id"=>"PERSONAL_PROFESSION", "name"=>"Профессия"),
   // array("id"=>"PERSONAL_WWW", "name"=>"Веб"),
   // array("id"=>"PERSONAL_ICQ", "name"=>"АйСикЮ", "params"=>array("size"=>15)),
   // array("id"=>"PERSONAL_GENDER", "name"=>"Пол", "type"=>"list", "items"=>array(""=>"(пол)", "M"=>"Мужской", "F"=>"Женский")),
   // array("id"=>"GROUPS_ID", "name"=>"Группы пользователей", "type"=>"list", "items"=>$aGroups, "params"=>array("size"=>5, "multiple"=>"multiple"), "valign"=>"top"),
   // array("id"=>"PERSONAL_PHONE", "name"=>"Телефон"),
   // array("id"=>"PERSONAL_MOBILE", "name"=>"Мобильник"),
   // array("id"=>"PERSONAL_CITY", "name"=>"Город"),
// );



// $arResult["FILTER"] = array(
   // array("id"=>"FIND", "name"=>"Найти", "type"=>"quick", "items"=>array("login"=>"Логин", "email"=>"Email", "name"=>"Имя")),
   // array("id"=>"PERSONAL_BIRTHDAY", "name"=>"День рождения", "type"=>"date"),
   // array("id"=>"PERSONAL_PROFESSION", "name"=>"Профессия"),
   // array("id"=>"PERSONAL_WWW", "name"=>"Веб"),
   // array("id"=>"PERSONAL_ICQ", "name"=>"АйСикЮ", "params"=>array("size"=>15)),
   // array("id"=>"PERSONAL_GENDER", "name"=>"Пол", "type"=>"list", "items"=>array(""=>"(пол)", "M"=>"Мужской", "F"=>"Женский")),
   // array("id"=>"GROUPS_ID", "name"=>"Группы пользователей", "type"=>"list", "items"=>$aGroups, "params"=>array("size"=>5, "multiple"=>"multiple"), "valign"=>"top"),
   // array("id"=>"PERSONAL_PHONE", "name"=>"Телефон"),
   // array("id"=>"PERSONAL_MOBILE", "name"=>"Мобильник"),
   // array("id"=>"PERSONAL_CITY", "name"=>"Город"),
// );

//инициализируем объект с настройками пользователя для нашего грида
$grid_options = new CGridOptions($arResult["GRID_ID"]);

//какую сортировку сохранил пользователь (передаем то, что по умолчанию)
$aSort = $grid_options->GetSorting(array("sort"=>array("id"=>"desc"), "vars"=>array("by"=>"by", "order"=>"order")));

//размер страницы в постраничке (передаем умолчания)
$aNav = $grid_options->GetNavParams(array("nPageSize"=>10));

//получим текущий фильтр (передаем описанный выше фильтр)
$aFilter = $grid_options->GetFilter($arResult["FILTER"]);

//некоторые названия полей фильтра могут не совпадать с API 
// if(isset($aFilter["PERSONAL_BIRTHDAY_from"]))
   // $aFilter["PERSONAL_BIRTHDAY_1"] = $aFilter["PERSONAL_BIRTHDAY_from"];
// if(isset($aFilter["PERSONAL_BIRTHDAY_to"]))
   // $aFilter["PERSONAL_BIRTHDAY_2"] = $aFilter["PERSONAL_BIRTHDAY_to"];
// if(isset($aFilter["FIND"]))
   // $aFilter[strtoupper($aFilter["FIND_list"])] = $aFilter["FIND"];



//это собственно выборка данных с учетом сортировки и фильтра, указанных пользователем
$aSortArg = each($aSort["sort"]);

$db_res = CUser::GetList($aSortArg["key"], $aSortArg["value"], $aFilter);
// echo 'CUser::GetList<pre>';
// print_r($db_res);
// echo '</pre>';
// $db_res = CIBlock::GetFields(54);
// echo 'CIBlock::GetFieldss<pre>';
// print_r($db_res);
// echo '</pre>';
//постраничка с учетом размера страницы
$db_res->NavStart($aNav["nPageSize"]);

//в этом цикле построчно заполняем данные для грида
$aRows = array();
while($aRes = $db_res->GetNext())
{
//в этой переменной - поля, требующие нестандартного отображения (не просто значение)
   $aCols = array(
      "PERSONAL_GENDER" => ($aRes["PERSONAL_GENDER"] == "M"? "Мужской":($aRes["PERSONAL_GENDER"] == "F"? "Женский":"")),
      "EMAIL" => '<a href="mailto:'.$aRes["EMAIL"].'">'.$aRes["EMAIL"].'</a>',
      "ID" => '<a href="'.$APPLICATION->GetCurPage().'?ID='.$aRes["ID"].'">'.$aRes["ID"].'</a>',
      "LOGIN" => '<a href="main.interface.form.php?ID='.$aRes["ID"].'">'.$aRes["LOGIN"].'</a>',
   );

//это определения для меню действий над строкой
   $aActions = Array(
      array("ICONCLASS"=>"edit", "TEXT"=>"Изменить", "ONCLICK"=>"jsUtils.Redirect(arguments, 'main.interface.form.php?ID=".$aRes["ID"]."')", "DEFAULT"=>true),
      array("ICONCLASS"=>"copy", "TEXT"=>"Добавить копию", "ONCLICK"=>"jsUtils.Redirect(arguments, '/bitrix/admin/user_edit.php?COPY_ID=".$aRes["ID"]."')"),
      array("SEPARATOR"=>true),
      array("ICONCLASS"=>"delete", "TEXT"=>"Удалить", "ONCLICK"=>"if(confirm('Вы уверены, что хотите удалить данного пользователя?')) window.location='/bitrix/admin/user_admin.php?action=delete&ID=".$aRes["ID"]."&".bitrix_sessid_get()."';"),
   );

//запомнили данные. "data" - вся выборка,  "editable" - можно редактировать строку или нет
   $aRows[] = array("data"=>$aRes, "actions"=>$aActions, "columns"=>$aCols, "editable"=>($aRes["ID"]==11? false:true));
}

//наши накопленные данные
$arResult["ROWS"] = $aRows;

//информация для футера списка
$arResult["ROWS_COUNT"] = $db_res->SelectedRowsCount();

//сортировка
$arResult["SORT"] = $aSort["sort"];
$arResult["SORT_VARS"] = $aSort["vars"];

//объект постранички - нужен гриду. Убираем ссылку "все".
$db_res->bShowAll = false;
$arResult["NAV_OBJECT"] = $db_res;

//самое интересное - в шаблоне компонента
$this->IncludeComponentTemplate();
?>