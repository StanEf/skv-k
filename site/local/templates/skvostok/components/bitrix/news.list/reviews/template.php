<div class="choose_slider_items">
	<a class="nav-button nav-prev" href="javascript:slider.prevItem()"><i class="fa fa-angle-left"></i></a>
	<a class="nav-button nav-next" href="javascript:slider.nextItem()"><i class="fa fa-angle-right"></i></a>
	<ul id="reviews">
		<? foreach ($arResult['ITEMS'] as $key => $arItem) { ?>
			<li class="current_item" id="review_<?=$arItem['ID']?>" data-number="<?=++$key?>">
				<img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="carousel-image">
				<a href="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" class="fancyimage" rel="reviews-gal">
				</a>
			</li>
		<? } ?>
	</ul>
</div>
<script type="text/javascript">
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

	$(function() {
        $("#reviews").AnimatedSlider( {
             visibleItems: 5,
             infiniteScroll: true,
        });
        slider = $('#reviews').data('AnimatedSlider');

        $("#reviews").swipe({
        	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      			if (direction=='left') {
      				slider.nextItem();
      			} else if (direction=='right') {
      				slider.prevItem();
      			}
      		}
        });

        reviewId = findGetParameter('id');
        if (reviewId) {
        	console.log(reviewId);
        	console.log($('#review_'+reviewId).data('number'));
        	slider.setItem($('#review_'+reviewId).data('number'));
        }
	});
</script>