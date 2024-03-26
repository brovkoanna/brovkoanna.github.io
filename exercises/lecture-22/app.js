const classes = ["first", "second", "third", "fourth"];
// task 1
//Отримати всі елементи з тегом h1.
//const h1Tag = document.getElementsByTagName("h1");
//Вивести на консоль тип отриманого об'єкту

//та його розмір.
//console.log(h1Tag.length);

//Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
// for (let i = 0; i < h1Tag.length; i++) {
//   console.log(h1Tag[i]);
// }

// task 2
// Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1.
// const p1Id = document.querySelector("#p1");

// Встановити для нього стиль background-color = "gold"
// p1Id.style.backgroundColor = "gold";

//task 3
//Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2.
// const p2Id = document.querySelector("#p2");
//Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
// p2Id.style.cssText = "background-color: gold; color: blue; font-size: 2rem";

// task 4
//Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3.
// const p3Id = document.querySelector("#p3");
//Призначити для нього клас third
// p3Id.classList.add("third");

// task 5
//Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4.
// const p4Id = document.querySelector("#p4");
//Призначити для нього класи fourth та border
// p4Id.classList.add("fourth", "border");

// task 6
// Знайти всі елементи з класом container.
const containerClass = document.getElementsByClassName("container");
// console.log(containerClass);
//Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.

for (let i = 0; i < containerClass.length; i++) {
  console.log(containerClass[i].firstElementChild);
  //task 7
  // console.log(container.children[0].innerHTML);
}

// task 8
// Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers.
const headers = document.querySelectorAll(".container header");
//Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином

for (let i = 0; headers.length > i; i++) {
  const title = headers[i].querySelector("h1");
  title.classList.add(classes[i]);

  if (i !== 0) {
    const titleClass = title.classList;
    const elementId = title.id;
    const text = title.innerHTML;
    const newTitle = document.createElement(`h${i + 1}`);
    newTitle.classList.add(...titleClass);
    newTitle.id = elementId;
    newTitle.innerHTML = text;
    title.replaceWith(newTitle);
  }
}
