const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const lucas = new Mage("Lucas", 100, 4, 2, 14);
const beatrice = new Thief("beatrice", 140, 22, 8);
const cain = new Warrior("cain", 200, 14, 12, 4);

console.table({ lucas, beatrice, cain });

cain.switchStance();
arthur.attack(cain);
beatrice.attack(lucas);

console.table({ arthur, beatrice, cain });

cain.attack(lucas);
arthur.heal(lucas);
beatrice.attack(cain);

console.table({ lucas, beatrice, cain });
