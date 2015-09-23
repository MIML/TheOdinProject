$(function () {
    var myArray = [];

    // testing
    $('.calculate').click(function () {
        $('#display').append('<span>9</span>');

    });

    $('.reset').click(function () {
        $('#display span').remove('');
        $('#display').append('<span>0</span>');
    });

    $('.off').click(function () {
        $('#display span').remove('');
    });

});
