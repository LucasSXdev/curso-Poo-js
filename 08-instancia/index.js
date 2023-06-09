const Adress = require("./Adress");
const Person = require("./person");

const addr = new Adress("mato dentro", 555, "sp");
const mario = new Person("Mario", addr);

console.log(mario);
console.log(mario.adress.fullAdress());
