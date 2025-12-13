// const addTodo = document.querySelector('#new-todo'); // button
import { ToDoItem } from "./components/taskitem.js";
import { addTaskButton } from "./components/button.js";

function newToDoItem(taskName, parentItem) {
   new ToDoItem(taskName, parentItem).render();
}

function btnEvent(){
   console.log('Clicked');
   newToDoItem("Hello Kitty", '#to-dos');
}

const addButton = addTaskButton(btnEvent);
document.querySelector('.btn-wrap').appendChild(addButton);


