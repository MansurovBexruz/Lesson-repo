const p1 = {
  name: "kent",
  run() {
    console.log(`${this.name} is running`);
  },
};

const p2 = {
  name: "mark",
  jump() {
    console.log(`${this.name} is jumping`);
  },
};

const run = p1.run;
const jump = p2.jump;

console.log("--------- Call Method ---------");

run.call(p1);
run.call(p2);
jump.call(p1);
jump.call(p2);

console.log("--------- Apply Method ---------");

run.apply(p1);
run.apply(p2);
jump.apply(p1);
jump.apply(p2);

console.log("--------- Bind Method ---------");
const runP1 = run.bind(p1);
const runP2 = run.bind(p2);
const jumpP1 = jump.bind(p1);
const jumpP2 = jump.bind(p2);

runP1();
runP2();
jumpP1();
jumpP2();
