const level = document.getElementById('level');
const levelDescription = document.getElementById('level-description');
const levelHTML = document.getElementById('html-viewer');
const selectorInstruction = document.getElementById('selector-title');
const levelImages = document.getElementById('selector-images');
const nextButton = document.querySelector('.fa-arrow-circle-right');
const prevButton = document.querySelector('.fa-arrow-circle-left');
const gymBench = document.querySelector('.gym-bench');

class Level {

  constructor(levelNo) {
    this.currentSelector = "";
    this.level = levelNo;
  }

  goToLevel(levelNo) {
    level.innerHTML = `Level ${levelNo} of ?`;
    nextButton.classList.remove('disabled');
    prevButton.classList.remove('disabled');
    if (levelNo === 1) {
      prevButton.classList.add('disabled');
      this.currentSelector = "dumbbell";
      selectorInstruction.innerHTML = "Select the dumbbells";
      levelDescription.innerHTML = "BASIC SELECTORS<br />Type Selectors<br />This basic selector chooses all elements that match the given <i>name</i>.<br />Syntax<br /><code>element { style properties }</code><br />CSS<br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";
      gymBench.innerHTML = "<dumbbell></dumbbell><dumbbell></dumbbell>";
    }
    if (levelNo === 2) {
      this.currentSelector = ".small";
      selectorInstruction.innerHTML = "Select the small dumbbell";
      levelDescription.innerHTML = 'BASIC SELECTORS<br />Class Selectors<br />In an HTML document, CSS class selectors match an element based on the contents of the element\'s class attribute. The class attribute is defined as a space-separated list of items, and one of those items must match exactly the class name given in the selector.<br />Syntax<br /><code>.classname { style properties }</code><br />CSS<br /><code>span.classy {<br /><code-indent>background-color: DodgerBlue;</code-indent><br />}</code><br />HTML<br /><code>&#60;span class="classy">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code>';
      gymBench.innerHTML = '<dumbbell></dumbbell><dumbbell class="small"></dumbbell>';
    }
    if (levelNo === 3) {
      this.currentSelector = "#orange";
    }
    if (levelNo === 4) {

    }
    if (levelNo === 5) {
      nextButton.classList.add('disabled');
    }
    document.querySelectorAll(this.currentSelector)
      .forEach(el => el.classList.add('strobe'));
  }

}

export default Level;
