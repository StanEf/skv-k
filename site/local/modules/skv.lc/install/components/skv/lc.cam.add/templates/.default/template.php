<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die(); ?>

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
<?
$APPLICATION->IncludeComponent(
	"bitrix:main.interface.toolbar",
	"",
	array(
	"BUTTONS" => array(
	array(
	"TEXT" => "Назад",
	"TITLE" => "Назад",
	"LINK" => "cams.php",
	"ICON" => "btn-list",
	),
	),
	),
	$component
);
if(isset($arResult["REQUEST"])){
	echo $arResult["REQUEST"];
}

?>
<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Добавить камеру на объект
		</h3>
		<form method="post" action="/lc/cam_add.php" class="form_class" name="add_cam" id="add_cam" onsubmit="validate_form_add();">
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
					<!--<input type="text" name="OBJECT_ID" value="" maxlength="255"> <br/>-->
					<select name="OBJECT_ID">
						<?foreach($arResult["OBJECTS"] as $id => $name):?>
							<option value="<?= $id ?>"><?= $name ?> </option>
						<?endforeach;?>
					</select>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<input type="submit" value="Добавить" >
			</div>
		</form>
	</div>
</div>
<?/*
if($_POST["ACTION"] == "ADD"){
	$APPLICATION->IncludeComponent(
		"skv:lc.orm.add.camera",
		"",
		Array()
	);
}
*/?>