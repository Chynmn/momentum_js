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
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
// const link = document.querySelector("a");

function onLogintSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  // greeting.innerText = "Hello " + username;
  // 백틱 기호와 ${변수명}을 활용한 방법을 더 선호
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLogintSubmit);
// link.addEventListener("click", handleLinkClick);
