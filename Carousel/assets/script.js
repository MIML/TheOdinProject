(function ($) {
    var $prev = $('.prev'), $next = $('.next'), $current;
    var sectionFrom, $slide = $('.img'), $slideActive = $('.img.active'), $navLink = $('#nav li');

    init();
    slide();

    /*
    jquery list of images
    image[1] = image 1

    */

    function animate(direction){
        //$("#slider > ul").animate({ left: '-' + ($current * 800) + 'px' });
        $('#img01').zIndex(0);
        $slide.eq(2).show("slide", { direction: direction }, 4000);
    }

    function slide() {
        $current = $slideActive.index();


        //while($current < ('li.img').length){
            $next.on('click', function(e){
                animate('right');
                //current++;
            });
            $prev.on('click', function(e){
                animate('left');
                //current--;
            })
        //}
    }

    $navLink.on('click', function (e) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    function init() {
        $("#slider > ul").animate({ left: '0px' });
    }
})(jQuery);
