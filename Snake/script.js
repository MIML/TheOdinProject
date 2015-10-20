$(function () {

    var grids = [];
    var snake = {
        position: { x: 0, y: 0 },
        direction: 'right',
        length: 1
    }, food = { x: 0, y: 0 };

    $('#start').click(function () {
        createGrid();
        $("[data-x='" + snake.position.x + "'][data-y='" + snake.position.y + "']").addClass('snake').css({ 'left': snake.position.x * 10, 'top': snake.position.y * 10 });
        newFood();

    });
    $('#over').click(function () {
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
        $(window).keydown(function (e) {
            switch (e.which) {
                case 37:
                    dir = 'left';
                    break;
                case 38:
                    dir = 'top';
                    break;
                case 39:
                    dir = 'right';
                    break;
                case 40:
                    dir = 'down';
                    break;
                default:
                    return;
            }
            e.preventDefault();
        });

        var animation = {};
        switch (dir) {
            case 'left':
                animation[dir] = '-=10px';
                snake.position.x -= 1;
                break;
            case 'right':
                animation['left'] = '+=10px';
                snake.position.x += 1;
                if ((snake.position.x > 9) || (snake.position.x < 0 )) {
                    location.reload();
                }
                break;
            case 'top':
                animation[dir] = '=10px';
                snake.position.y += 1;
                break;
            case 'down':
                animation['top'] = '+=10px';
                snake.position.x -= 1;
                break;
            default:
                return;
        }

        eatFood();

        $('.snake').animate(animation, 2000, function () {
            console.log('snake:' + snake.position);
            console.log(food);
            move(dir);
        });
    }

    function newFood() {
        $("[data-x='" + food.x + "'][data-y='" + food.y + "']").addClass('food');
        $('.grid').removeClass('food');
        food.x = Math.floor(Math.random() * 10) + 1;
        food.y = Math.floor(Math.random() * 10) + 1;

        $("[data-x='" + food.x + "'][data-y='" + food.y + "']").addClass('food');
    }

    // when the snake location === food location, snake's size ++
    function eatFood() {
        if ((snake.position.x == food.x) && (snake.position.y == food.y)) {
            snake.length += 1;
            newFood();
        }
    }

    function killSnake() {
        // when the snake hits the boundary of the grid
        if ((snake.position.x == 0) || (snake.position.y == 0)) {
            
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


});
