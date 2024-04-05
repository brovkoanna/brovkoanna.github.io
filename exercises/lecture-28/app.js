// Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

// Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

// Виконати базову перевірку:

// *ім’я користувача не може бути пустим,
// *електронна адреса має бути у правильному форматі,
// *пароль має містити принаймні 8 символів,
// *пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку.
//Повідомлення про помилки відображаються в розділі errorMessages.

// Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.
const form = document.getElementById("registrationForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const errorMessages = document.getElementById("errorMessages");
  errorMessages.textContent = "";
  const usernameForm = form.elements["username"];
  if (!usernameForm.value) {
    errorMessages.textContent += "Ім’я користувача не може бути пустим";
  }
  const emailForm = form.elements["email"];
  const emailFormRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormRegex.test(emailForm.value)) {
    errorMessages.textContent +=
      "Електронна адреса має бути у правильному форматі";
  }
  const passwordForm = form.elements["password"];
  const passwordFormRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordFormRegex.test(passwordForm.value)) {
    errorMessages.textContent +=
      "Пароль має містити принаймні 8 символів, одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ";
  }
  if (
    passwordFormRegex.test(passwordForm.value) &&
    emailFormRegex.test(emailForm.value) &&
    usernameForm.value
  ) {
    alert("форма відправлена");
    errorMessages.textContent = "";
    form.reset();
  }
});
