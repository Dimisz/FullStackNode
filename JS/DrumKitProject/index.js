var playSound = function(letter){
  switch(letter){
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/crash.mp3").play();
      break;

    default:
      console.log(this.letter);
  }
}

var playAnimation = function(key){
  var keyPressed = document.querySelector("." + key);
  keyPressed.classList.toggle("pressed");
  setTimeout(function(){
    keyPressed.classList.toggle("pressed");},
    100);
}

let buttonsArray = document.querySelectorAll(".drum");

for(var i = 0; i < buttonsArray.length; i++){
  buttonsArray[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    playAnimation(this.innerHTML);
  })
}

document.addEventListener("keydown", function(event){
  playSound(event.key);
  playAnimation(event.key);
})
