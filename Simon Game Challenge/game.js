var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var user_Chosenbtn=$(this).attr("id");
  userClickedPattern.push(user_Chosenbtn);

  playSound(user_Chosenbtn);
  animatePress(user_Chosenbtn);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var sound = new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function nextSequence(){
  userClickedPattern = [];
  var rn_Number = Math.floor(Math.random() * 4);
  var rn_ChosenColour = buttonColours[rn_Number];
  gamePattern.push(rn_ChosenColour);
  $("#"+rn_ChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(rn_ChosenColour);
  level++;
  $("#level-title").text("Level " + level);
}

function playSound(name){
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  level = 0;
}
