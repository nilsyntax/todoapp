import { Todo } from "./todo.js";

export class TodoState {
  constructor() {
    this.todos = [];
    this.listener = [];
  }

  // State actions for todo
  subscribe(fn) {
    this.listener.push(fn); // store UI renderer as state listener
  }

  notify() {
    // save to storage
    // ....

    // notify listener (UI renderer)
    this.listener.forEach(fn =>  {
      fn(this.todos);
    });
  }

  add(name) {
    this.todos.push(new Todo({ id: crypto.randomUUID(), name }));
    this.notify();
  }

  toggle(id) {
    let theTodo = this.todos.find(function (td) {
      return td.id == id; // gets the matched todo item by id
    });
    if (theTodo) {
      theTodo.toggle(); // call toggle()
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

/*
- Temorary load from storage(if exist)
- Store state transition operation, add(), toggle(), delete(), edit()
- Save state change to storage for persistence
- Notify UI who are suscribed to state change

referring the key id: is mandetory as value is an expression ()
*/
