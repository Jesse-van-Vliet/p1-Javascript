let budget = 100;
let product = prompt("Hoeveel kost het product dat je wilt kopen?");
let moneyy = document.getElementById("money");



if (budget < product) {
    console.log("Helaas, te weinig geld!");
    moneyy.innerText = "Helaas , te weinig geld!"
    moneyy.style.color = "red"



} else {
  console.log ("U heeft genoeg geld!") 
  moneyy.innerText = "U heeft genoeg geld!"
  moneyy.style.color = "green"
}

