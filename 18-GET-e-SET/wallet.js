class Wallet {
  #amount; //atributo privado da classe
  #username; //propriedade privada chamada username

  constructor() {
    this.#amount = 100.99 * 100; //10099
  }

  get amount() {
    //criamos um método com get para além de acessar a propriedade, também modificar
    return this.#amount / 100;
  }

  set username(newUsername) {
    //Utilizamos o set para podermos atribuir algo ao username
    this.#username = newUsername;
  }

  get username() {
    this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

//A diferença de um get para um método normal é que quando o acessamos não precisamos passar os parentesis.
//A diferença do set também é poder chamar o método como se fosse uma propriedade e não uma função.
//são muito úteis para fazer validações também.
