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
// 반복해서 사용하는 string은 오타가 날 수 있으므로 따로 대문자 변수로 저장해 사용하는 것을 추천
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");

function onLogintSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = "Hello " + username;
  // 백틱 기호와 ${변수명}을 활용한 방법을 더 선호
  paintGreetings(username);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }
// link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLogintSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
