<div class="moto-widget moto-widget-text moto-preset-default                             moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aala">
    <div class="moto-widget-text-content moto-widget-text-editable">
        <p style="text-align: right;" class="moto-text_system_11">
            <span class="moto-color5_3">
                <a data-action="url" href="/" target="_blank">Главная</a>&nbsp; |&nbsp;
                <? foreach ($arResult as $key => $arItem) { ?>
                    <a data-action="url" href="<?=$arItem['LINK']?>" target="_blank"><?=$arItem['TEXT']?></a><?if (++$key!=sizeof($arResult)) echo '&nbsp; |&nbsp;';?>
                <? } ?>
            </span>
            <br>
        </p>
    </div>
</div>