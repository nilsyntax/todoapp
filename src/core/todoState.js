import { Todo } from "./todo.js";
import { load, save } from "../utils/storage.js";


export class TodoState {
  constructor() {
    // this.todos = load();
    // console.log("from state", this.todos);
    this.todos = load().map(function(td){
      return new Todo(td);
    });
    this.listener = [];
  }

  // State actions for todo
  subscribe(fn) { 
    this.listener.push(fn); // store UI renderer as state listener
  }

  notify() {
    // save to storage
    save(this.todos);

    // notify listener (UI renderer)
    this.listener.forEach(fn =>  {
      fn(this.todos);
    });
  }

  add(name) {
    this.todos.push(new Todo({ id: crypto.randomUUID(), name }));
    this.notify();
  }

  checked(id) {
    let theTodo = this.todos.find(function (td) {
      return td.id == id; // gets the matched todo item by id
    });
    if (theTodo) {
      theTodo.checked(); // call check()
    }

    this.notify();
  }

  edit(id, newName) {
    let theTodo = this.todos.find(function (td) {
      return td.id === id;
    });
    if (theTodo) {
      theTodo.update(newName);
    }

    this.notify();
  }

  delete(id) {
    this.todos = this.todos.filter(function (td) {
      return td.id !== id; // return only the matched todo obj, except unmatched
    });
    this.notify();
  }
}

