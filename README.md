# CSS Gym - Exercise Your Knowledge of CSS Selectors
[CSS Gym live](https://achen118.github.io/css-gym/)

CSS Gym is a CSS tutorial inspired by CSS Diner. Consisting of 5 levels, each level provides a lesson on how to use basic CSS selectors.

![Screenshot](http://res.cloudinary.com/malice/image/upload/v1503532237/AwesomeScreenshot-2017-08-23T23-46-37-067Z_vibo4k.gif)

## Technologies Used
- [ ] Vanilla JavaScript
- [ ] HTML
- [ ] CSS
- [ ] Webpack

## Features

### Levels

- Level 1: Type Selectors - Select the dumbbells

- Level 2: ID Selectors - Select the orange dumbbell

- Level 3: Class Selectors - Select the small dumbbell

- Level 4: Adjacent Sibling Selectors - Select every kettlebell that's next to a dumbbell

- Level 5: Child Selectors - Select the kettlebell directly on a step

### Navigation Between Levels

- Inputting the correct CSS selector into the CSS Editor will advance you to the next level:
![Advance From Level 1 to 2](http://res.cloudinary.com/malice/image/upload/v1504805638/AwesomeScreenshot-2017-09-07T17-31-41-181Z_tuonav.gif)

- Inputting a valid level number into the CSS Editor will allow you to skip between levels
- Opening the hamburger menu in the sidebar will allow you to select a specific level to jump to
- Clicking the arrow icons in the sidebar will take you through the different levels (arrow icon will be disabled when there are no more levels in that direction)

### Sidebar

## Implementation

### Checking User Input

```javascript
// On enter keypress:
userInput.addEventListener("keypress", event => {
  document.querySelector('.selector-title').classList.remove('fadein');
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

// Checks to see if the user input is the correct CSS selector for the current level
// If correct, user is sent to the next level
// If incorrect, shake animation is applied
const checkSelector = input => {
  document.querySelector('.selector-title').classList.remove('fadein');
  if (input === currentSelector) {
    if (currentLevel === 5) {
      const gymBench = document.querySelector('.gym-bench');
      Array.from(gymBench.children).forEach(el => el.classList.add('correct'));
      document.querySelector('.winner').classList.add('visible');
    } else {
      document.querySelectorAll(currentSelector).forEach(el => el.classList.add('correct'));
      setTimeout(() => {
        currentLevel += 1;
        level.goToLevel(currentLevel);
        currentSelector = level.currentSelector;
      }, 500);
    }
  } else {
    document.querySelector('.editors-container').classList.add('shake');
  }
};

// Checks to see if a level number was inputted into the CSS Editor
const isLevelNumber = input => {
  const levelInt = parseInt(input);
  if (levelInt >= 1 && levelInt <= 5) {
    return true;
  }
};
```

### Level Specific DOM Manipulation

```javascript
// HTML is injected depending on the current level number
if (levelNo === 1) {
    this.currentSelector = "dumbbell";
    this.level = 1;
    selectorInstruction.innerHTML = "Select the<br />dumbbells";
    levelDescription.innerHTML = "<h4>BASIC SELECTORS:<br /><br />Type Selectors</h4><br />This basic selector chooses all elements that match the given <i>name</i>.<br /><br /><h5>Syntax</h5><br /><code>element { style properties }</code><br /><h5>CSS</h5><br /><code>span {<br />  background-color: DodgerBlue;<br />  color: #ffffff;<br />}</code><br /><h5>Result</h5><br /><code><span1>Here's a span with some text.</span1><p>Here's a p with some text.</p><span1>Here's a span with more text.</span1></code>";
    gymBench.innerHTML = "\n  <dumbbell></dumbbell>\n  <dumbbell></dumbbell>\n";
    levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
}
```

## Future Directions for the Project

In addition to the features already implemented in CSS Gym, outlined below are the following steps I plan to take as I continue working on this project:

### Additional Levels & Gym Equipment
### More Detailed Hints

Currently, CSS Gym provides hints as you hover over specific gym equipment. These hints display the current CSS selector of the gym item that is being moused over. As I continue to work on CSS Gym, I plan to implement more detailed hints, most likely as pop-up modals, that will be available if a user needs additional help to pass a level.
