const Character = require("./Character");

class Mage extends Character {
  constructor(name, life, power, def, mAtk) {
    super(name, life, power, def);
    this.mAtk = mAtk;
  }

  attack(target) {
    target.life -= this.power + this.mAtk - target.def;
  }

  heal(target) {
    target.life += this.mAtk * 2;
  }
}

module.exports = Mage;
