const inputBtn = document.querySelector(".input-btn");
const addTodoBtn = document.querySelector(".todo-btn");
const todoListItems = document.querySelector(".todo-items");
const todoList = document.querySelector(".todo-list");

addTodoBtn.addEventListener("click", addTodo);
todoListItems.addEventListener("click", deleteTodo);

function addTodo() {
  const listElement = document.createElement("LI");
  listElement.classList.add("todo-item");
  listElement.innerHTML = inputBtn.value;
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = "<i class='fa fa-trash'></i>";
  trashBtn.classList.add("trash-btn");
  listElement.appendChild(trashBtn); //appending the button to the list item
  todoListItems.appendChild(listElement);
  todoList.appendChild(todoListItems);
  inputBtn.value = "";
}

//how to style the trash button to be attached to the end of the to do item
function deleteTodo(event) {
  buttonClicked = event.target;
  if (buttonClicked.classList[0] === "trash-btn") {
      buttonClicked.parentElement.remove();
  }
}
