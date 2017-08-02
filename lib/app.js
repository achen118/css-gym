import Level from './levels';

let level = new Level();
const userInput = document.getElementById('css-input');
const enterButton = document.getElementById('enter-button');


level.level1();

let currentSelector = level.currentSelector;
document.querySelectorAll(currentSelector).forEach(el => el.classList.add('strobe'));

enterButton.addEventListener("click", () => {
  if (userInput.value === currentSelector) {
    console.log(document.querySelectorAll('dumbell'));
  } else {

  }
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
