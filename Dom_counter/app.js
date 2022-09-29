let button = document.getElementById("button"); 
let count = 0;
let number = document.getElementById("number")


function upcount() {
count += 1; 
number.innerText = count + " keer op geclicked"
number.style.background = "blue"
console.log(count)
}

function downcount() {
    count -= 1;
    number.innerText = count + " keer op geclikced"
    number.style.background = "red"
    console.log(count)
    
}

