let name = document.querySelector("#name");
let labelName = document.querySelector("#labelName");
let nameValid = false;

let user = document.querySelector("#user");
let labelUser = document.querySelector("#labelUser");
let userValid = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let emailValid = false;

let password = document.querySelector("#password");
let labelPassword = document.querySelector("#labelPassword");
let passwordValid = false;

let confirmPassword = document.querySelector("#confirmPassword");
let labelConfirmPassword = document.querySelector("#labelConfirmPassword");
let confirmPasswordValid = false;

let errorMsg = document.querySelector("#errorMsg");
let sucessMsg = document.querySelector("#sucessMsg");

name.addEventListener("keyup", () => {
  if (name.value.length <= 2) {
    labelName.setAttribute("style", "color: red");
    nameValid = false;
  } else {
    labelName.setAttribute("style", "color: green");
    nameValid = true;
  }
});

user.addEventListener("keyup", () => {
  if (user.value.length <= 2) {
    labelUser.setAttribute("style", "color: red");
    userValid = false;
  } else {
    labelUser.setAttribute("style", "color: green");
    userValid = true;
  }
});

email.addEventListener("keyup", () => {
  if (
    email.value.length <= 2 ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    labelEmail.setAttribute("style", "color: red");
    emailValid = false;
  } else {
    labelEmail.setAttribute("style", "color: green");
    emailValid = true;
  }
});

password.addEventListener("keyup", () => {
  if (password.value.length <= 5) {
    labelPassword.setAttribute("style", "color: red");
    passwordValid = false;
  } else {
    labelPassword.setAttribute("style", "color: green");
    passwordValid = true;
  }
});

confirmPassword.addEventListener("keyup", () => {
  if (password.value != confirmPassword.value) {
    labelConfirmPassword.setAttribute("style", "color: red");
    confirmPasswordValid = false;
  } else {
    labelConfirmPassword.setAttribute("style", "color: green");
    confirmPasswordValid = true;
  }
});

function register() {
  if (
    nameValid &&
    userValid &&
    emailValid &&
    passwordValid &&
    confirmPasswordValid
  ) {
    let userList = JSON.parse(localStorage.getItem("userList") || "[]");

    userList.push({
      name: name.value,
      user: user.value,
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("userList", JSON.stringify(userList));
    sucessMsg.setAttribute("style", "display: flex");
    sucessMsg.innerHTML = "<strong>Cadastrando usuário...</strong>";
    errorMsg.setAttribute("style", "display: none");
    errorMsg.innerHTML = "";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  } else {
    errorMsg.setAttribute("style", "display: flex");
    errorMsg.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    sucessMsg.setAttribute("style", "display: none");
    sucessMsg.innerHTML = "";
  }
}
