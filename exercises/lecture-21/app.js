// 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
let fruits = "apple banana cantaloupe blueberries grapefruit";
fruits = fruits.split(" ");
console.log(fruits);

// 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let x = 0;
do {
  console.log(fruits[x]);
  x++;
} while (x < fruits.length);

// 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
for (a of fruits) console.log(a);

// 6. Маємо масив Numbs.
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

// 7. Маємо масив names:
// const names = ["Batman"];
//Додати 'Joker' в кінець масиву names:
// names.push("Joker");
// console.log(names);

//8. Маємо масив names:
// const names = ["Batman"];
// Додати 'Joker' на початок масиву names
// names.unshift("Joker");
// console.log(names);

// 9.Маємо масив names:
// names = ["Batman", "Joker", "Bane"];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
// names.unshift("Catwoman");
// console.log(names);

//10. Маємо масив names:
// names = ["Batman", "Joker", "Bane"];
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
/* names = ["Catwoman", ...names];
console.log(names); */

//11. Маємо масив names
// names = ["Batman", "Joker", "Bane"];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
// const firstArray = names.slice(0, 1);
// const secondArray = names.slice(1);

//names = [...firstArray, "Catwoman", ...secondArray];
// names = firstArray.concat("Catwoman", secondArray);
// console.log(names);

//12. Маємо масив names
// const names = ["Batman", "Catwoman", "Joker", "Bane"];
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
// const fromIndex = 1;
// const removeCount = 2;
// const newNames = [
// ...names.slice(0, fromIndex),
// ...names.slice(fromIndex + removeCount)
// ];
// console.log(newNames);

//13. Маємо масив names:
// const names = ["Batman", "Catwoman", "Joker", "Bane"];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
// const fromIndex = 1;
// const removeCount = 2;
// const newNames = [
//   ...names.slice(0, fromIndex),
//   "Alfred",
//   ...names.slice(fromIndex + removeCount),
// ];
// console.log(newNames);

//14. Маємо масив names:
// const names = ["Batman", "Catwoman", "Joker", "Bane"];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
// if (!names.includes("Alfred")) {
//   names.push("Alfred");
// }
// console.log(names);

//15. Маємо масив names:
let names = ["Batman", "Catwoman", "Joker", "Bane"];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
const alfredIndex = names.indexOf("Alfred");
if (alfredIndex !== -1) {
  names = [...names.slice(0, alfredIndex), ...names.slice(alfredIndex + 1)];
}
console.log(names);
