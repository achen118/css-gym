const level = document.getElementById('level');
const levelDescription = document.getElementById('level-description');
const levelHTML = document.getElementById('html-viewer');
const selectorInstruction = document.getElementById('selector-title');
const levelImages = document.getElementById('selector-images');
const nextButton = document.querySelector('.fa-arrow-circle-right');
const prevButton = document.querySelector('.fa-arrow-circle-left');
const gymBench = document.querySelector('.gym-bench');

class Level {

  constructor() {
    this.currentSelector = "";
    this.level = "";
  }

  goToLevel(levelNo) {
    level.innerHTML = `Level ${levelNo} of ?`;
    nextButton.classList.remove('disabled');
    prevButton.classList.remove('disabled');
    if (levelNo === 1) {
      prevButton.classList.add('disabled');
      this.currentSelector = "dumbbell";
      this.level = 1;
      selectorInstruction.innerHTML = "Select the dumbbells";
      levelDescription.innerHTML = "BASIC SELECTORS<br />Type Selectors<br />This basic selector chooses all elements that match the given <i>name</i>.<br />Syntax<br /><code>element { style properties }</code><br />CSS<br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";
      gymBench.innerHTML = "\n  <dumbbell></dumbbell>\n  <dumbbell></dumbbell>\n";
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      document.querySelectorAll(this.currentSelector).forEach(el => el.classList.add('dumbell-hover'));
    }
    if (levelNo === 2) {
      this.currentSelector = "#orange";
      this.level = 2;
      selectorInstruction.innerHTML = "Select the orange dumbbell";
      levelDescription.innerHTML = 'BASIC SELECTORS<br />ID Selectors<br />This basic selector chooses nodes based on the value of its id attribute. There should be only one element with a given ID in a document.<br />Syntax<br /><code>#id_value { style properties }  </code><br />CSS<br /><code>span#identified {<br /><code-indent>  background-color: DodgerBlue;</code-indent><br />}</code><br />HTML<br /><code>&#60;span id="identified">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code>';
      gymBench.innerHTML = '<dumbbell></dumbbell><dumbbell id="orange"></dumbbell>';
    }
    if (levelNo === 3) {
      this.currentSelector = ".small";
      this.level = 3;
      selectorInstruction.innerHTML = "Select the small dumbbell";
      levelDescription.innerHTML = 'BASIC SELECTORS<br />Class Selectors<br />This basic selector chooses elements based on the value of their class attribute.<br />Syntax<br /><code>.classname { style properties }</code><br />CSS<br /><code>span.classy {<br /><code-indent>  background-color: DodgerBlue;</code-indent><br />}</code><br />HTML<br /><code>&#60;span class="classy">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code>';
      gymBench.innerHTML = '<dumbbell></dumbbell><dumbbell class="small"></dumbbell>';
    }
    if (levelNo === 4) {
      this.level = 4;

    }
    if (levelNo === 5) {
      nextButton.classList.add('disabled');
      this.level = 5;
    }
    document.querySelectorAll(this.currentSelector)
      .forEach(el => el.classList.add('strobe'));
  }

}

export default Level;
