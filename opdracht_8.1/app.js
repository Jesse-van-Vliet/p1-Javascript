let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let h1 = document.getElementById("h1");
let answer;

function division(){
    console.log("Het werkt");

    answer = +num1.value / +num2.value;
    h1.innerText = num1.value + " : " + num2.value + " = " + answer;


}

function plus(){

    answer = +num1.value + +num2.value;
    h1.innerText = num1.value + " + " + num2.value + " = " + answer;


}

function minus(){

    answer = +num1.value - +num2.value;
    h1.innerText = num1.value + " - " + num2.value + " = " + answer;


}

function times(){

    answer = +num1.value * +num2.value;
    h1.innerText = num1.value + " x " + num2.value + " = " + answer;


}