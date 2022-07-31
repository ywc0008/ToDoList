const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo");

let toDos = [];

const TODO_KEY = "todo";

function saveToDo() {
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDoList(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = todo.text;
  btn.innerText = "X";
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  btn.addEventListener("click", deleteToDo);
}

function addToDoList(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDoList(newTodoObj);
  savedToDo();
}

toDoForm.addEventListener("submit", addToDoList);

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo) {
  const parsedToDo = JSON.parse(savedToDo);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDoList);
}
