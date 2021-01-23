// Create our own prototypes:
var human = { mortal: true };
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true

console.log(socrates.mortal); // true