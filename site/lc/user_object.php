<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

echo '<pre>';
print_r($_POST);
echo '</pre>';
?>
добавить связь пользователь-объект 
<form method="post" action="/lc/user_object.php">
	<input type="hidden" name="ACTION" value="ADD">
	ID пользователя  <input type="text" name="USER_ID" value="1"> <br/>

	ID объекта <input type="text" name="OBJECT_ID" value="1"> <br/>
	<input type="submit">
</form>
<br/>
<?
if($_POST["ACTION"] == "ADD"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.add.user_object",
		"",
	Array()
	);
}
?>

show
<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.user_object",
	"",
Array()
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>