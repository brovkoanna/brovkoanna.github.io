//task 1
// const person = {
//   name: "Anna",
//   age: 33,
// };
// console.dir(person.name);
// console.dir(person.ages);

//task 2
// const person = {
//   name: {
//     firstName: "Anna",
//     lastName: "Brovko",
//   },
//   age: 33,
// };
// console.dir(person.name.firstName);
// console.dir(person.name.lastName);

//task 3
// const person = {
//   name: {
//     firstName: "Anna",
//     lastName: "Brovko",
//   },
//   age: 33,
//   bio() {
//     console.log(this.name.firstName);
//     console.log(this.name.lastName);
//     console.log(this.age);
//   },
// };

// person.bio();

//task 4
// person.introduceSelf = function () {
//   return `Hi! I'm ${this.name.firstName}`;
// };
// console.log(person.introduceSelf());

//task 5
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    return `Hi! I'm ${this.name}`;
  };

  return obj;
}
const person1 = createPerson("Anna");
const person2 = createPerson("Alex");
console.log(person1.introduceSelf());
console.log(person2);

// task 6
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    return `Hi! I'm ${this.name}`;
  };
}
const mary = new Person("Mery");
const tom = new Person("Tom");
console.log(Object.hasOwn(mary, "prop"));

// task 7
const DirtyMartini = {
  english_please() {
    return `
    ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`;
  },
  excuse_my_french() {
    return `
    ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`;
  },
};
console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());
