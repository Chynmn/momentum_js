const loginForm = document.querySelector(".js-name #login-form");
const loginInput = document.querySelector(".js-name #login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogintSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

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
