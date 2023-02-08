// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
// toggle이 classList에 clicked(token)의 유무를 판단하여 add하거나 remove함.
//   h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);

// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLogintSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLogintSubmit);
link.addEventListener("click", handleLinkClick);
