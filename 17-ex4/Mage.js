class Mage extends Character {
  constructor(name, life, power, def, mAtk) {
    super(name, life, power, def);
    this.mAtk = mAtk;
  }

  attack() {
    let damage = this.power + this.mAtk - target.def;
    super.attack(target);
  }

  heal(target) {
    let gainLife = this.mAtk * 2;
    console.log(`${this.name} curou ${target.name} em ${gainLife} pontos`);

    target.life = gainLife;
    console.log(`A vida atual de ${target.name} é ${target.name} `);
  }
}
