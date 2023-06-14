class Propriety {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class house extends Propriety {}

const land = new Propriety(1000, 50000);
const otherhouse = new house(500, 25000);

console.log(land);
console.log(otherhouse);
console.log(otherhouse instanceof Propriety); //other house é uma instancia de propriety

class apartment extends Propriety {
  constructor(number, area, price) {
    super(area, price); //super permite que a subclasse utilize o mesmo construtor da classe mãe
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apt = new apartment("120", 100, 160000);

console.log(apt);
console.log(apt.getFloor());
