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
    document.querySelector('.winner').classList.remove('visible');
    if (levelNo === 1) {
      prevButton.classList.add('disabled');
      this.currentSelector = "dumbbell";
      this.level = 1;
      selectorInstruction.innerHTML = "Select the dumbbells";
      levelDescription.innerHTML = "<h4>BASIC SELECTORS:<br /><br />Type Selectors</h4><br />This basic selector chooses all elements that match the given <i>name</i>.<br /><br /><h5>Syntax</h5><br /><code>element { style properties }</code><br /><h5>CSS</h5><br /><code>span {<br />  background-color: DodgerBlue;<br />  color: #ffffff;<br />}</code><br /><h5>Result</h5><br /><code><span1>Here's a span with some text.</span1><p>Here's a p with some text.</p><span1>Here's a span with more text.</span1></code>";
      gymBench.innerHTML = "\n  <dumbbell></dumbbell>\n  <dumbbell></dumbbell>\n";
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
    }
    if (levelNo === 2) {
      this.currentSelector = "#orange";
      this.level = 2;
      selectorInstruction.innerHTML = "Select the orange dumbbell";
      levelDescription.innerHTML = '<h4>BASIC SELECTORS:<br /><br />ID Selectors</h4><br />This basic selector chooses nodes based on the value of its id attribute. There should be only one element with a given ID in a document.<br /><br /><h5>Syntax</h5><br /><code>#id_value { style properties }  </code><br /><h5>CSS</h5><br /><code>span#identified {<br />  background-color: DodgerBlue;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;span id="identified">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code><br /><h5>Results</h5><br /><code><span id="identified">Here\'s a span with some text.</span><br /><span>Here\'s another.</span></code>';
      gymBench.innerHTML = '\n  <dumbbell></dumbbell>\n  <dumbbell id="orange"></dumbbell>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
    }
    if (levelNo === 3) {
      this.currentSelector = ".small";
      this.level = 3;
      selectorInstruction.innerHTML = "Select the small dumbbell";
      levelDescription.innerHTML = '<h4>BASIC SELECTORS:<br /><br />Class Selectors</h4><br />This basic selector chooses elements based on the value of their class attribute.<br /><br /><h5>Syntax</h5><br /><code>.classname { style properties }</code><br /><h5>CSS</h5><br /><code>span.classy {<br />  background-color: DodgerBlue;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;span class="classy">Here\'s a span with some text.&#60;/span><br />&#60;span>Here\'s another.&#60;/span></code><br /><h5>Result</h5><br /><code><span>Here\'s a span with some text.</span><p>Here\'s a p with some text.</p><span>Here\'s a span with more text.</span></code><br /><h5>Results</h5><br /><code><span class="classy">Here\'s a span with some text.</span><br /><span>Here\'s another.</span></code>';
      gymBench.innerHTML = '\n  <dumbbell></dumbbell>\n  <dumbbell class="small"></dumbbell>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      document.querySelectorAll(this.currentSelector).forEach(el => el.classList.add('dumbell-hover'));
    }
    if (levelNo === 4) {
      this.currentSelector = "dumbbell + kettlebell";
      this.level = 4;
      selectorInstruction.innerHTML = "Select every kettlebell that's next to a dumbbell";
      levelDescription.innerHTML = '<h4>COMBINATORS:<br /><br />Adjacent Sibling Selectors</h4><br />The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.<br /><br /><h5>Syntax</h5><br /><code>former_element + target_element { style properties }</code><br /><h5>CSS</h5><br /><code>li:first-of-type + li {<br />  color: red;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;ul><br />  &#60;li>One</li><br />  &#60;li>Two!</li><br />  &#60;li>Three</li><br />&#60;/ul></code><br /><h5>Results</h5><br /><code><ul><li4>One</li4>\n<li4>Two!</li4>\n<li4>Three</li4></ul>';
      gymBench.innerHTML = '\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <kettlebell></kettlebell>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      document.querySelectorAll('dumbbell').forEach(el => el.classList.add('move-left'));
    }
    if (levelNo === 5) {
      nextButton.classList.add('disabled');
      this.currentSelector = "step > kettlebell";
      this.level = 5;
      selectorInstruction.innerHTML = "Select the kettlebell directly on a step";
      levelDescription.innerHTML = "<h4>COMBINATORS:<br /><br />Child Selectors</h4><br />The child combinator (>) separates two selectors and matches only those elements matched by the second selector that are children of elements matched by the first.<br /><br /><h5>Syntax</h5><br /><code>selector1 > selector2 { style properties }</code><br /><h5>CSS</h5><br /><code>span { background-color: white; }<br />div > span {<br />  background-color: DodgerBlue;<br />}</code><br /><h5>HTML</h5><br /><code>&#60;div><br />  &#60;span>Span #1, in the div.<br />    &#60;span>Span #2, in the span that's in the div.&#60;/span><br />  &#60;/span><br />&#60;/div><br />&#60;span>Span #3, not in the div at all.&#60;/span></code><br /><h5>Result</h5><br /><code><div><span5>Span #1, in the div.<span5>Span #2, in the span5 that's in the div.</span5></span5></div><span5>Span #3, not in the div at all.</span5></code>";
      gymBench.innerHTML = '\n  <dumbbell class="small"></dumbbell>\n  <kettlebell></kettlebell>\n  <dumbbell class="small"></dumbbell>\n  <step>\n    <kettlebell></kettlebell>\n  </step>\n';
      levelHTML.innerHTML = document.querySelector('.gym-bench').outerHTML;
      document.querySelectorAll('dumbbell').forEach(el => el.classList.add('move-left'));
    }
    document.querySelectorAll('move-left').forEach(el => el.classList.remove('move-left'));
    document.querySelectorAll(this.currentSelector)
      .forEach(el => el.classList.add('strobe'));
    document.querySelectorAll('dumbbell').forEach(el => el.classList.add('dumbell-hover'));
    this.hoverSelector();
  }

  hoverSelector() {
      document.addEventListener("mouseover", event => {
        const visibleMark = document.querySelector('mark.visible');
        if (visibleMark) {
          visibleMark.classList.remove('visible');
        }
        if (event.target.tagName === "DUMBBELL") {
          if (event.target.classList.contains("small")) {
            this.mark = document.querySelector('mark[name="small"]');
          } else if (event.target.id === "orange") {
            this.mark = document.querySelector('mark[name="orange"]');
          } else {
            this.mark = document.querySelector('mark[name="dumbbell"]');
          }
        }
        if (event.target.tagName === "KETTLEBELL") {
          this.mark = document.querySelector('mark[name="kettlebell"]');
        }
        if (event.target.tagName === "STEP") {
          if (event.target.tagName === "KETTLEBELL") {
            this.mark = document.querySelector('mark[name="kettlebell"]');

          }
          this.mark = document.querySelector('mark[name="step"]');
        }
        if (this.mark) {
          this.mark.classList.add('visible');
        }
      });
      document.addEventListener("mouseover", event => {
        const tagNames = ["DUMBBELL", "KETTLEBELL", "STEP"];
        if (!tagNames.includes(event.target.tagName)) {
          document.querySelectorAll('mark.visible').forEach(el => el.classList.remove('visible'));
        }
      });
  }

}

export default Level;
