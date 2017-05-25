<?

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");?><?

global $USER;
$user_groups = $USER->GetUserGroupArray();
if (!in_array(1, $user_groups)){
	echo "нет доступа";
	die();
}
?>

<div class="container" style="padding: 15px;">
	<div class="bx-authform" style="margin: 0 auto;">
		<h3 class="bx-title">
			Добавить объект
		</h3>
		<form method="post" action="/lc/camera.php">  
			<input type="hidden" name="ACTION" value="ADD">
			
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Название
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="NAME" value="001"  maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Координаты - широта
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LATITYDE" value="000001" maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Координаты - долгота
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LONGITUDE" value="000001" maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Id пользователя
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="USER_ID" value="" maxlength="255">
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
			Изменить объект
		</h3>
		<form method="post" action="/lc/camera.php">  
			<input type="hidden" name="ACTION" value="MODIFY">
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Id объекта
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="ID" value="1"  maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Название
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="NAME" value="001"  maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Координаты - широта
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LATITYDE" value="000001" maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Координаты - долгота
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="LONGITUDE" value="000001" maxlength="255">
				</div>
			</div>
			<div class="bx-authform-formgroup-container">
				<div class="bx-authform-label-container">
					Id пользователя
				</div>
				<div class="bx-authform-input-container">
					<input type="text" name="USER_ID" value="" maxlength="255">
				</div>
			</div>
					<div class="bx-authform-formgroup-container">
				<input type="submit" value="Добавить" >
			</div>
		</form>
	</div>
</div>

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

<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.object",
	"",
Array()
);?>


<?$APPLICATION->IncludeComponent(
	"skv:lc.orm.getlist.user_object",
	"",
Array()
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>