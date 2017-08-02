const level = document.getElementById('level');
const levelDescription = document.getElementById('level-description');
const levelHTML = document.getElementById('html-viewer');
const levelImages = document.getElementById('selector-images');
const nextButton = document.querySelector('.fa-arrow-circle-right');
const prevButton = document.querySelector('.fa-arrow-circle-left');

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
      levelDescription.innerHTML = "BASIC SELECTORS<br />Type Selectors<br />Summary<br />This basic selector chooses all elements that match the given <i>name</i>.<br />Syntax<br /><code>element { style properties }</code><br />CSS<br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";
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
      nextButton.classList.add('disabled');
    }
  }

}

export default Level;
