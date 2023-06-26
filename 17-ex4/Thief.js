class thief extends Character {
  constructor(name, life, power, def) {
    super(life, power, def);
  }

  attack(target) {
    let damage = (this.attack - target.def) * 2;
    super.attack(target);
  }
}
