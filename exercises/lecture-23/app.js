const alert = document.querySelector(".alert");
// task 1
// Знайти на сторінці кнопку з класом btn-primary.
// Призначте знайденому елементу подію onclick.
// Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".
const btnPrimary = document.querySelector(".btn-primary");
const alertElement = document.getElementById("alert");
btnPrimary.onclick = function () {
  alertElement.classList.add("alert-primary");
  alertElement.textContent = "A simple primary alert—check it out!";
};
// task 2
// Знайти на сторінці кнопку з класом btn-secondary.
// Додати до кнопки прослуховувач події "click".
// Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

const btnSecondary = document.querySelector(".btn-secondary");
btnSecondary.addEventListener("click", function () {
  alertElement.classList.add("alert-primary");
  alertElement.textContent = "A simple primary alert—check it out!";
});

//task 3
// Знайти на сторінці кнопку з класом btn-success.
// Додати до кнопки прослуховувач події "mouseover".
// Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert
// та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
const btnSuccess = document.querySelector(".btn-success");
btnSuccess.addEventListener("mouseover", function () {
  alertElement.classList.add("alert-success");
  alertElement.textContent = "A simple success alert—check it out!";
});

// Додати до кнопки прослуховувач події "mouseout".
// Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert та
// змінює значення властивості textContent цього елемента на пустий рядок.
btnSuccess.addEventListener("mouseout", function () {
  alertElement.classList.remove("alert-success");
  alertElement.textContent = "";
});

//task 4
// Знайти на сторінці кнопку з класом btn-danger.
// Додати до кнопки прослуховувач події "focus".
// Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та
// змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!"
// Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout,
// що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

const btnDanger = document.querySelector(".btn-danger");
btnDanger.addEventListener("focus", function () {
  alertElement.classList.add("alert-danger");
  alertElement.textContent = "A simple danger alert—check it out!";
});
btnDanger.addEventListener("focusout", function () {
  alertElement.classList.remove("alert-danger");
  alertElement.textContent = "";
});

//task 5
// Знайти на сторінці кнопки з класом btn-dark та btn-light.
// Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle().
// Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку.
// Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode,
// показати кнопку btn-dark та сховати кнопку btn-light
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

btnDark.addEventListener("click", function () {
  toggleMode();
  btnDark.classList.add("hide");
  btnLight.classList.remove("hide");
});
btnLight.addEventListener("click", function () {
  toggleMode();
  btnLight.classList.add("hide");
  btnDark.classList.remove("hide");
});

//task 6
// Знайти на сторінці кнопку з класом btn-info.
// Додати до кнопки прослуховувач події "keypress".
// Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter".
// Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault().
// Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та
// змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";

const btnInfo = document.querySelector(".btn-info");
btnInfo.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    alertElement.classList.add("alert-info");
    alertElement.textContent = "A simple info alert—check it out!";
  }
});

// task 7
//Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}
// task 8
// Знайти на сторінці всі селектори .card. Використовуючи цикл for,
// знайти для кожного елемента .card кнопку з класом .add-to-cart,
// додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст
// кожного елемента з класом .card-title
for (let i = 0; i < cards.length; i++) {
  const addToCard = cards[i].querySelector(".add-to-cart");
  addToCard.addEventListener("click", () => {
    const cardTitle = cards[i].querySelector(".card-title");
    console.log(cardTitle.textContent);
  });
}
