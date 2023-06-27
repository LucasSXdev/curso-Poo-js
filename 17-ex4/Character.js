class Character {
  constructor(name, life, power, def) {
    this.name = name;
    this.life = life;
    this.power = power;
    this.def = def;
  }

  attack(target) {
    target.life -= this.attack - target.def;
  }
}

module.exports = Character;
