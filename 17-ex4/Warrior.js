const Character = require("./Character");

class Warrior extends Character {
  constructor(name, life, power, def, shield) {
    super(name, life, power, def);
    this.shield = shield;
    this.position = "Attack";
  }

  attack(target) {
    if (this.position === "Attack") {
      super.attack(target);
    }
  }

  switchPosition() {
    if (this.position === "Attack") {
      this.position = "Defense";
      this.def += this.shield;
    } else {
      this.position = "Attack";
      this.def -= this.shield;
    }
  }
}

module.exports = Warrior;
