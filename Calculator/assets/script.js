$(function () {

    // replaceThisTo("#division span", '/', '÷');
    // replaceThisTo('#multiplication span', '*', 'x');

    // function replaceThisTo(selection, before, after) {
    //     $(selection).text(function (index, text) {
    //         return text.replace(before, after);
    //     });
    // }

    $('.reset').click(function () {
        $('#display span').remove('');
        $('#display').append('<span>0</span>');
    });

    $('.off').click(function () {
        $('#display span').remove('');
        num1 = num2 = [];
    });

    var operator = $('.operator'), num1 = [], num2 = [];
    var operation = [];

    // function fnNum(num) {
    //     $(".num").bind('click', function () {
    //         num.push(parseFloat(this.innerText));

    //         $('#display').append('<span>' + this.innerText + '</span>');
    //     });
    // }



    var expression = [0];

    function evaluate(newTerm) {

        var text = 'hello';

        var len = expression.length;

        var lastItem = expression[len - 1];

        if (newTerm.type === 'number' && typeof lastItem === 'number') {

            lastItem = parseInt((lastItem.toString() + newTerm.value), 10);
            expression[len - 1] = lastItem;
            text = lastItem;
            console.log(text);

        } else if (newTerm.type === 'number' && typeof lastItem === 'string') {



        } else if (newTerm.type === 'operation' && typeof lastItem === 'number') {

            lastItem = newTerm.value;
            if(lastItem === 'add'){
                
            }else if(lastItem === 'subtract'){

            }else if(lastItem === 'divide'){

            }else if(lastItem === 'multiply'){

            }

        } else if (newTerm.type === 'operation' && typeof lastItem === 'string') {

        }

        $('#display span').text(text);
    }

    $('.keypad').click(function(){
        var $key = $(this);

        var term = {
            type: $key.attr('data-keytype'),
            value: $key.attr('data-value')
        };



        evaluate(term);

    });














    // fnNum(num1);
    // operator.click(function () {
    //     console.log(operator);
    //     $('#display').append('<span>' + this.innerText + '</span>');
    //     // fnNum(num2);
    // });

    // // display calculation result
    // $('.calculate').click(function () {
    //     $('#display span').remove('');
    //     $('#display').append('<span>' + (num1 + num2) + '</span>');
    // });


    // function calculation(x, y) {
    //     switch ($(this).operator) {

    //         case '+':
    //             return x + y;
    //             break;
    //         case '-':
    //             return x - y;
    //             break;
    //         case '*':
    //             return x * y;
    //             break;
    //         case '/':
    //             return x / y;
    //             break;
    //         default:
    //             return 0;
    //     }
    // }


});