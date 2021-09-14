operation();


function operation(){
    let btn = document.querySelectorAll("button");
    console.log(btn);
    btn[0].addEventListener("click",add);
    btn[1].addEventListener("click",subtract);
    btn[2].addEventListener("click",multiply);
    btn[3].addEventListener("click",divide);
    let checkbox = document.getElementById("boxcheck");
    console.log(checkbox);
    checkbox.addEventListener("click",enableDarkMode);
}

function inputs(){
    var num1 = Number(document.getElementById("input1").value);
    var num2 = Number(document.getElementById("input2").value);

    return {num1,num2};
}

function add(){
    var input = inputs();
    let result = document.getElementById("result");

    result.innerText = input.num1 + input.num2;
}

function subtract(){
    var input = inputs();
    let result = document.getElementById("result");

    result.innerText = input.num1 - input.num2;
}

function multiply(){
    var input = inputs();
    let result = document.getElementById("result");

    result.innerText = input.num1 * input.num2;
}

function divide(){
    var input = inputs();
    let result = document.getElementById("result");

    result.innerText = input.num1 / input.num2;
}

function enableDarkMode(){
    let body = document.getElementsByTagName("body")[0];
    let button = document.querySelectorAll("button");
    let checkbox = document.getElementsByClassName("form-check")[0].childNodes[1].checked;
    body.classList.toggle("dark-mode");
    button.forEach(button=>console.log(button.classList));
    checkbox.document
    console.log(checkbox);
    checkbox ? button.forEach(button => button.classList.replace("btn-primary", "btn-light")):
    button.forEach(button => button.classList.replace("btn-light", "btn-primary"));
}