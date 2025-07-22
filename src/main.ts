const person = {
  name: "kent",
  age: 20,
  salary: {
    monnthly: 1000,
    yearly: 12000,
  },
  project: ["project1", "project2", "project3"],
};

const person1 = structuredClone(person);

// const person1 = {...person};
// person1.salary = {...person.salary};
// person1.project = [...person.project];

console.log('Person', person);
console.log('Person', person1);

function a(b: () => void) {
  b();
}

a(() => console.log("Hello world"));
