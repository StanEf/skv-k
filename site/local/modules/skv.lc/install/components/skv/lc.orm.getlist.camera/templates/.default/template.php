<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

?>
<style type="text/css">
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
<div class="container" style="padding: 15px;">
	<h3 class="bx-title">
		Все камеры
	</h3><br/>
	<table>
		<tr>
			<th>
				ID камеры
			</th>
			<th>
				Название камеры
			</th>
			<th>
				Ссылка
			</th>
			<th>
				ID объекта
			</th>
		</tr>
		<?foreach($arResult as $cam):?>
		<tr>
			<td>
				<?= $cam["ID"]?>
			</td>
			<td>
				<?= $cam["NAME"]?>
			</td>
			<td>
				<?= $cam["LINK"]?>
			</td>
			<td>
				<?= $cam["OBJECT_ID"]?>
			</td>
		</tr>
		<?endforeach;?>
	</table>
</div>	