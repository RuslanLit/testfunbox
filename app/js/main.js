$(function () {

    $('.main__item-wrap').click(function () {
        $(this).find('.main__inner-item').toggleClass('selected');
        $(this).find('.disabled').removeClass('main__inner-item');
    });

    $(function () {
        let chek = $('.main__inner-item');
        $(chek).mouseenter(function() {
            if($(this).hasClass('selected')) {
                $(this).find('.main__item-subtitle-ask').addClass('selectedhover');
            }
        });
        $(chek).mouseleave(function() {
            if($(this).hasClass('selected')) {
                $(this).find('.main__item-subtitle-ask').removeClass('selectedhover');
            }
        });
    });

    $('.main__inner-item').on('click', function() {
        if ($(this).hasClass('selected')){
            $(this).find('.main__item-subtitle-ask').removeClass('selectedhover');
            }
     });
     
    $('.main__inner-item').on('click', function() {
        if ($(this).hasClass('disabled')){
            $(this).find('.main__inner-item').removeClass('main__inner-item');
            }
     });
});