<div data-css-name="moto-container_content_55609104" class="moto-widget moto-widget-container moto-container_content_55609104" data-widget="container" data-container="container">
    <div data-css-name="moto-container_content_5560e0a0" class="moto-widget moto-widget-container moto-container_content_5560e0a0" data-widget="container" data-container="container">
        <div class="moto-widget moto-widget-divider moto-preset-default               moto-align-center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="center" data-spacing="maaa" data-width="0">
            <hr style="width: 0%;" class="moto-widget-divider-line">
        </div>
        <div data-animation="fadeIn" class="moto-widget moto-widget-text moto-preset-default                 wow fadeIn moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="lama">
            <div class="moto-widget-text-content moto-widget-text-editable">
                <p class="moto-text_system_4" style="text-align: center;">ПАРТНЕРЫ<br></p>
            </div>
        </div>
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row">
                    <? $counter = 0; ?>
                    <? foreach ($arResult['ITEMS'] as $arItem) { ?>
                        <? if ($counter==0) { ?>
                            <div class="moto-cell col-sm-12" data-container="container">
                                <div class="moto-widget moto-widget-row" data-widget="row">
                                    <div class="container-fluid">
                                        <div class="row">
                        <? } ?>
                        <? $counter++; ?>
                        <div class="moto-cell col-sm-3" data-container="container">
                            <div data-widget-id="wid__image__57eb867d3c828" class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto wow fadeInUp partners_item" data-preset="default" data-widget="image">
                                <a class="moto-widget-image-link moto-link" href="<?=$arItem['PROPERTIES']['LINK']['VALUE']?>" target="_blank" data-action="url">
                                    <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="moto-widget-image-picture" data-id="255" title="" alt="" draggable="false">
                                </a>
                            </div>
                        </div>
                        <? if ($counter/4==1) { ?>
                            </div>
                            </div>
                            </div>
                            </div>
                            <? $counter=0; ?>
                        <? } ?>
                    <? } ?>
                </div>
            </div>
        </div>
        <div class="moto-widget moto-widget-divider moto-preset-default              moto-align-left moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="mala" data-width="0">
            <hr style="width: 0%;" class="moto-widget-divider-line">
        </div>
    </div>
</div>