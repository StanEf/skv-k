<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

echo '<pre>';
print_r($_POST);
echo '</pre>';
?>
<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script>
$(function() {
	$(".form_class").on("submit", function(){
		function htmlspecialchars(html) { 
			html = html.replace(/&/g, "&amp;"); 
			html = html.replace(/</g, "&lt;"); 
			html = html.replace(/>/g, "&gt;"); 
			html = html.replace(/"/g, "&quot;"); 

			return html; 
		}

		var html = $(this).children(".text_link").val();
		//html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/&quot;/g, '&amp;quot;').replace(/&amp;/g, '&amp;amp;').replace(/&lt;/g, '&amp;lt;').replace(/&gt;/g, '&amp;gt;');
		// alert(html);
		html = htmlspecialchars(html);
		$(this).children(".text_link").val(html);
	});
});	
</script>

добавить камеру на объект
<form method="post" action="/lc/camera.php" onsubmit="modifyLinkInput()" class="form_class">  
<input type="hidden" name="ACTION" value="ADD">
название 
<input type="text" name="NAME" value="001"> <br/>
ссылка на камеру 
<input type="text" name="LINK" value="4545" class="text_link"> <br/>
id объекта
<input type="text" name="OBJECT_ID" value=""> <br/>
<input type="submit">
</form>
<br/>

изменить
<form method="post" action="/lc/camera.php" onsubmit="modifyLinkInput()" class="form_class">
<input type="hidden" name="ACTION" value="MODIFY" >
название 
<input type="text" name="NAME" value=""> <br/>
ссылка на камеру 
<input type="text" name="LINK" value="" class="text_link"> <br/>
id объекта
<input type="text" name="OBJECT_ID" value=""> <br/>

<input type="submit">
</form>


add or update
<?

if($_POST["ACTION"] == "ADD"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.add.camera",
		"",
	Array()
	);
} else if($_POST["ACTION"] == "MODIFY"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.update.camera",
		"",
	Array()
	);
}

?>
show
<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.camera",
	"",
Array()
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>