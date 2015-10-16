$(function () {

    var grids = [];
    var snake = {
        position: { x: 0, y: 0 },
        direction: 'left',
        length: 1
    }, food = { x: 0, y: 0 };

    $('#start').click(function () {
        createGrid();
        $("[data-x='" + snake.position.x + "'][data-y='" + snake.position.y + "']").addClass('snake').css({ 'left': snake.position.x * 10, 'top': snake.position.y * 10 });
        newFood();

    });
    $('#over').click(function () {
        changeDirection();
        move(snake.direction);
    });

    function createGrid() {
        for (var i = 0; i < 10; i++) {
            var row = $("<div></div>").attr('class', 'row')
            .attr('data-y', i)
            .appendTo('#container');
            for (var j = 0; j < 10; j++) {
                var cell = $("<div></div>").attr('class', 'grid')
                  .attr('data-x', j)
                  .attr('data-y', i)
                  .appendTo(row);
                grids.push({ x: j, y: i });
            }
        }
    }

    function move(dir) {
        var animation = {};
        animation[dir] = '+=10px';
        $('.snake').animate(animation, 500, 'linear', function () {
            snake.position.x += 1;
            move(dir);
            eatFood();
        });
    }

    function changeDirection() {
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
    }

    function newFood() {
        $("[data-x='" + food.x + "'][data-y='" + food.y + "']").addClass('food');
        $('.grid').removeClass('food');
        food.x = Math.floor(Math.random() * 10) + 1;
        food.y = Math.floor(Math.random() * 0) + 0;

        $("[data-x='" + food.x + "'][data-y='" + food.y + "']").addClass('food');
    }

    // when the snake location === food location, snake's size ++
    function eatFood() {
        if (snake.position.x == food.x) {
            snake.length += 1;
            newFood();
        }
    }

    function killSnake() {
        // when the snake hits the boundary of the grid
        if (snake.position.x == 0 | snake.position.y == 0) {
            createGrid();
        }
        // when the snake hits itself
        for (var i = 0; i < snake.length; i++) {
            if (snake.position == snake[i]) { // snake needs to have a big array wrapping its head and body -- this is not right
                game = false;
                createGrid();
            }
        }
    }

    function changeDirection() {
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
    }
});
