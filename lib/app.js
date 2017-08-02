import Level from './levels';

let level = new Level();
const userInput = document.getElementById('css-input');
const enterButton = document.getElementById('enter-button');
const editors = document.getElementById('editors-container');


level.level1();

let currentSelector = level.currentSelector;
document.querySelectorAll(currentSelector).forEach(el => el.classList.add('strobe'));

enterButton.addEventListener("click", () => {
  enterButton.classList.remove('pressEnter');
  enterButton.classList.add('pressEnter');
  editors.classList.remove('shake');
  checkSelector(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keypress", event => {
  enterButton.classList.remove('pressEnter');
  editors.classList.remove('shake');
  if (event.keyCode === 13) {
    enterButton.classList.add('pressEnter');
    checkSelector(userInput.value);
    userInput.value = "";
  }
});

const images = document.querySelector('.gym-bench');
Array.from(images.children).forEach(child => {
  child.addEventListener("mouseover", () => console.log("hi"));
});

const checkSelector = input => {
  if (input === currentSelector) {
    console.log(document.querySelectorAll('dumbell'));
  } else {
    document.getElementById('editors-container').classList.add('shake');
  }
};
