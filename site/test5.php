<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?


// use Bitrix\Main;
// use Bitrix\Main\Localization\Loc;

// if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
//namespace Academy\D7;
// if (!\Bitrix\Main\Loader::includeModule('skv.lc'))
	// return;
// use \Skv\Lc\BookTable;
// use \Bitrix\Main\Entity;
// use \Bitrix\Main\Type;
// echo BookTable::getTableName();

// echo '-0-';
// $result = BookTable::add(array(
    // 'ISBN' => '978-0321127426',
    // 'NAME' => 'Patterns of Enterprise Application Architecture',
    // 'RELEASED' => new Type\Date('2002-11-16', 'Y-m-d')
// ));

// if ($result->isSuccess())
// {
    // $id = $result->getId();
// } else {
	// echo 'not success';
// }
// echo $id;

?><?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist",
	"",
Array()
);?><?$APPLICATION->IncludeComponent(
	"skv:lc.orm.add",
	"",
Array()
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>