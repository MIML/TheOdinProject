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
        num1 = num2 = [];
        console.log(num1);
        console.log(num2);
    });

    var operator = $('.operator'), num1 = [], num2 = [];

    function fnNum(num) {
        $(".num span").bind('click', function () {
            num.push(parseFloat(this.innerText));
            $('#display span').remove('');
            $('#display').append('<span>' + num.join('') + '</span>');
        });
    }


    fnNum(num1);
    operator.click(function () {
        fnNum(num2);
    });

    // display calculation result
    $('.calculate').click(function () {
        $('#display span').remove('');
        $('#display').append('<span>' + (num1 + num2) + '</span>');
    });


    function calculation(x, y) {
        switch ($(this).operator) {

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
