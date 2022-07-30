const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo");

function paintToDoList() {
  const li = document.createElement("li");
  const btn = document.createElement("button");
}

function addToDoList(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  localStorage.getItem("todo", toDo);
  toDoInput.value = "";
  paintToDoList();
}

toDoForm.addEventListener("submit", addToDoList);
