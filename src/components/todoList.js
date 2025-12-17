import { TodoItem } from "./todoItem.js";

export class TodoList {
  constructor(state){
    this.todoList = document.querySelector('#todo-list');
    console.log(this.todoList);
    state.subscribe(this.render.bind(this));
    this.render(state.todos);
  }
  render(todos){
    this.todoList.innerHTML = '';
    todos.forEach(todo => {
      this.todoList.appendChild(TodoItem(todo)); 
    })
  }
}