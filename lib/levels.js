const level = document.querySelector('.level');
const levelDescription = document.querySelector('.level-description');
const levelHTML = document.querySelector('.html-viewer');
const selectorInstruction = document.querySelector('.selector-title');
const levelImages = document.querySelector('.selector-images');
const nextButton = document.querySelector('.fa-arrow-circle-right');
const prevButton = document.querySelector('.fa-arrow-circle-left');
const gymBench = document.querySelector('.gym-bench');

class Level {

  constructor() {
    this.currentSelector = "";
    this.level = "";
    this.mark = "";
  }

  goToLevel(levelNo) {
    level.innerHTML = `Level ${levelNo} of 5`;
    nextButton.classList.remove('disabled');
    prevButton.classList.remove('disabled');
    if (levelNo === 1) {
      prevButton.classList.add('disabled');
      this.currentSelector = "dumbbell";
      this.level = 1;
      selectorInstruction.innerHTML = "Select the dumbbells";
      levelDescription.innerHTML = "<h4>BASIC SELECTORS:<br />Type Selectors</h4><br />This basic selector chooses all elements that match the given <i>name</i>.<br /><br /><h5>Syntax</h5><br /><code>element { style properties }</code><br /><h5>CSS</h5><br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";
      gymBench.innerHTML = "\n  <dumbbell></dumbbell>\n  <dumbbell></dumbbell>\n";
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
    }
    if (levelNo === 2) {
      this.currentSelector = "#orange";
      this.level = 2;
      selectorInstruction.innerHTML = "Select the orange dumbbell";
      levelDescription.innerHTML = '<h4>BASIC SELECTORS<br />ID Selectors</h4><br />This basic selector chooses nodes based on the value of its id attribute. There should be only one element with a given ID in a document.<br /><br /><h5>Syntax</h5><br /><code>#id_value { style properties }  </code><br /><h5>CSS</h5><br /><code>span#identified {<br /><code-indent>  background-color: DodgerBlue;</code-indent><br />}</code><br /><h5>HTML</h5><br /><code>&#60;span id="identified">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code>';
      gymBench.innerHTML = '\n  <dumbbell></dumbbell>\n  <dumbbell id="orange"></dumbbell>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
    }
    if (levelNo === 3) {
      this.currentSelector = ".small";
      this.level = 3;
      selectorInstruction.innerHTML = "Select the small dumbbell";
      levelDescription.innerHTML = '<h4>BASIC SELECTORS<br />Class Selectors</h4><br />This basic selector chooses elements based on the value of their class attribute.<br /><br /><h5>Syntax</h5><br /><code>.classname { style properties }</code><br /><h5>CSS</h5><br /><code>span.classy {<br /><code-indent>  background-color: DodgerBlue;</code-indent><br />}</code><br /><h5>HTML</h5><br /><code>&#60;span class="classy">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code>';
      gymBench.innerHTML = '\n  <dumbbell></dumbbell>\n  <dumbbell class="small"></dumbbell>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      document.querySelectorAll(this.currentSelector).forEach(el => el.classList.add('dumbell-hover'));
    }
    if (levelNo === 4) {
      this.currentSelector = "dumbbell + kettlebell";
      this.level = 4;
      this.mark = document.querySelector('mark[name="kettlebell"]');
      selectorInstruction.innerHTML = "Select every kettlebell that's next to a dumbbell";
      gymBench.innerHTML = '\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <kettlebell></kettlebell>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      document.querySelectorAll('dumbbell').forEach(el => el.classList.add('move-left'));
    }
    if (levelNo === 5) {
      nextButton.classList.add('disabled');
      this.level = 5;
    }
    document.querySelectorAll('move-left').forEach(el => el.classList.remove('move-left'));
    document.querySelectorAll(this.currentSelector)
      .forEach(el => el.classList.add('strobe'));
    document.querySelectorAll('dumbbell').forEach(el => el.classList.add('dumbell-hover'));
    this.hoverSelector();
  }

  hoverSelector() {
    Array.from(gymBench.children).forEach(el => {
      el.addEventListener("mouseenter", event => {
        if (el.tagName === "DUMBBELL") {
          if (el.classList.contains("small")) {
            this.mark = document.querySelector('mark[name="small"]');
          } else if (el.id === "orange") {
            this.mark = document.querySelector('mark[name="orange"]');
          } else {
            this.mark = document.querySelector('mark[name="dumbbell"]');
          }
        }
        if (el.tagName === "KETTLEBELL") {
          this.mark = document.querySelector('mark[name="kettlebell"]');
        }
        this.mark.classList.add('visible');
      });
      el.addEventListener("mouseout", event => {
        this.mark.classList.remove('visible');
      });
    });
  }

}

export default Level;
