import Level from './levels';

let level = new Level();
const userInput = document.getElementById('css-input');
const enterButton = document.getElementById('enter-button');

level.level1();

enterButton.addEventListener("click", () => {
  userInput.value = "";
});

userInput.addEventListener("keypress", event => {
  if (event.keyCode === 13) {

  }
});

const images = document.querySelector('.gym-bench');
Array.from(images.children).forEach(child => {
  child.addEventListener("mouseover", () => console.log("hi"));
});
