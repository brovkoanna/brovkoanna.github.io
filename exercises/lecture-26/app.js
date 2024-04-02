// task 1
function calculate(operation, initialValue, numbers) {
  const resalt = numbers.reduce((acc, cur) => {
    return operation(acc, cur);
  }, initialValue);
  return resalt;
}

// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
  return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
  return n1 * n2;
}

console.log(calculate(multiply, 1, [1, 2, 4]));

// task 2
// Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:

//name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | array:
//[ "Wick", "Malcolm", "Smith" ] name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]
let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(`name: ${name} |`, `index: ${index} |`, `array:`, array);
});

// task 3
// Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:
let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 },
];

// Максимальна оцінка degree = 600 Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:
// { name: "Wick", degree: 375, percentage: 62.5 } { name: "Malcolm", degree: 405, percentage: 67.5 } { name: "Smith", degree: 453, percentage: 75.5 }​
students_information
  .map((student) => {
    return {
      name: student.name,
      degree: student.degree,
      percentage: (student.degree / 600) * 100,
    };
  })
  .map((item) => {
    console.log(item);
  });
// task 4
const array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const flatArray = array.reduce((acc, cur) => {
  if (Array.isArray(cur)) {
    return [...acc, ...cur];
  } else {
    return [...acc, cur];
  }
}, []);

console.log(flatArray);
// task 5

Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "string") {
      this[i] = this[i].toUpperCase();
    }
  }
};

function myFunc() {
  let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
  arr.upperCase();
  console.log(arr);
}

myFunc();
