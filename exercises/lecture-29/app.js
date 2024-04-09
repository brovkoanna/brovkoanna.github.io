class AuthException extends Error {
  constructor(code, message) {
    super();
    this.message = message ? `${code}: ${message}` : code;
  }

  toString() {
    return this.message;
  }
}

let isAuth = (auth) => auth ?? false;

let dialogBoxId = document.getElementById("dialogBox");

function showDialog(e) {
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });

  dialogBoxId.showModal();
}

function closeDialog() {
  dialogBoxId.close();
}

const checkAuth = document.querySelector(".check-auth");

checkAuth.addEventListener("click", () => {
  try {
    if (!isAuth()) {
      throw new AuthException(
        "FORBIDDEN",
        "You don't have access to this page"
      );
    }

    window.open("success.html");
  } catch (e) {
    const dialogBox = document.getElementById("dialogBox");
    dialogBox.querySelector(".message").innerText = e.toString();
    showDialog();
  }
});
