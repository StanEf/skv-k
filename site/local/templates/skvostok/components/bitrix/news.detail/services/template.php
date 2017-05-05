<section id="section-content" class="content page-4 moto-section" data-widget="section" data-container="section">
    <div data-css-name="moto-container_content_5560f78c7aaca" class="moto-widget moto-widget-container moto-container_content_5560f78c7aaca" data-widget="container" data-container="container">
        <div data-css-name="moto-container_content_5560f78c7aeb3" class="moto-widget moto-widget-container moto-container_content_5560f78c7aeb3" data-widget="container" data-container="container"></div>
    </div>
    <div data-css-name="moto-container_content_5560f78c7b29b" class="moto-widget moto-widget-container moto-container_content_5560f78c7b29b" data-widget="container" data-container="container">
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row">
                    <div class="moto-cell col-sm-12" data-container="container">
                        <div class="col-sm-12">
                            <div data-animation="fadeInRight" class="moto-widget moto-widget-text moto-preset-default                       wow fadeInRight moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aasa" style="visibility: visible; animation-name: fadeInRight;">
                                <div class="moto-widget-text-content moto-widget-text-editable service-title">
                                    <h3>
                                        <?=$arResult['NAME']?>
                                    </h3>
                                </div>
                            </div>
                            <div data-animation="fadeInLeft" class="moto-widget moto-widget-text moto-preset-default                       wow fadeInLeft moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aasa" style="visibility: visible; animation-name: fadeInLeft;">
                                <div class="moto-widget-text-content moto-widget-text-editable">
                                    <?=$arResult['DETAIL_TEXT']?>
                                </div>
                                <? if ($arResult['PROPERTIES']['REVIEW']['VALUE']) { ?>
                                    <div class="text-center" style="width:100%; margin-top: 30px;">
                                        <a href="/about/reviews/?id=<?=$arResult['PROPERTIES']['REVIEW']['VALUE']?>" class="news-page">отзыв о работе</a>
                                    </div>
                                <? } ?>
                            </div>
                            <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="moto-cell col-sm-12" data-container="container">
                                            <div class="moto-widget moto-widget-divider moto-preset-default         moto-align-left moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="laaa" data-width="0">
                                                <hr style="width: 0%;" class="moto-widget-divider-line">
                                            </div>
                                            <div data-widget-id="wid__grid_gallery__58625281c9712" class="moto-widget moto-widget-grid-gallery moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  wow fadeIn" data-widget="grid_gallery" data-preset="default" data-spacing="aaaa">
                                                <div class="moto-widget-grid-gallery-items" data-moto-grid-gallery-options='{&quot;rowHeight&quot;:220,&quot;fixedHeight&quot;:true,&quot;margins&quot;:20,&quot;lastRow&quot;:&quot;justify&quot;,&quot;showCaptions&quot;:true,&quot;enableLightbox&quot;:false}'>
                                                    <? foreach ($arResult[ 'PROPERTIES'][ 'PHOTOS'][ 'VALUE'] as $photo) { ?>
                                                    <a href="<?=CFile::GetPath($photo)?>" class="moto-widget-grid-gallery-item fancyimage" rel="servic">
                                                                <img src="<?=CFile::GetPath($photo)?>" alt="<?=$arResult['NAME']?>" class="moto-widget-grid-gallery-image" draggable="false" data-id="<?=$arResult['ID'];?>">
                                                            </a>
                                                    <? } ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="moto-cell col-sm-12" data-container="container">
                                            <div class="moto-widget moto-widget-divider moto-preset-default          moto-align-left moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="laaa" data-width="0">
                                                <hr style="width: 0%;" class="moto-widget-divider-line">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>