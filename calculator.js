"use strict"

var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

   
});


function greet() {
    var now = new Date().getHours();
    var greeting;

    if (now < 12) {
        greeting = "Good morning !";
    } else if (now < 18) {
        greeting = "Good afternoon !";
    } else {
        greeting = "Good evening !";
    }

    window.alert  (greeting +" Here is a simple calculator to help you perform simple arithmetic calculations");

}
greet();


// document.getElementById('equal').addEventListener('click', function() {
//     var result = eval(document.getElementById('display').value);
//     document.getElementById('display').value += ' = ' + result;
// });
document.getElementById('equal').addEventListener('click', function() {
    var input = document.getElementById('display');
    try {
        var result = eval(input.value);
        if (isNaN(result)) {
            input.value = 'Error: Invalid Expression';
        } else {
            input.value +result;
        }
    } catch (e) {
        input.value = 'Error: Invalid Expression';
    }
});
