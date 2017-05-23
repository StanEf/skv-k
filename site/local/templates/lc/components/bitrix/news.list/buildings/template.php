<div class="moto-widget moto-widget-container buildings-wrap">
    <div data-animation="fadeInUp" class="moto-widget moto-widget-row row-fixed wow fadeInUp" data-widget="row">
        <div class="container-fluid">
            <div class="row">
                <div class="moto-cell col-sm-12">
                    <div class="moto-widget moto-widget-text moto-preset-default moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto" data-widget="text" data-preset="default" data-spacing="lala">
                        <div class="moto-widget-text-content moto-widget-text-editable">
                            <p class="moto-text_system_4" style="text-align: center;">ВЫПОЛНЕННЫЕ РАБОТЫ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="moto-cell col-sm-12">
                	<div class="services-wrap row">
                		<? foreach ($arResult['SERVICES'] as $key => $service) { ?>
                			<div class="col-sm-2 service">
                				<div class="service_item <?if ($key==0) echo 'active';?>" data-name="<?=$service['NAME']?>" data-serviceid="<?=$service['ID']?>" data-code="<?=$service['CODE']?>" data-desc="<?=$service['PREVIEW_TEXT']?>">
                                    <span>
                    					<img class="icon" src="<?=$service['ICON']?>" />
                    					<img class="active-icon" src="<?=$service['ACTIVE_ICON']?>" />
                    				</span>
                                    <div class="hide_nameservices"><div><?=$service['NAME']?></div></div>
                                    <div class="clearfix"></div>
                                </div>
                			</div>
            			<? } ?>
                	</div>
                	<div class="row">
                		<div class="service-desc col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
            				<div class="row">
            					<div class="col-sm-3 icon serv_icon">
            						<img class="active-icon" src="<?=$arResult['SERVICES'][0]['ACTIVE_ICON']?>" />
            					</div>
            					<div class="col-sm-9 desc">
            						<h2><?=$arResult['SERVICES'][0]['NAME']?></h2>
            						<p><?=$arResult['SERVICES'][0]['PREVIEW_TEXT']?></p>
            					</div>
            				</div>            				
            			</div>
                	</div>
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
                    <div class="row" style="display: block;">
                        <? foreach ($arResult['ITEMS'] as $arItem) { ?>
                            <div class="building building_<?=$arItem['PROPERTIES']['BUILD_YEAR']['VALUE']?> col-sm-12 <?=$arItem['PROPERTIES']['SERVICES']?>" style="">
                            	<div class="row">
                            		<div class="col-sm-10 col-sm-offset-1">
                            			<div class="building-image col-sm-4 pull-right" style="background-image: url('<?=$arItem['PREVIEW_PICTURE']['SRC']?>'); max-height: 240px;"></div>
    		                              <div class="col-sm-8 pull-left">
    		                                  <div class="building-date"><?=date('d.m.Y', strtotime($arItem['ACTIVE_FROM']))?></div>
    		                                  <div class="building-title"><strong><?=$arItem['NAME']?></strong></div>
    		                                  <div class="building-desc"><?=$arItem['PREVIEW_TEXT']?></div>
                                              <a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="service-link">Подробнее »</a>
                                        </div>	
                            		</div>
                            	</div>
                                <hr/>
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
    var service = null;
	
	function findYear() {
		return $('.time-stripe .time-stripe-year.active').data('year');
	}

	function findService() {
		return $('.services-wrap .service_item.active').data('serviceid');
	}

	function showBuildings() {
	    year = findYear();
        service = findService();
		$('.buildings .building').hide();
		$('.buildings .building_'+year+'.service_'+service).fadeIn();
	}

    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
        .substr(1)
            .split("&")
            .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
        return result;
    }

    $(document).ready(function() {

    	var getYear = findGetParameter('year');
    	var getService = findGetParameter('service_item');
		year = $('.time-stripe-year.active').data('year');
		service = $('.service_item.active').data('serviceid');

		if (getYear!=year && getYear!=null) {
			$('.time-stripe-year').removeClass('active');
			var yearObj = $('.time-stripe-year[data-year='+getYear+']')[0];
			$(yearObj).addClass('active');
			year = getYear;
		}

		if (getService!=service && getService!=null) {
			$('.service_item').removeClass('active');
			var serviceObj = $('.service[data-serviceid='+getService+']')[0];
			var img = $(serviceObj).find('.active-icon');
	    	$('.service-desc .desc h2').html($(serviceObj).data('name'));
	    	$('.service-desc .desc p').html($(serviceObj).data('desc'));
	    	$('.service-desc .icon').html('<img src="'+img.attr('src')+'" />');
			$(serviceObj).addClass('active');	
			service = getService;
		}

		showBuildings();

	    $(document).on('touchstart click', '.time-stripe .time-stripe-year', function() {
	        $('.time-stripe .time-stripe-year').removeClass('active');
	        $(this).addClass('active');
	        showBuildings();

            return false;
	    });

	    $(document).on('touchstart click', '.services-wrap .service_item', function() {
	    	var img = $(this).find('.active-icon');
	    	$('.service-desc .desc h2').html($(this).data('name'));
	    	$('.service-desc .desc p').html($(this).data('desc'));
	    	$('.service-desc .icon').html('<img src="'+img.attr('src')+'" />');
	    	$('.service-desc').show();
	    	$('.service_item').removeClass('active');
	    	$(this).addClass('active');
	    	showBuildings();

            return false;
	    });

	});
</script>