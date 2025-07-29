// @ts-nocheck

// Challenge - 1
function createCar(
  brand: string,
  model: string,
  year: number,
  color: string,
  price: number
) {
  const person = Object.create(methods);

  person.brand = brand;
  person.model = model;
  person.year = year;
  person.color = color;
  person.price = price;
}

const methods = {
  start() {
    console.log(`${this.brand} ${this.model} is starting`);
  },
  stop() {
    console.log(`${this.brand} ${this.model} is stoping`);
  },
};

const person = createCar("Toyota", "Camry", 2020, "Blue", 24000);
const person2 = createCar("Honda", "Civic", 2019, "Red", 22000);

person.start();
person2.start();
person.stop();
person2.stop();
