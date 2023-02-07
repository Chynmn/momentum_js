const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // toggle이 classList에 clicked(token)의 유무를 판단하여 add하거나 remove함.
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
