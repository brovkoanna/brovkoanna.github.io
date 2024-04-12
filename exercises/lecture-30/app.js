// У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми.
// Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті.
// Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You.
// Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!

setTimeout(() => {
  const firstName = document.getElementsByName("firstName")[0];
  const lastName = document.getElementsByName("lastName")[0];
  let title = document.getElementById("waiting");
  console.log(title);
  if (!firstName.value && !lastName.value) {
    title.textContent = "I'm miss You";
  }
  if (firstName.value || lastName.value) {
    title.textContent = `Hello ${firstName.value} ${lastName.value}!`;
  }
}, 10000);

// Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts,
// використовуючи методи open() і send().

// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за допомогою
// JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат
// всередину елемента з id="demo".

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    response = JSON.parse(xhr.responseText);
    console.log(response);
  }
  let markup = "";
  response.forEach((item) => {
    markup += template(item);
  });
  document.getElementById("demo").innerHTML = markup;
};
xhr.send();

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;
