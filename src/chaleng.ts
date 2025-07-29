// @ts-nocheck

// Challenge - 1
function createCar(
  brand: string,
  model: string,
  year: number,
  color: string,
  price: number,
  isStarted: boolean
) {
  const person = Object.create(methods);

  person.brand = brand;
  person.model = model;
  person.year = year;
  person.color = color;
  person.price = price;
  person.isStarted = isStarted;

  return person;
}

const methods = {
  start() {
    if (this.isStarted) throw new Error("Bu mashina allaqachon yurib bolgan");

    this.isStarted = true;
    console.log(`${this.brand} ${this.model} is starting`);
  },
  stop() {
    if (!this.isStarted) throw new Error("Bu mashina hali yurmagan");

    this.isStarted = false;
    console.log(`${this.brand} ${this.model} is stoping`);
  },
};

const person1 = createCar("Toyota", "Camry", 2020, "Blue", 24000);
const person2 = createCar("Honda", "Civic", 2019, "Red", 22000);

try {
    person1.start()
    person1.stop()
} catch (error: any) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
