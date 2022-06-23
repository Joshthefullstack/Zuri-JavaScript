// var firstNumber = 12;
// var secondNumber = 22;
// var result;

// result = firstNumber + secondNumber;
// console.log(result);

var firstNumber = window.prompt("Enter your first number: ");
var secondNumber = window.prompt("Enter your second number: ");
var operand = window.prompt("Enter your operand: ");
// var result;

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

if (operand == "+")
    alert(firstNumber + secondNumber);
else if (operand == "-")
    alert (firstNumber - secondNumber);
else if (operand == "*")
    alert (firstNumber * secondNumber);
else if (operand == "/")
    alert (firstNumber / secondNumber);
else
    alert ("Invalid operator");