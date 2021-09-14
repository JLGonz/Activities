var operation = parseInt(prompt("Please choose an operation\n1. Add\n2. subtract\n3. multiplication\n4. divide"));
var firstNum = prompt("Input a number between 0-5(note: 0 and 5 are not included)\nFirst Number: ");
var secondNum = prompt("Second Number: ");

function add(x,y){return parseInt(x) + parseInt(y)};
function subtract(x,y){return parseInt(x) - parseInt(y)};
function divide(x,y){return parseInt(x) / parseInt(y)};
function multiply(x,y){return parseInt(x) * parseInt(y)};

switch(operation){
    case 1: alert(firstNum + '+' + secondNum + " is equal to " + add(firstNum,secondNum));break;
    case 2: alert(firstNum + '-' + secondNum + " is equal to " + subtract(firstNum,secondNum));break;
    case 3: alert(firstNum + '*' + secondNum + " is equal to " + multiply(firstNum,secondNum));break;
    case 4: alert(firstNum + '/' + secondNum + " is equal to " + divide(firstNum,secondNum));break;

};

