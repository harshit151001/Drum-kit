const noOfExecutions = document.querySelectorAll("button").length;
for (i = 0; i < noOfExecutions; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick() {
  var buttonClicked = this.innerHTML;
  makeSound(buttonClicked);
  animation(buttonClicked);
}
document.addEventListener("keypress", xyz);

function xyz(event) {
  makeSound(event.key);
  animation(event.key);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}
function animation(currentKey) {
  const pressed = document.querySelector(`.${currentKey}`);
  pressed.classList.add("pressed");
  pressed.addEventListener("transitionend", () => {
    pressed.classList.remove("pressed");
  });
}
