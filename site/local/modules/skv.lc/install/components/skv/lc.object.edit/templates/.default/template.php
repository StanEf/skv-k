<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$APPLICATION->IncludeComponent(
	"bitrix:main.interface.toolbar",
	"",
	array(
		"BUTTONS" => array(
			array(
				"TEXT" => $arResult["BACK_BUTTON"],
				"TITLE" => $arResult["BACK_BUTTON"],
				"LINK" => "objects.php",
				"ICON" => "btn-list",
			),
		),
	),
	$component
);
if($arResult["RESULT_MESSAGE"]){
	echo '<div id="result_message">';
	foreach ($arResult["RESULT_MESSAGE"] as $res1){
		echo $res1 . '<br>';
	}
	echo '</div>';
}
/*echo '$arResult["TABLE"]<pre>';
print_r($arResult["TABLE"]);
echo '</pre>';*/

/*echo '$_POST<pre>';
print_r($_POST);
echo '</pre>';*/

?>
<script>
	console.log('sdsd');
	console.log(window.IntranetUsers);



	function clickMe(){
		console.log('clk');
		console.log(O_USERS_OBJECTS );
		console.log(O_USERS_OBJECTS.arSelected );
		var users_on_object = [];
		O_USERS_OBJECTS.arSelected.forEach(function(item, number){
			console.log(item);
			if(item !== null){
				users_on_object.push(number);
			}
		});
		users_on_object_str = users_on_object.join();
		console.log('users_on_object_str'+users_on_object_str);
		$("#SELECTED_USERS_ON_OBJECT").val(users_on_object_str);
	}
	/*$("#object_form_edit").on("submit", function(){
	alert(1);
		var users_on_object = [];
		O_USERS_OBJECTS.arSelected.forEach(function(item, number){
			console.log(item);
			if(item !== null){
				users_on_object.push(number);
			}
		});
		users_on_object_str = users_on_object.join();
		console.log('users_on_object_str'+users_on_object_str);
		$("#SELECTED_USERS_ON_OBJECT").val(users_on_object_str);
		alert(2);
	});*/

</script>
<input type="button" onclick="clickMe();" value="click">

<?
if ($arResult != null) {?>
	<div id="object_form_edit">
		<form id="object_form_edit" name="object_form_edit" method="post" action="object_edit.php?ID=<?=$arResult["ID"]?>">
			<table>
				<tbody>
				<?foreach ($arResult["TABLE"] as $item){?>
					<tr>
						<td class="first_col"><?=$item["TITLE"]?></td><td class="second_col"><?
							if($item["SPECIAL"] != true){
								if($item["TYPE"] == "textarea"){
									echo '<textarea id="tinymcetextarea"';
								}elseif($item["TYPE"] == "date"){
									echo '<input  type="text" class="tcal"';
								}else{
									echo "<input  type=\"" . $item["TYPE"] . "\"";
									if($item["NAME"] == "ID") echo " readonly ";
								}?>
								<?if ($item["REQ"] == true) :?> required <?endif;?> name="<?=$item["NAME"]?>"  <?
								if ($item["TYPE"] == "checkbox"){
									if($item["VALUE"]){
										echo "checked";
									}
								}else{
									if ($item["TYPE"] != "textarea"){
										?>value ="<?=$item["VALUE"]?>"<?
									}
								}?>><?if ($item["TYPE"] == "textarea") { echo $item["VALUE"].'</textarea>';}?>
							<?}else{?>
								<select name="<?=$item["NAME"]?>">
									<?foreach ($item["VALUES"] as $key=>$value){?>
										<option <?if ($item["VALUE"] == $key) :?> selected <?endif;?> value="<?=$key?>"><?=$value?></option>
									<?}?>
								</select>
							<?}?>
						</td>
					</tr>
				<?}?>

					<tr>
						<td class="first_col">Пользователи</td><td class="second_col">
						<!--<input type="text" value="212" name="SELECTED_USERS_ON_OBJECT" id="SELECTED_USERS_ON_OBJECT">-->
<?

/*echo '$arResult["USERS"]<pre>';
print_r($arResult["USERS"]);
echo '</pre>';*/

							$GLOBALS["APPLICATION"]->IncludeComponent('bitrix:intranet.user.selector.new', '', array(
							"FORM_NAME" => "object_form_edit",
							/*'INPUT_NAME' => "USER_SEARCH_INPUT",*/
							"MULTIPLE" => "Y",
							"NAME" => "USERS_OBJECTS",
							//'POPUP' => 'Y',
							'SITE_ID' => SITE_ID,
							"DISPLAY_TAB_STRUCTURE" => "N",
							"DISPLAY_TAB_GROUP" => "N",
							'INPUT_NAME_STRING' => "estimate_contact_h",
							'INPUT_NAME_SUSPICIOUS' => "estimate_contact_h",
							'TEXTAREA_MIN_HEIGHT' => 30,
							'TEXTAREA_MAX_HEIGHT' => 60,
							//'INPUT_VALUE' => array(1,2,3),
							'SHOW_EXTRANET_USERS' => 'Y',
							'SOCNET_GROUP_ID' => '',
							'VALUE' => $arResult["USERS"],
							//'INPUT_VALUE_STRING'  => "1,2,3,25",
							)
							);?>
						</td>
					</tr>

				<tr>
					<td class="first_col"><input type="submit" name="edit_object" value="<?=$arResult["EDIT_BUTTON"]?>"></td><td class="second_col"><input type="reset" value="<?=$arResult["CLEAN_BUTTON"]?>"></td>
				</tr>
				</tbody>
			</table>
		</form>
	</div>
<?}

/*echo '$arResult["USERS"]<pre>';
print_r($arResult["USERS"]);
echo '</pre>';*/
/*
$ar = CIBlockSection::GetList(Array("SORT"=>"ASC"), Array(),  false, array(),false);
while ($section = $ar->fetch())
{
	echo '$section<pre>';
	print_r($section);
	echo '</pre>';
}*/








?>