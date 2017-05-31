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
if ($arResult != null) {?>
	<div id="object_form_add">
		<form id="object_form_add" name="object_form_add" method="post" action="object_add.php">
			<table>
				<tbody>
				<?foreach ($arResult["TABLE"] as $item){?>
					<tr>
						<td class="first_col"><?=$item["TITLE"]?></td><td class="second_col"><?
							if($item["SPECIAL"] != true){
								if($item["TYPE"] == "textarea"){
									echo '<textarea id="tinymcetextarea" ';
								}elseif($item["TYPE"] == "date"){
									echo '<input  type="text" class="tcal"';
								}else{
									echo "<input  type=\"" . $item["TYPE"] . "\"";
								}?>
								<?if ($item["REQ"] == true) :?> required <?endif;?> name="<?=$item["NAME"]?>" id="form_<?=$item["TYPE"]?>_field"><?if ($item["TYPE"] == "textarea") :?></textarea><?endif;?>
							<?}else{?>
								<select name="<?=$item["NAME"]?>">
									<?foreach ($item["VALUES"] as $key=>$value){?>
										<option value="<?=$key?>"><?=$value?></option>
									<?}?>
								</select>
							<?}?>
						</td>
					</tr>
				<?}?>
				<tr>
					<td class="first_col"><input type="submit" name="add_object" value="<?=$arResult["ADD_BUTTON"]?>"></td><td class="second_col"><input type="reset" value="<?=$arResult["CLEAN_BUTTON"]?>"></td>
				</tr>
				</tbody>
			</table>
		</form>
	</div>
<?}?>