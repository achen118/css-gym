import Level from './levels';

const level = new Level();
const userInput = document.getElementById('css-input');
const enterButton = document.getElementById('enter-button');
const editors = document.getElementById('editors-container');
const nextButton = document.querySelector('.fa-arrow-circle-right');
const prevButton = document.querySelector('.fa-arrow-circle-left');
const hamburger = document.querySelector('.fa-bars');
const levelDropdown = document.querySelector('.level-dropdown');

level.goToLevel(1);
userInput.focus();

let currentSelector = level.currentSelector;
let currentLevel = level.level;

setInterval(() => {
  userInput.classList.toggle('input-flash');
}, 300);

enterButton.addEventListener("click", () => {
  enterButton.classList.remove('pressEnter');
  enterButton.classList.add('pressEnter');
  editors.classList.remove('shake');
  if (isLevelNumber(userInput.value)) {
    level.goToLevel(parseInt(userInput.value));
    currentLevel = level.level;
    currentSelector = level.currentSelector;
  } else {
    checkSelector(userInput.value);
  }
  userInput.value = "";
  userInput.focus();
});

userInput.addEventListener("keypress", event => {
  enterButton.classList.remove('pressEnter');
  editors.classList.remove('shake');
  if (event.keyCode === 13) {
    enterButton.classList.add('pressEnter');
    if (isLevelNumber(userInput.value)) {
      level.goToLevel(parseInt(userInput.value));
      currentLevel = level.level;
      currentSelector = level.currentSelector;
    } else {
      checkSelector(userInput.value);
    }
    userInput.value = "";
  }
});

const checkSelector = input => {
  if (input === currentSelector) {
    document.querySelectorAll(currentSelector).forEach(el => el.classList.add('correct'));
    setTimeout(() => {
      currentLevel += 1;
      level.goToLevel(currentLevel);
      currentSelector = level.currentSelector;
      hoverSelector();
    }, 500);
  } else {
    document.getElementById('editors-container').classList.add('shake');
  }
};

const hoverSelector = () => {
  document.querySelectorAll(currentSelector).forEach(el => {
    el.addEventListener("mouseover", event => {
      console.log(event.target);
    });
  });
};

hoverSelector();


const isLevelNumber = input => {
  const levelInt = parseInt(input);
  if (levelInt >= 1 && levelInt <= 5) {
    return true;
  }
};

nextButton.addEventListener("click", () => {
  if (currentLevel < 5) {
    currentLevel += 1;
    level.goToLevel(currentLevel);
    currentSelector = level.currentSelector;
  }
});

prevButton.addEventListener("click", () => {
  if (currentLevel > 1) {
    currentLevel -= 1;
    level.goToLevel(currentLevel);
    currentSelector = level.currentSelector;
  }
});

hamburger.addEventListener("click", () => {
  levelDropdown.classList.toggle('show');
});

document.addEventListener("click", event => {
  if (event.target !== hamburger) {
    levelDropdown.classList.remove("show");
  }
});

document.querySelector('.level1')
  .addEventListener("click", () => {
    level.goToLevel(1);
    currentLevel = 1;
  });

document.querySelector('.level2')
  .addEventListener("click", () => {
    level.goToLevel(2);
    currentLevel = 2;
  });

document.querySelector('.level3')
  .addEventListener("click", () => {
    level.goToLevel(3);
    currentLevel = 3;
  });

document.querySelector('.level4')
  .addEventListener("click", () => {
    level.goToLevel(4);
    currentLevel = 4;
  });

document.querySelector('.level5')
  .addEventListener("click", () => {
    level.goToLevel(5);
    currentLevel = 5;
  });
