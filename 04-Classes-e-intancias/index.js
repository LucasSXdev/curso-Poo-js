//1-para criar uma classe devemos utilizar a palavra reservada class e depois o nome dela
//2-para instanciar uma classe é necessário utilizar o constructor e usar o this para referenciar o objeto
//3-para utilizarmos métodos dentro de uma classe devemos declarar ele fora do constructor

class book {
  //criando uma classe

  constructor(title) {
    //utilizando o contructor e referenciando com o this
    this.title = title;
    this.published = false;
  }

  publish() {
    //criando o método chamado publish
    this.published = true;
  }
}

let eragon = new book("Eragon"); //criando os objetos com a palavra new
let eldest = new book("Eldest");

eragon.publish();

console.log(eragon);
console.log(eldest);
