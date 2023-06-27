const Character = require("./Character");

class Thief extends Character {
  constructor(name, life, power, def) {
    super(name, life, power, def);
  }

  attack(target) {
    target.life -= (this.power - target.def) * 2;
  }
}

module.exports = Thief;
