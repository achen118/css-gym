const level = document.getElementById('level');
const levelDescription = document.getElementById('level-description');
const levelHTML = document.getElementById('html-viewer');
const levelImages = document.getElementById('selector-images');

class Level {

  constructor() {

  }

  level1() {
    level.innerHTML = "Level 1 of ?";
    levelDescription.innerHTML = "BASIC SELECTORS<br />Type Selectors<br />Summary<br />This basic selector chooses all elements that match the given <i>name</i>.<br />Syntax<br /><code>element { style properties }</code><br />CSS<br /><code>span {<br /><code-indent>  background-color: DodgerBlue;<br />  color: #ffffff;</code-indent><br />}</code>";

  }

}

export default Level;
