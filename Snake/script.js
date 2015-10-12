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


    // snake starts from the center point [20,20], food is located randomly
    var o = [20, 20], 
        food = foods[Math.floor(Math.random() * foods.length)];

    // navigate the snake
    var dir;
    if(e.which === 37){
        dir = 'left';
    }else if(e.which === 38){
        dir = 'top';
    }else if(e.which === 39){
        dir = 'right';
    }else{
        dir = 'down';
    }

    // snake originally moves to the right
    o.animate({ left: 'right' }, 'fast');
    if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40) {
        o.animate({ left: dir }, 'fast');
    }

    // when the snake location === food location, snake's size ++

    // when the snake hits the boundary of the grid --> game over

});
