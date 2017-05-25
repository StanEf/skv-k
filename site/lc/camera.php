<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
global $USER;
$user_groups = $USER->GetUserGroupArray();
if (!in_array(1, $user_groups)){
	echo "нет доступа";
	die();
}
$APPLICATION->SetTitle("");?>

<script>
function htmlspecialchars(html) { 
	html = html.replace(/&/g, "&amp;"); 
	html = html.replace(/</g, "&lt;"); 
	html = html.replace(/>/g, "&gt;"); 
	html = html.replace(/"/g, "&quot;"); 

	return html; 
}

function validate_form_add(){
	var link = $("#link_add").val();
	link = htmlspecialchars(link);
	$("#link_add").val(link);
}

function validate_form_modify(){
	var link = $("#link_modify").val();
	link = htmlspecialchars(link);
	$("#link_modify").val(link);
}
</script>

<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Добавить камеру на объект
		</h3>
		<form method="post" action="/lc/camera.php" class="form_class" name="add_cam" id="add_cam" onsubmit="validate_form_add();">  
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
					<input type="text" name="LINK" value="4545" class="text_link" maxlength="555" id="link_add"> <br/>
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
				<input type="submit" value="Добавить" >
			</div>
		</form>
	</div>
</div>

<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Изменить камеру на объекте
		</h3>
		<form method="post" action="/lc/camera.php" onsubmit="modifyLinkInput(this)" class="form_class" name="modify_cam" id="modify_cam" onsubmit="validate_form_modify();"> 
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
					<input type="text" name="LINK" value="" maxlength="555" class="text_link" id="link_modify"> <br/>
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