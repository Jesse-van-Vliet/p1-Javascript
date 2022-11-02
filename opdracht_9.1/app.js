


let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

let text = document.getElementById("text");


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function agecheck() {
    let age = document.getElementById("age");

    if (age.value >=18) {
        window.location.replace("https://www.youtube.com/watch?v=Be9jCJy9JVI&ab_channel=DeZoeteZusjes")
        
    }

    else {
        document.body.style.backgroundColor = "red";
        modal.style.display = "none";
        btn.style.display = "none";
        text.classList.remove("text");
        

    }
}