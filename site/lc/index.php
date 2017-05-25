<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

global $USER;
if (!$USER->IsAuthorized() && $_SERVER['REMOTE_USER']==''){
	echo "Авторизуйтесь в личном кабинете";
	die();
}
$user_groups = $USER->GetUserGroupArray();
//1-администраторы
//12 - сотрудники скв
//20 - пользователи лк
$group_access_allowed[20] = "user";
$group_access_allowed[12] = "worker";
$group_access_allowed[1] = "admin";

foreach($group_access_allowed as $group => $user_type){
	if (in_array($group, $user_groups)){
		$current_user_type = $user_type;
	}
}
if(!isset($current_user_type)){
	echo "нет доступа в личный кабинет";
	die();
}

//$APPLICATION->SetTitle("Cabinet");



?>



<?


$APPLICATION->IncludeComponent("skv:lc.view", "", array(
		"IBLOCK_ID" => "54",
		//"USER_TYPE" => $current_user_type,
	),
	false
);

?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>

<?

?>