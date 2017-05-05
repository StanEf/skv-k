<div data-css-name="moto-container_content_556090f0" class="moto-widget moto-widget-container moto-container_content_556090f0" data-widget="container" data-container="container">
    <div class="moto-widget moto-widget-divider moto-preset-default               moto-align-left moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="maaa" data-width="0">
        <hr style="width: 0%;" class="moto-widget-divider-line">
    </div>
    <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
        <div class="container-fluid">
            <div class="row icons-on-main-wrap">
                <? foreach ($arResult['ITEMS'] as $key => $arItem) { ?>
                    <div class="moto-cell col-lg-6 col-md-4 col-sm-4 col-xs-12 icons-on-main" data-container="container">
                        <div data-widget-id="wid__image__57eb867d36d73" class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto wow <? if ($key<3) echo 'fadeInLeft'; else echo 'fadeInRight'; ?>" data-preset="default" data-widget="image">
                            <a href="/services?service=<?=$arItem['ID']?>" class="moto-widget-image-link">
                                <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="moto-widget-image-picture" data-id="<?=$arItem['PREVIEW_PICTURE']['ID']?>" title="" alt="" draggable="false">
                            </a>
                        </div>
                        <div data-animation="<? if ($key<3) echo 'fadeInLeft'; else echo 'fadeInRight'; ?>" class="moto-widget moto-widget-text moto-preset-default                                wow <? if ($key<3) echo 'fadeInLeft'; else echo 'fadeInRight'; ?> moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="mama">
                            <div class="moto-widget-text-content moto-widget-text-editable main-items-title">
								<p style="text-align: center; text-transform: uppercase;" class="moto-text_system_6"><?=$arItem['NAME']?></p>
                            </div>
                        </div>
                        <div data-animation="<? if ($key<3) echo 'fadeInLeft'; else echo 'fadeInRight'; ?>" class="moto-widget moto-widget-text moto-preset-default                                 wow <? if ($key<3) echo 'fadeInLeft'; else echo 'fadeInRight'; ?> moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aama">
                            <div class="moto-widget-text-content moto-widget-text-editable main-items-descr">
                                <p class="moto-text_normal" style="text-align: center;">
                                    <span class="moto-color3_3">
                                        <?=$arItem['PREVIEW_TEXT']?>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                <? } ?>
                
            </div>
        </div>
    </div>
    <div class="moto-widget moto-widget-divider moto-preset-default               moto-align-left moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="laaa" data-width="0">
        <hr style="width: 0%;" class="moto-widget-divider-line">
    </div>
</div>