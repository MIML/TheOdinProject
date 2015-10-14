var game = false;
function gameStart()
{
  game = true;
}
function gameStartOver()
{
  game = false;
}

// in the html, gameStartOver(this); -- tried to refactored the code, but this makes it converluted
// function gameStartOver(button) {
//   var id = $(button).attr('id');
//   if (id == 'start') {
//       game = true;
//   }else if(id=='over'){
//       game = false;
//       console.log("arrrg");
//   }
// }

$(function () {
    var grids = [], deadGrids = [];
    // snake starts from center, while food is located randomly
    var snake = {
        position: {x:5,y:5},
        direction: 'right',
        length: 1
    }, food = {x:0,y:0};
    createGrid();
    $(food).addClass('food');
    $("[data-x='" + snake.position.x + "'][data-y='" + snake.position.y + "']").addClass('snake');

    if (game) {
        move(snake.direction);
        killSnake();

    }

    function createGrid() {
        for (var i = 0; i < 10; i++) {
          var row = $("<div></div>").attr('class', 'row')
            .attr('data-x', i)
            .appendTo('#container');
            for (var j = 0; j < 10; j++) {
                var cell = $("<div></div>").attr('class', 'grid')
                  .attr('data-y', j)
                  .attr('data-x', i)
                  .appendTo(row);
                grids.push({x:i, y:j});
                //$(snake.position).addClass('grid');
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
            snake.length =+ 1;
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
