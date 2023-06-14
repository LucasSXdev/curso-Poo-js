class ContaBancária {
  constructor(saldo, limite) {
    this.saldo = saldo;
    this.limite = limite;
  }

  getSaldo() {
    return this.saldo;
  }

  sacar(valor) {
    if (valor > this.getSaldo() || valor > this.limite) {
      return "não foi possível realizar o saque!";
    } else {
      return valor;
    }
  }
}

const saque = new ContaBancária(1000, 500);

console.log(saque);
console.log(saque.getSaldo());
console.log(saque.sacar(700));
