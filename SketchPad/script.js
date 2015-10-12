$(function () {
    createGrid();
    $('.red').mouseover(function () {
        $(this).addClass('highlight');
    });

    $('button').click(function () {
        $('.red').removeClass('highlight');
    });

    function createGrid() {
        for (var i = 0; i < 40; i++) {
            $("<div></div>").attr('class', 'yellow').appendTo('#container');
            for (var j = 0; j < 40; j++) {
                $("<div></div>").attr('class', 'red').appendTo('#container');
            }
        }
    }
});
