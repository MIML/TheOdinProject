(function ($) {
    var $prev = $('.prev'), $next = $('.next'), $current;
    var sectionFrom, $slide = $('.img'), $slideActive = $('.img.active'), $navLink = $('#nav li');

    init();
    slide();

    function animate(){
        $("#slider > ul").animate({ left: '-' + ($current * 800) + 'px' });
    }


    function slide() {
        $current = $slideActive.index();

        $next.click(function () {
            $current++;
            if ($current > 2) {
                $current = 0;
            }
            animate();
        });
        $prev.click(function () {
            $current--;
            if ($current < 0) {
                $current = 2;
            }
            animate();
        });
    }

    $navLink.on('click', function (e) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    function init() {
        $("#slider > ul").animate({ left: '0px' });
    }
})(jQuery);