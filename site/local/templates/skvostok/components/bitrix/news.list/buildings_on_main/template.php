<div class="moto-widget moto-widget-container buildings-wrap">
    <div class="moto-widget moto-widget-divider moto-preset-default               moto-align-left moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto" data-widget="divider_horizontal" data-divider-type="horizontal" data-preset="default" data-align="left" data-spacing="maaa" data-width="0">
        <hr style="width: 0%;" class="moto-widget-divider-line">
    </div>
    <div data-animation="fadeInUp" class="moto-widget moto-widget-row row-fixed wow fadeInUp" data-widget="row">
        <div class="container-fluid">
            <div class="row">
                <div class="moto-cell col-sm-12">
                    <div class="moto-widget moto-widget-text moto-preset-default moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="lala">
                        <div class="moto-widget-text-content moto-widget-text-editable">
                            <p class="moto-text_system_4" style="text-align: center;">ВЫПОЛНЕННЫЕ РАБОТЫ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="moto-cell col-sm-12">
                    <div class="time-stripe">
                        <div class="time-stripe-background">
                            <div class="years-wrap">
                                <? for ($i=$arResult['YEARS']['MIN_YEAR'];$i<=$arResult['YEARS']['MAX_YEAR'];$i++) { ?>
                                    <a href="javascript:void(0)" class="time-stripe-year" data-year="<?=$i?>"><?=$i?></a>
                                <? } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="moto-cell col-sm-12 buildings">
                    <div class="row">
                        <? foreach ($arResult['ITEMS'] as $arItem) { ?>
                            <div class="building building_<?=$arItem['PROPERTIES']['BUILD_YEAR']['VALUE']?> col-sm-3 col-xs-6" style="">
								<div class="building-image img-circle" style="background-image: url('<?=$arItem['PREVIEW_PICTURE']['SRC']?>')" onclick="window.location = '<?=$arItem['DETAIL_PAGE_URL']?>';" style="cursor: pointer;"></div>
								<div class="building-title"><a href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a></div>
                            </div>
                        <? } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    var year = null;

    function findYear() {
        return $('.time-stripe .time-stripe-year.active').data('year');
    }

    function showBuildings() {
        year = findYear();
        $('.buildings .building').hide();
        $('.buildings .building_'+year).fadeIn();
    }

    $(document).ready(function() {
        showBuildings();

        /*$(document).on('click', '.time-stripe .time-stripe-year', function() {
            $('.time-stripe .time-stripe-year').removeClass('active');
            $(this).addClass('active');
            $('.buildings .building').fadeOut();
            $('.buildings .building.'+$(this).data('year')).fadeIn();
        });

        $('.time-stripe .time-stripe-year:last-child').click();*/
        $(document).on('click', '.time-stripe .time-stripe-year', function() {
            $('.time-stripe .time-stripe-year').removeClass('active');
            $(this).addClass('active');
            showBuildings();
        });

    });
</script>