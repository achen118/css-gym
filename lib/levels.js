const level = document.getElementById('level');
const levelDescription = document.getElementById('level-description');
const levelHTML = document.getElementById('html-viewer');
const levelImages = document.getElementById('selector-images');

class Level {

  constructor(levelNo) {
    this.currentSelector = "";
    this.level = levelNo;
  }

  goToLevel(levelNo) {
    if (levelNo === 1) {
      level.innerHTML = "Level 1 of ?";
      levelDescription.innerHTML = "BASIC SELECTORS<br />Type Selectors<br />Summary<br />This basic selector chooses all elements that match the given <i>name</i>.<br />Syntax<br /><code>element { style properties }</code><br />CSS<br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";
      this.currentSelector = "dumbbell";
    }
    if (levelNo === 2) {
      this.currentSelector = ".kettlebell";
    }
    if (levelNo === 3) {
      this.currentSelector = "#orange";
    }
    if (levelNo === 4) {

    }
    if (levelNo === 5) {

    }
  }

}

export default Level;
