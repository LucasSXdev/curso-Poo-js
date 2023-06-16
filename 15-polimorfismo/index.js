//o polimorfismo permite que possamos modificar um objeto
//podemos reescrever um método na classe filha
//para utilizar a sobrescrita basta reescrever o método da classe mãe na classe filha utilizando o mesmo nome

class vehicle {
  move() {
    console.log("o veículo está se movendo!");
  }
}

class car extends vehicle {
  move() {
    console.log("o carro está se movendo");
  }
}

class ship extends vehicle {
  move() {
    console.log("o navio está se movendo");
  }
}

const Car = new car();
const Ship = new ship();

Car.move();
Ship.move();

//Outra possibilidade incrível da sobrescrita de métodos é utilizar de forma genérica objetos que obedecem a mesma interface:
function start(vehicle) {
  console.log("Iniciando um veículo...");
  vehicle.move(); // pode ser qualquer subclass de Vehicle
}

start(Car);
start(Ship);
