<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?>
<?
BX24.callMethod(
        "disk.file.get",
        {
            'id': 86966
        },
        function (result)
        {
            if (result.error())
                console.error(result.error());
            else
                console.dir(result.data());
        }
);



?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>