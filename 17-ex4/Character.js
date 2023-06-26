class Character {
  constructor(name, life, power, def) {
    this.name = name;
    this.life = life;
    this.power = power;
    this.def = def;
  }

  attack(target) {
    console.log(`${this.name},está atacando ${target.name}`);

    let damage = this.power - target.def;
    if (this.power > target.def) {
      target.life -= damage;
    }

    console.log(`${this.name} causou ${damage} de dano em ${target.name}`);
    console.log(`a vida atual de ${target.name} é:${target.life}`);
  }
}
