<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

echo '<pre>';
print_r($_POST);
echo '</pre>';
?>
добавить объект
<form method="post" action="/lc/object.php">
<input type="hidden" name="ACTION" value="ADD">
название <input type="text" name="NAME" value="001"> <br/>
координаты<br/>
широта
<input type="text" name="LATITYDE" value="000001"> <br/>
долгота
<input type="text" name="LONGITUDE" value="34535435"> <br/>
id пользователя
<input type="text" name="USER_ID" value=""> <br/>
<input type="submit">
</form>
<br/>

изменить объект
<form method="post" action="/lc/object.php">
<input type="hidden" name="ACTION" value="MODIFY">
ID <input type="text" name="ID" value=""> <br/>
название <input type="text" name="NAME" value=""> <br/>
координаты<br/>
широта
<input type="text" name="LATITYDE" value=""> <br/>
долгота
<input type="text" name="LONGITUDE" value=""> <br/>
id пользователя
<input type="text" name="USER_ID" value=""> <br/>
<input type="submit">
</form>

add or update
<?
if($_POST["ACTION"] == "ADD"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.add.object",
		"",
	Array()
	);
} elseif($_POST["ACTION"] == "MODIFY"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.update.object",
		"",
	Array()
	);
}
?>
show
<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.object",
	"",
Array()
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>