<div class="owl-carousel owl-theme carousel" style="width: 100%;">
    <? foreach($arResult['ITEMS'] as $arItem) { ?>
        <div class="item banner_item" style="height: 550px; background-image: url(<?=$arItem['PREVIEW_PICTURE']['SRC']?>); background-repeat: no-repeat; background-position: center; background-size: cover;">
            <?=$arItem['PREVIEW_TEXT']?>
        </div>
    <? } ?>
</div>

<script type="text/javascript">
        $(document).ready(function(){
            $('.carousel').owlCarousel({
                items: 1,
                autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:false,
				loop:true,
				autoplaySpeed: 1000,
				animateOut: 'fadeOut',
				slideSpeed: 2000,
            });
            
            /*$("#btnWorksPrev").click(function () {
              carousel.prev();
            });
            $("#btnWorksNext").click(function () {
              carousel.next();
            });*/
        });
    </script>