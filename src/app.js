import { TodoState } from "./core/todoState.js";

// cupture userinput, call add() <- TodoState
import { getTodo } from "./components/getTodo.js";
 

const state = new TodoState();
const newGetTodo = new getTodo(state);

// const newTodoList = new todoList(state);
console.log(newGetTodo);


// import { Todo } from "./core/todo.js";
// import { TodoState } from "./core/todoState.js";

// let newTodo = new Todo({id:1234, name:"Ben"});
// console.log(newTodo);

console.log(new TodoState());

export class getTodo {
  constructor(state) {
    this.state = state;
    this.form = document.querySelector("#todo-form");
    this.input = document.querySelector("#todo-input");
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if(!this.input.value.trim()) return
      
      this.state.add(this.input.value);
      this.input.value = ""
    })
  }
}
