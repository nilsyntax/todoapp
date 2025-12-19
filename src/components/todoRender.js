import { TodoItem } from "./todoItem.js";

export class TodoRender {
  constructor(state){
    this.todoList = document.querySelector('#todo-list');
    this.state = state;

    state.subscribe(this.render.bind(this));
    this.render(state.todos);
  }
  
  render(todos){
    this.todoList.innerHTML = '';
    todos.forEach(todoObj => {
      this.todoList.appendChild(TodoItem(todoObj, this.state)); 
    })
  }
}
