<div class="moto-widget moto-widget-row row-fixed" data-widget="row">
    <div class="container-fluid">
        <div class="row">
            <div class="moto-cell col-sm-12" data-container="container">
                <div class="moto-widget moto-widget-divider moto-preset-default                 moto-align-left moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="maaa" data-width="0">
                    <hr style="width: 0%;" class="moto-widget-divider-line">
                </div>
				<? if ($APPLICATION->GetCurDir()=='/') { ?>
                <div data-animation="fadeIn" class="moto-widget moto-widget-text moto-preset-default                          wow fadeIn moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="lala">
                    <div class="moto-widget-text-content moto-widget-text-editable">
                        <p class="moto-text_system_4" style="text-align: center;">НОВОСТИ</p>
                    </div>
                </div>
				<? } ?>
                <div class="moto-widget moto-widget-row" data-widget="row">
                    <div class="container-fluid">
                        <div class="row" style="display:block;">
                            <? foreach ($arResult['ITEMS'] as $arItem) { ?>
                                <div class="moto-cell col-lg-4 col-md-4 col-sm-4 col-xs-12" data-container="container">
                                    <div class="moto-widget moto-widget-row" data-widget="row">
                                        <div class="container-fluid">
                                            <div class="row" style="display:block;">
                                                <div class="moto-cell col-lg-4 col-md-4 col-sm-12 col-xs-12" data-container="container">
                                                    <div data-widget-id="wid__image__57eb867d3a85e" class="moto-widget moto-widget-image position_img_box moto-preset-3 moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto wow fadeInUp" data-preset="3" data-widget="image">
                                                        <div class="moto-widget-image-link position_img" style="background: url('<?=$arItem['PREVIEW_PICTURE']['SRC']?>') 0 0 no-repeat;">
                                                            <!--<img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="moto-widget-image-picture" title="" alt="<?=$arItem['NAME']?>" draggable="false">-->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="moto-cell col-lg-8 col-md-8 col-sm-12 col-xs-12 cont-wrap" data-container="container">
                                                    <div data-animation="fadeInUp" class="moto-widget moto-widget-text moto-preset-default                        wow fadeInUp moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aasa">
                                                        <div class="moto-widget-text-content moto-widget-text-editable">
                                                            <p class="moto-text_system_6 newslist_name"><?=$arItem['NAME']?><br></p>
                                                        </div>
                                                    </div>
                                                    <div data-animation="fadeInUp" class="moto-widget moto-widget-text moto-preset-default                        wow fadeInUp moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aasa">
                                                        <p><?=date('d.m.Y', strtotime($arItem['ACTIVE_FROM']))?></p>
                                                    </div>
                                                    <div data-animation="fadeInUp" class="moto-widget moto-widget-text moto-preset-default                        wow fadeInUp moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="sasa">
                                                        <div class="moto-widget-text-content moto-widget-text-editable">
                                                            <p class="moto-text_normal newslist_text"><span class="moto-color3_3"><?=$arItem['PREVIEW_TEXT']?></span></p>
                                                        </div>
                                                    </div>
                                                    <div data-widget-id="wid__button__57eb867d3a9da" class="moto-widget moto-widget-button moto-preset-default moto-align-left moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto wow fadeInUp detail-link-wrap newsitem_link" data-widget="button" data-preset="default">
                                                        <a href="<?=$arItem['DETAIL_PAGE_URL']?>" data-action="page" class="moto-widget-button-link moto-size-medium moto-link" data-size="medium"><span class="fa moto-widget-theme-icon"></span> <span class="moto-widget-button-label">ПОДРОБНЕЕ</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <? } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>