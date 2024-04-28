// У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює поля форми.
// Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє чи вони не пусті.
// Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You.
// Якщо хоча б одне зі значень заповнене, функція змінює контент h1 на Hello firstName lastName!

// Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.com/posts,
// використовуючи методи open() і send().

// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за допомогою
// JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та поміщає отриманий результат
// всередину елемента з id="demo".

// Функція, яка викликається при введенні користувачем даних у форму
function handleFormInput() {
  const firstName = document.getElementsByName("firstName")[0].value;
  const lastName = document.getElementsByName("lastName")[0].value;
  let title = document.getElementById("waiting");

  // Перевірка, чи заповнені обидва поля
  if (!firstName && !lastName) {
    title.textContent = "I'm miss You";
  } else {
    title.textContent = `Hello ${firstName} ${lastName}!`;
  }
}

// Додавання події на введення даних у форму
document.addEventListener("input", () => {
  setTimeout(handleFormInput, 10000);
});

// Відправлення запиту до сервера та обробка відповіді
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let response = JSON.parse(xhr.responseText);
    let markup = response.map(template).join("");
    document.getElementById("demo").innerHTML = markup;
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();

// Функція, яка генерує HTML-код для кожного елемента у відповіді
function template(item) {
  return `<h3>${item.title}</h3> <div>${item.body}</div>`;
}
