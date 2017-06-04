<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

if($arResult["RESULT_MESSAGE"]){
	echo '<div id="result_message">';
	foreach ($arResult["RESULT_MESSAGE"] as $res1){
		echo $res1 . '<br>';
	}
	echo '</div>';
}

if ($arResult != null) {
	$APPLICATION->IncludeComponent(
		"bitrix:main.interface.toolbar",
		"lc",
		array(
			"BUTTONS" => array(
				array(
					"TEXT" => "Создать",
					"TITLE" => "Создать",
					"LINK" => "object_add.php",
					"ICON" => "btn-new",
				),
			),
		),
		$component
	);


	$APPLICATION->IncludeComponent(
		"bitrix:main.interface.grid",
		"",
		array(
			"GRID_ID" => $arResult["GRID_NAME"],
			"HEADERS" => $arResult["HEADERS"],
			"ROWS" => $arResult["ROWS"],
			"FOOTER" => array(array("title" => "Всего", "value" => $arResult["COUNT"])),
			"NAV_OBJECT" => $arResult["NAV"],
			"NAV_PARAMS" => array(#				"SEF_MODE" => "Y"
			),
			"FILTER" => $arResult["FILTER"],
			"SORT"=>$arResult["SORT"],
			"SORT_VARS"=>array("by" => "by", "order" => "order"),
			"FILTER_TEMPLATE_NAME" => "tabbed",
		)
	);
}


/*echo'$arResult<pre>';
 print_r($arResult);
 echo'</pre>';*/


?>
<!--<style type="text/css">
	TABLE {
		width: 300px; /* Ширина таблицы */
		border-collapse: collapse; /* Убираем двойные линии между ячейками */
	}
	TD, TH {
		padding: 3px; /* Поля вокруг содержимого таблицы */
		border: 1px solid black; /* Параметры рамки */
	}
	TH {
		background: #fe8f01; /* Цвет фона */
		color: #fff;
	}
</style>
<div class="container" style="padding: 15px; margin: auto; text-align: -webkit-center;">

	<h3 class="bx-title">
		Все объекты
	</h3><br/>

	<table>
		<tr>
			<th>
				ID объекта
			</th>
			<th>
				Название
			</th>
			<th>
				Широта
			</th>
			<th>
				Долгота
			</th>
		</tr>
		<?/*foreach($arResult["ObjectTable"] as $object):*/?>
		<tr>
			<td>
				<?/*= $object["ID"]*/?>
			</td>
			<td>
				<?/*= $object["NAME"]*/?>
			</td>
			<td>
				<?/*= $object["COORD_LAT"]*/?>
			</td>
			<td>
				<?/*= $object["COORD_LON"]*/?>
			</td>
		</tr>
		<?/*endforeach;*/?>
	</table>
</div>	-->