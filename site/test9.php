<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?>
<?

if(!CModule::IncludeModule('skv.lc'))
{
    ShowError(GetMessage("CC_BLEE_MODULE_NOT_INSTALLED").' LC');
    return;
}
use \Skv\Lc\DocumentUserTable;

$obDocumentUsers = DocumentUserTable::GetList(
    array(
        'select' => array(
            "DOCUMENT_ID",
            "NAME" => "USER.NAME",
            "USER_ID",
            "LOGIN" => "USER.LOGIN",
            "EMAIL" => "USER.EMAIL",
            "WORK_POSITION" => "USER.WORK_POSITION",
            //"USERS" => "Skv\Lc\ObjectTable"
            "USERS" => "USER.LOGIN"

        ),
        'filter' => array("=DOCUMENT_ID" => 733),
    )

);
while($row = $obDocumentUsers->fetch()){
    $rows[] = $row;
}

echo 'rows<pre>';
print_r($rows);
echo '</pre>';


?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>