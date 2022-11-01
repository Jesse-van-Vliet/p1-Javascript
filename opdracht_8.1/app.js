let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let h1 = document.getElementById("h1");
let answer;

function division(){
    if (num1.value <= 0 || num2.value <= 0) {
        h1.innerText = "Het getal is te laag"
    }
    
    else {
        answer = +num1.value / +num2.value;
    h1.innerText = num1.value + " : " + num2.value + " = " + answer;

    } 
}


function plus(){
    if (num1.value <= 0 || num2.value <= 0) {
        h1.innerText = "Het getal is te laag"
    }

    else  {
        answer = +num1.value + +num2.value;
        h1.innerText = num1.value + " + " + num2.value + " = " + answer;
    }


}

function minus(){

    if (num1.value <= 0 || num2.value <= 0) {
        h1.innerText = "Het getal is te laag"
    }

    else {
        answer = +num1.value - +num2.value;
    h1.innerText = num1.value + " - " + num2.value + " = " + answer;

    }

    


}

function times(){

    if (num1.value <= 0 || num2.value <= 0) {
        h1.innerText = "Het getal is te laag"
    }

    else {
        answer = +num1.value * +num2.value;
    h1.innerText = num1.value + " x " + num2.value + " = " + answer;

    }

    

}