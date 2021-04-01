$(function () {
    $(window).on('resize', function () {
        if ($(window).width() >= 768) {
            $(".nav-wrap").removeClass('closeMenu');
        }
    });
    $(".nav-button").on("click", function () {
        $(this).toggleClass('openMenu');
        if (!$(".nav-wrap").hasClass('openMenu')) {
            $(".nav-wrap")
                .removeClass('closeMenu')
                .addClass('openMenu')
                ;
        } else {
            $(".nav-wrap")
                .removeClass('openMenu')
                .addClass('closeMenu')
                ;
        }
        return false;
    });
});