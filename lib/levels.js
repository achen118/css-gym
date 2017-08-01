const level = document.getElementById('level');
const levelDescription = document.getElementById('level-description');

class Level {

  constructor() {

  }

  level1() {
    level.innerHTML = "Level 1";
    levelDescription.innerHTML = "Level 1 Description";
  }

}

export default Level;
