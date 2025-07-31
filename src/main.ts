// @ts-nocheck

const methods = {
  start() {
    if (this.isStarted) throw new Error("Bu mashina allaqachon yurib bo‘lgan");
    this.isStarted = true;
    console.log(`${this.brand} ${this.model} is starting`);
  },

  stop() {
    if (!this.isStarted) throw new Error("Bu mashina hali yurmagan");
    this.isStarted = false;
    console.log(`${this.brand} ${this.model} is stopping`);
  },
};

function Car(
  brand: string,
  model: string,
  year: number,
  color: string,
  price: number
) {
  const car = {
    brand: brand,
    model: model,
    year: year,
    color: color,
    price: price,
    isStarted: false,
  };

  return car;
}

const person1 = Car("Toyota", "Camry", 2020, "Blue", 24000);
const person2 = Car("Honda", "Civic", 2019, "Red", 22000);

Car.prototype.start = methods.start();

try {
  person1.start();
  person1.stop();
} catch (error: any) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
