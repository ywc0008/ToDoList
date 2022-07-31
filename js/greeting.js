const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function paintgreeting(name) {
  const toDoForm = document.querySelector("#todo-form");

  greeting.innerText = `안녕하세요 ${name}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

function onloLoginSubmit(event) {
  event.preventDefault();
  const loginID = loginInput.value;
  localStorage.setItem("ID", loginID);
  paintgreeting(loginID);
}

const savedID = localStorage.getItem("ID");

if (savedID === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onloLoginSubmit);
} else {
  paintgreeting(savedID);
}
