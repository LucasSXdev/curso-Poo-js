//1-Para usarmos os atributos e métodos estáticos basta declará-los diretamente na classe precedidos pela palavra reservada static. E para utilizá-los só precisamos acessar a partir da própria classe ao invés de a partir de uma instância://

class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee; //basefee está sendo acessado pela classe
  }

  static baseFee = 150; //Atributo estático que só pode ser acessado pelo nome da classe

  static showBaseFee() {
    //método estático
    console.log(`Base fee is $${Reservation.baseFee}`);
  }

  //2-Também podemos combinar o uso do static com o get e o set sem problemas:

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(3, "201", 5);
console.log(r1);

Reservation.baseFee = 200;
const r2 = new Reservation(2, "104", 2);
console.log(r2);

//2-Também podemos combinar o uso do static com o get e o set sem problemas:
