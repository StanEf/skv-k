<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

echo '<pre>';
print_r($_POST);
echo '</pre>';
?>
�������� ������ �� ������
<form method="post" action="/lc/camera.php">
<input type="hidden" name="ACTION" value="ADD">
�������� 
<input type="text" name="NAME" value="001"> <br/>
������ �� ������ 
<input type="text" name="LINK" value=""> <br/>
id �������
<input type="text" name="OBJECT_ID" value=""> <br/>
<input type="submit">
</form>
<br/>

��������
<form method="post" action="/lc/camera.php">
<input type="hidden" name="ACTION" value="MODIFY">
�������� 
<input type="text" name="NAME" value=""> <br/>
������ �� ������ 
<input type="text" name="LINK" value=""> <br/>
id �������
<input type="text" name="OBJECT_ID" value=""> <br/>

<input type="submit">
</form>

----22----
<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.camera",
	"",
Array()
);?>
----11----

<?
if($_POST("ACTION") == "ADD"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.add.camera",
		"",
	Array()
	);
} else if($_POST("ACTION") == "MODIFY"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.update.camera",
		"",
	Array()
	);
}
?>
----00----

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>