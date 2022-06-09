

var numofdrums = document.querySelectorAll(".drum").length;

for(var i=0;i<numofdrums;i++){

  // to detect button press
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerhtml = this.innerHTML;
    makesound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
  })

  //to detect keyboard press
  document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
  })

}

//to make sound
function makesound(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case 'j':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'k':
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    case 'l':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:console.log(buttonInnerhtml);
    break;
  }
}

//to add animation
function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}
