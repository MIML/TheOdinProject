(function ($) {
    var $prev = $('.prev'), $next = $('.next'), $current;
    var sectionFrom, $slide = $('.img'), $slideActive = $('.img.active'), $navLink = $('#nav a');

    init();
    slide();

    function slide() {
        $current = $slideActive.index();

        $next.click(function () {
            $current++;
            if ($current > 2) {
                $current = 0;
            }
            $("#slider > ul").animate({ left: '-' + ($current * 800) + 'px' });
            console.log($current);
        });
        $prev.click(function () {
            $current--;
            if ($current < 0) {
                $current = 2;
            }
            $("#slider > ul").animate({ left: '-' + ($current * 800) + 'px' });
        });
    }

    $navLink.on('click', function (e) {
        $('#nav li .active').remove();
        this.parent().addClass('active');
    });

    function init() {
        $("#slider > ul").animate({ left: '0px' });
    }
})(jQuery);
