/*Treinando a Criação de Classes
1-um atributo fullname, atribuível na instanciação
2-um atributo email, atribuível na instanciação
3-um atributo password, atribuível na instanciação
4-um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e 5-mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
6-um atributo name, atribuível na instanciação
7-um atributo description, atribuível na instanciação
8-um atributo price, atribuível na instanciação
9-um atributo inStock, inicializado sempre em 0
10-um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
11-um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicado*/

class User {
  constructor(fullname, password, email) {
    this.fullname = fullname;
    this.password = password;
    this.email = email;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("usuário cadastrado com sucesso!");
    } else {
      if (email != this.email) {
        console.log("email inválido!");
      }
      if (password != this.password) {
        console.log("senha incorreta!");
      }
    }
  }
}

class Product {
  constructor(name, description, price, inStock) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  addToStock(amount) {
    return (this.inStock += amount);
  }

  calculateDiscont(Discount) {
    this.price *= this.inStock;
    let totalValue = (Discount / 100) * this.price;
    this.price = totalValue;

    return this.price;
  }
}

let user1 = new User("Lucas", "1234", "lucas@sla");
let Product1 = new Product("iphone", "branco", 1000, 2);

console.log(Product1);
Product1.addToStock(2);
console.log(Product1);
Product1.calculateDiscont(10);
console.log(Product1);
