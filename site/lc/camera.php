<?

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

global $USER;
if (!$USER->IsAuthorized() && $_SERVER['REMOTE_USER']==''){
	LocalRedirect("/404.php", "404 Not Found");
}

$APPLICATION->SetTitle("");?><?

// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
?>
<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script>
$(function() {
	$(".form_class").on("submit", function(){
		alert('001');
		function htmlspecialchars(html) { 
			html = html.replace(/&/g, "&amp;"); 
			html = html.replace(/</g, "&lt;"); 
			html = html.replace(/>/g, "&gt;"); 
			html = html.replace(/"/g, "&quot;"); 

			return html; 
		}

		var html = $(this).children(".text_link").val();
		alert('002');
		alert(html);
		//html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/&quot;/g, '&amp;quot;').replace(/&amp;/g, '&amp;amp;').replace(/&lt;/g, '&amp;lt;').replace(/&gt;/g, '&amp;gt;');
		// alert(html);
		html = htmlspecialchars(html);
		alert(html);
		$(this).children(".text_link").val(html);
	});
});	
function modifyLinkInput(elem){
	alert(elem);
	var link  = elem.find(".text_link").val();
	alert('0032');
	alert(link);
	alert('003');
}
</script>

<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Добавить камеру на объект
		</h3>
		<form method="post" action="/lc/camera.php" onsubmit="modifyLinkInput($(this))" class="form_class">  
			<input type="hidden" name="ACTION" value="ADD">
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Название
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="NAME" value="001" maxlength="255"> <br/>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Ссылка на камеру
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LINK" value="4545" class="text_link" maxlength="555"> <br/>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Id объекта 
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="OBJECT_ID" value="" maxlength="255"> <br/>
				</div>
			</div>
					<div class="bx-authform-formgroup-container">
				<input type="submit" value="Добавить"  />
			</div>
		</form>
	</div>
</div>

<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Изменить камеру на объекте
		</h3>
		<form method="post" action="/lc/camera.php" onsubmit="modifyLinkInput()" class="form_class"> 
			<input type="hidden" name="ACTION" value="MODIFY" >
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Id камеры
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="ID" value="" maxlength="255">
				</div>
			</div>
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Название 
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="NAME" value="4545" maxlength="255"> <br/>
				</div>
			</div>
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Ссылка на камеру
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LINK" value="" maxlength="555" class="text_link"> <br/>
				</div>
			</div>
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Id объекта 
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="OBJECT_ID" value="" maxlength="255"> <br/>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<input type="submit" value="Изменить"  />
			</div>
		</form>
	</div>
</div>

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

<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.camera",
	"",
Array()
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>