<?

?>

<?if(!empty($arResult['cameras'])):?>
	<?foreach($arResult['cameras'] as $object_id => $cameras):?>
	

		<?for($row=0;$row<ceil(count($cameras)/2);$row++):?>
  <div class="templatemo-flex-row flex-content-row">
	<div class="templatemo-content-widget white-bg col-1 text-center">
	  <h2 class="text-uppercase"><?=$cameras[2*$row]['NAME']?></h2>
	  <?= htmlspecialcharsBack($cameras[2*$row]['LINK'])?>
	</div>
	<?if(isset($cameras[2*$row+1])):?>
	<div class="templatemo-content-widget white-bg col-1 text-center">
	  <h2 class="text-uppercase"><?=$cameras[2*$row+1]['NAME']?></h2>
	  <?= htmlspecialcharsBack($cameras[2*$row+1]['LINK'])?>
	</div>
	<?endif;?>
  </div>
		<?endfor;?>

	<?endforeach;?>
<?endif;?>
