$(document).ready(function() {
    fullyearInFooter();

    $(document).on('click', '.time-stripe .time-stripe-year', function() {
        $('.time-stripe .time-stripe-year').removeClass('active');
        $(this).addClass('active');
        $('.buildings .building').fadeOut();
        $('.buildings .building.'+$(this).data('year')).fadeIn();
    });

    $('.time-stripe .time-stripe-year:last-child').click();

    if ($(window).width() > 750) {
        setEqualHeight($(".newslist_name"));
        setEqualHeight($(".newslist_text"));
    }

    var widthBox = $('.position_img').width();
    $('.position_img').height(widthBox);

    $('#reviews').height($('.current_item').height());
});

$(window).resize(function(){
    var widthBox = $('.position_img').width();
    $('.position_img').height(widthBox); 

    if (document.body.clientWidth > 750) {
        setEqualHeight($(".newslist_name"));
        setEqualHeight($(".newslist_text"));
    }

    $('#reviews').height($('.current_item').height());
});

function fullyearInFooter() {
    var year = new Date().getFullYear();
    $('#year').html(year);
}

function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}