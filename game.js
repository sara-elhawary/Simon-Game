userClickedPattern = [];
let level = 0;
let started = false;
gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
$(document).keypress(function () {
  if (!started) {
    nextSequence();
    $("h1").text("level " + level);
    started = true;
  }
});
function nextSequence() {
  level++;
  //   console.log(level);

  const rand = Math.floor(Math.random() * 4);
  const pickedColor = buttonColors[rand];
  gamePattern.push(pickedColor);
  console.log(gamePattern);
  $("#" + pickedColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  $("#test").on("click", function () {
    playSound(pickedColor);
  });
}
// nextSequence();
$(".btn").click(function (e) {
  const userChosenColor = $(e.target).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  //   console.log(userChosenColor);
  animatePress(userChosenColor);
  //   console.log(userClickedPattern);
});

function playSound(name) {
  const sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
