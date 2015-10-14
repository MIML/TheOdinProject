(function ($) {
    var $prev = $('.prev'), $next = $('.next'), $current;
    var sectionFrom, $slide = $('.img'), $slideActive = $('.img.active'), $navLink = $('#nav li');

    init();
    slide();

    function animate(direction){
        $('#img01').zIndex(1);
        $slide.eq(1).show("slide", { direction: direction }, 4000);
        $('#img02').zIndex(2);
    }

    function slide() {
        $next.on('click', function(e){
            animate('right');
        });
        $prev.on('click', function(e){
            animate('left');
        })
    }

    $navLink.on('click', function (e) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    function init() {
        $("#slider > ul").animate({ left: '0px' });
    }
})(jQuery);