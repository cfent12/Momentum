const toDoForm = document.getElementById("toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("toDo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => (String(toDo.id) !== li.id) && toDo.text !== li.text);
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerHTML = newToDoObj.text;
    const button = document.createElement("button");
    button.innerHTML = "❌";

    button.addEventListener("click", deleteToDo);

    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}