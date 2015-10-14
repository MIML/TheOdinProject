var game = false;
function gameStartOver(button) {
  var id = $(button).attr('id');
  if (id = 'start') {
      game = true;
  }
}

$(function () {
    var grids = [], grid = [], deadGrids = [];
    // snake starts from center, while food is located randomly
    var snake = {
        position: grid[1, 1],
        direction: 'right',
        length: 1
    }, food = grid[0, 0];
    createGrid();
    $(snake.position).addClass('snake');

    if (game) {
        move(snake.direction);
        killSnake();

    }

    function createGrid() {
        for (var i = 0; i < 40; i++) {
            $("<div></div>").attr('class', 'row').appendTo('#container');
            for (var j = 0; j < 40; j++) {
                $("<div></div>").attr('class', 'grid').appendTo('#container');
                grid = [i, j];
                grids.push.grid;

                //                if (i=0 | i=39 | j=0 | j=39) { 
                //                    deadGrids.push.grid;
                //                }
            }
        }
        console.log(grids);
    }

    function move(dir) {
        // navigate the snake
        $(window).keydown(function (e) {
            if (e.which === 37) {
                dir = 'left';
            } else if (e.which === 38) {
                dir = 'top';
            } else if (e.which === 39) {
                dir = 'right';
            } else {
                dir = 'down';
            }
        });
        snake.animate({ left: dir }, 'fast');
    }

    // when the snake location === food location, snake's size ++
    function eatFood() {
        if (snake.position = food) {
            snake.length = +1;
        }
    }

    function killSnake() {
        // when the snake hits the boundary of the grid
        for (var i = 0; i < deadGrids.length; i++) {
            if (snake.position == deadGrids[i]) {
                game = false;
            }
        }
        // when the snake hits itself
        for (var i = 0; i < snake.length; i++) {
            if (snake.position == snake[i]) { // snake needs to have a big array wrapping its head and body -- this is not right
                game = false;
            }
        }
    }
});
