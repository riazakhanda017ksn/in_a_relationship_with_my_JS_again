let arrayPrototype = new Array();
console.log(Array.prototype);

// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
// [[Prototype]]: Object

///prototype

const personMethod = {
  eat() {
    console.log(`person is eating`);
  },
  sleep() {
    console.log(`person is sleeping`);
  },
  play() {
    console.log(`person is playing`);
  },
};

function Person(name, age) {
  let person = {};
  person.name = name;
  person.age = age;
  person.eat = personMethod.eat;
  person.sleep = personMethod.sleep;
  person.play = personMethod.play;

  return person;
}

const sakib = Person("sakib", 20);
const akram = Person("akram", 18);
