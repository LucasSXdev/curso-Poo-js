class Warrior extends Character {
  constructor(name, life, power, def, shield, position) {
    super(name, life, power, def);
    this.shield = shield;
    this.position = position;
  }

  attack(target) {
    if (this.position === "Ataque") {
      super.attack(target);
    } else {
      this.def += this.shield;
    }
  }

  getPosition(position) {
    this.position = position;
    this.attack();
  }
}
