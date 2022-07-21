var randomNum1 = Math.ceil(Math.random() * 6);
var randomNum2 = Math.ceil(Math.random() * 6);
//alert(randomNum1 + " " + randomNum2);


var firstDice = "images/dice" + randomNum1 + ".png";
var secondDice = "images/dice" + randomNum2 + ".png";
document.querySelector(".img1").setAttribute("src",firstDice);
document.querySelector(".img2").setAttribute("src",secondDice);



if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomNum2 > randomNum1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
