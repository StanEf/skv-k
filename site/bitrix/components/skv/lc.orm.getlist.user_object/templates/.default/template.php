<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

// echo'<pre>';
// print_r($arResult);
// echo'</pre>';
?>

<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

// echo'1<pre>';
// print_r($arResult);
// echo'</pre>';
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
<div class="container" style="padding: 15px; margin: auto; text-align: -webkit-center;">

	<h3 class="bx-title">
		Объект - Пользователь
	</h3><br/>

	<table>
		<tr>
			<th>
				ID пользователя
			</th>
			<th>
				ID объекта
			</th>		
		</tr>
		<?foreach($arResult["ObjectUserTable"] as $object):?>
		<tr>
			<td>
				<?= $object["USER_ID"]?>
			</td>
			<td>
				<?= $object["OBJECT_ID"]?>
			</td>
		</tr>
		<?endforeach;?>
	</table>
</div>	