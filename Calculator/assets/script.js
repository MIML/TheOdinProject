$(function () {

    replaceThisTo("#division span", '/', '÷');
    replaceThisTo('#multiplication span', '*', 'x');

    function replaceThisTo(selection, before, after) {
        $(selection).text(function (index, text) {
            return text.replace(before, after);
        });
    }

    $('.reset').click(function () {
        $('#display span').remove('');
        $('#display').append('<span>0</span>');
    });

    $('.off').click(function () {
        $('#display span').remove('');
        myArray = [];
    });

    var myArray = [];

    // a whole num - before the operator pressed
    $(".keypad span").bind('click', function () {
        myArray.push(this.innerText);
        console.log(myArray);
        $('#display').append('<span>' + myArray + '</span>');
    });


    // display calculation result
    $('.calculate').click(function () {
        calculation(x, y);
    });


    function calculation(x, y) {
        switch (operator) {
            case '+':
                return x + y;
                break;
            case '-':
                return x - y;
                break;
            case '*':
                return x * y;
                break;
            case '/':
                return x / y;
                break;
            default:
                return 0;
        }
    }


});
