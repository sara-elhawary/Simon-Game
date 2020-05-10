gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence() {
  const rand = Math.floor(Math.random() * 4);
  const pickedColor = buttonColors[rand];
  gamePattern.push(pickedColor);
  console.log(gamePattern);
}

nextSequence();
