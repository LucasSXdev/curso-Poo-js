class Adress {
  constructor(street, number, state) {
    this.street = street;
    this.number = number;
    this.state = state;
  }

  fullAdress() {
    return `Rua ${this.street},Number: ${this.number},Estado:${this.state}`;
  }
}

module.exports = Adress