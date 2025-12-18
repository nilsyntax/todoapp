import { TodoState } from "./core/todoState.js";
import { TodoFromController } from "./components/createTodo.js"; 
import { TodoList } from "./components/todoList.js";



const state = new TodoState();
new TodoFromController(state);
new TodoList(state); 


