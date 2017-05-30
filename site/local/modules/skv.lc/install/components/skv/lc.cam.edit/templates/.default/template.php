<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die(); ?>

<script>
function htmlspecialchars(html) {
	html = html.replace(/&/g, "&amp;");
	html = html.replace(/</g, "&lt;");
	html = html.replace(/>/g, "&gt;");
	html = html.replace(/"/g, "&quot;");
	return html;
}

function validate_form_edit(){
	var link = $("#link_edit").val();
	link = htmlspecialchars(link);
	$("#link_edit").val(link);
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
?>
<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Изменить камеру на объекте
		</h3>
		<form method="post" action="/lc/cam_edit.php?ID=<?= $_GET["ID"]?>" class="form_class" name="edit_cam" id="edit_cam" onsubmit="validate_form_edit();">
			<input type="hidden" name="ACTION" value="EDIT">

			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Название
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="NAME" value="<?= $arResult["NAME"] ?>" maxlength="255"> <br/>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Ссылка на камеру
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LINK" value="<?= $arResult["LINK"] ?>" class="text_link" maxlength="555" id="link_edit"> <br/>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Объект
				</div>
				<div class="bx-authform-input-container">
				<!--	<input type="text" name="OBJECT_ID" value="<?/*= $arResult["OBJECT_ID"] */?>" maxlength="255"> <br/>-->
					<select name="OBJECT_ID">
						<?foreach($arResult["OBJECTS"] as $id => $name):?>
						<option value="<?= $id ?>" <?if($id == $arResult["OBJECT_ID"]):?> selected <?endif;?>><?= $name ?> </option>
						<?endforeach;?>
					</select>
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<input type="submit" value="Изменить" >
			</div>
		</form>
	</div>
</div>
<?= $arResult["REQUEST"] ?>
