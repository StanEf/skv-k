<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

echo '<pre>';
print_r($_POST);
echo '</pre>';
?>
добавить объект
<form method="post" action="/lc/object.php">
название <input type="text" name="NAME" value="001"> <br/>
координаты<br/>
широта
<input type="text" name="LATITYDE" value="000001"> <br/>
долгота
<input type="text" name="LONGITUDE" value="34535435"> <br/>

<input type="submit">
</form>
----22----
<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.object",
	"",
Array()
);?>
----11----

<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.add.object",
	"",
Array()
);?>
----00----

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>