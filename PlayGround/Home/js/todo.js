const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");


let toDos = [];


function saveToDo(){
  localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDo();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newTodo.id; 
  span.innerText = newTodo.text;
  li.classList.add("list-group-item");
  const button = document.createElement("button");
  button.innerText = "x";
  button.classList.add("badge");
  button.classList.add("text-bg-warning");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);  
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
    };
  toDos.push(newTodoObj);
  saveToDo();
  paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}