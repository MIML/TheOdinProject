(function ($) {
    var $prev = $('.prev'), $next = $('.next');

    $(document).ready(function () {
        $next.click(function () {
            console.log("next");
            $( "#slider > ul" ).animate({left: '-800px'});
        });
        $prev.click(function () {
            console.log("prev");
             $( "#slider > ul" ).animate({left: '0px'});
        });
    });

    function init() {
        alert("hi");
    }
})(jQuery);
