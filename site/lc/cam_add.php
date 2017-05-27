<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

global $USER;
$user_groups = $USER->GetUserGroupArray();
if (!in_array(1, $user_groups)){
    echo "нет доступа";
    die();
}

$APPLICATION->IncludeComponent(
    "skv:lc.cam.add",
    "",
    Array()
);
?>