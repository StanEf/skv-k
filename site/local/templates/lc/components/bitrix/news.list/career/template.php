
        <div class="moto-widget moto-widget-row row-fixed" data-widget="row">
            <div class="container-fluid">
                <div class="row vacancy-block owl-carousel owl-theme" style="display: block;">
                    <? foreach ($arResult['ITEMS'] as $arItem) { ?>
                        <div class="moto-cell" data-container="container">
                            <div data-widget-id="wid__image__58625280e603f" class="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto wow fadeInLeft" data-preset="default" data-widget="image">
                                <div class="moto-widget-image-link">
                                    <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="moto-widget-image-picture" data-id="267" title="" alt="" draggable="false">
                                </div>
                            </div>
                            <div data-animation="fadeInLeft" class="moto-widget moto-widget-text moto-preset-default                wow fadeInLeft moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="sama">
                                <div class="moto-widget-text-content moto-widget-text-editable">
                                    <a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="moto-text_system_6">
                                        <?=$arItem['NAME']?>
                                        <br>
                                    </a>
                                </div>
                            </div>
                            <div data-animation="fadeInLeft" class="moto-widget moto-widget-text moto-preset-default              wow fadeInLeft moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="aaaa">
                                <div class="moto-widget-text-content moto-widget-text-editable">
                                        <?=$arItem['PREVIEW_TEXT']?>
                                </div>
                            </div>
                            <div data-widget-id="wid__button__58625280e62b6" class="moto-widget moto-widget-button moto-preset-default moto-align-left moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto wow fadeInLeft" data-widget="button" data-preset="default">
                            </div>
                        </div>
                    <? } ?>
                </div>
            </div>
        </div>
        
    <script type="text/javascript">
        $(document).ready(function() {
            $('.vacancy-block').owlCarousel({
                items: 3,
                nav: false,
                loop: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    }
                }
            });

            if (window.location.hash == "#career") {
                scroll = $('#career-wrap').offset().top - 83;
                $(window).scrollTop(scroll);
            }
        });
    </script>