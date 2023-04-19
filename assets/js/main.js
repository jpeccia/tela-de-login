const mode = document.getElementById("mode_icon");

mode.addEventListener("click", () => {
  const form = document.getElementById("login_form");
  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }
  mode.classList.add("fa-moon");
  mode.classList.remove("fa-sun");
  form.classList.remove("dark");
});

function login() {
  let user = document.querySelector("#user");
  let userLabelLogin = document.querySelector("#userLabelLogin");

  let password = document.querySelector("#password");
  let userLabelPassword = document.querySelector("#userLabelPassword");

  let errorMsg = document.querySelector("#errorMsg");
  let userList = [];

  let validUser = {
    name: "",
    user: "",
    email: "",
    password: "",
  };

  userList = JSON.parse(localStorage.getItem("userList"));

  userList.forEach((item) => {
    if (user.value == item.user && password.value == item.password) {
      validUser = {
        name: item.name,
        user: item.user,
        email: item.email,
        password: item.password,
      };
    }
  });

  if (user.value == validUser.user && password.value == validUser.password) {
    window.location.href = "../../index.html";

    let token =
      Math.random().toString(16).substr(2) +
      Math.random().toString(16).substr(2);
    localStorage.setItem("token", token);
    localStorage.setItem("userLogin", JSON.stringify(validUser));
  } else {
    userLabelLogin.setAttribute("style", "colSor: red");
    passwordLabelLogin.setAttribute("style", "color: red");
    errorMsg.setAttribute("style", "display: block");
    errorMsg.innerHTML = "Usuário ou senha incorretos";
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("");
  window.location.href = "./assets/html/login.html";
}
