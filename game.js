userClickedPattern = [];
gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence() {
  const rand = Math.floor(Math.random() * 4);
  const pickedColor = buttonColors[rand];
  gamePattern.push(pickedColor);
  console.log(gamePattern);
  $("#" + pickedColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  $("#test").on("click", function () {
    let audio = new Audio("sounds/" + pickedColor + ".mp3");
    audio.play();
  });
}
// nextSequence();
$(".btn").click(function (e) {
  const userChosenColor = $(e.target).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
