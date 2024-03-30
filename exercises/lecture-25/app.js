// task 1
const list = ["html", "css", "javascript", "react.js"];
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на сторінку.
let ul = document.createElement("ul");
for (let index = 0; index < list.length; index++) {
  let li = document.createElement("li");
  li.textContent = list[index];
  ul.append(li);
}

document.body.append(ul);
console.log(ul.childNodes);

//task2

const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];

//Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref,
//де кожний елемент списку є тегом a з відповідним посиланням.
let ol = document.createElement("ol");
listWithHref.forEach((link) => {
  const key = Object.keys(link)[0];

  let a = document.createElement("a");
  a.href = link[key];
  a.textContent = key;
  let li = document.createElement("li");
  li.append(a);
  ol.append(li);
});
document.body.append(ol);

// task 3

const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];

//Використовуючи метод createElement, створити таблицю на основі масиву students.
//Заголовки стовпчиків таблиці - firstName, lastName, degree.
//Встановити для заголовків стовпчиків таблиці css-властивості: background-color: blue; color: azure; Додайте таблицю на сторінку.

const table = document.createElement("table");
const keys = Object.keys(students[0]);
const thRow = document.createElement("tr");
keys.forEach((key) => {
  const th = document.createElement("th");
  th.textContent = key;
  th.style.backgroundColor = "blue";
  th.style.color = "azure";
  thRow.append(th);
});
table.append(thRow);
students.forEach((student) => {
  const tr = document.createElement("tr");

  keys.forEach((key) => {
    const td = document.createElement("td");
    td.textContent = student[key];
    tr.append(td);
  });
  table.append(tr);
});
document.body.append(table);
