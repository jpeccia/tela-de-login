let userLogin = JSON.parse(localStorage.getItem("userLogin"));

let name = document.querySelector("#userName");

let email = document.querySelector("#userEmail");

name.innerHTML = `Usuário: ${userLogin.name}`;
email.innerHTML = `Email: ${userLogin.email}`;

if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/login.html";
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("");
  window.location.href = "./assets/html/login.html";
}
