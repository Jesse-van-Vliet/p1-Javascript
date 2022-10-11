let button = document.getElementById("button"); 
let count = 0;
let number = document.getElementById("number")


function upcount() {

if (count < 10){
  count++; 
number.innerText = count + " keer op geclicked"

}
  
else
count -= 10; 
number.innerText = count + " keer op geclicked"
console.log(count)
}

