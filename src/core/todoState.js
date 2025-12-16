import { Todo } from "./todo.js";

export class TodoState {
  constructor() {
    this.todos = [];
  }

  // State actions for todo

  add(name) {
    this.todos.push(new Todo({ id: crypto.randomUUID(), name }));
  }

  toggle(id) {
    let theTodo = this.todos.find(function (td) {
      return td.id == id; // gets the matched todo item by id
    });
    if (theTodo) {
      theTodo.toggle(); // call toggle()
    }
  }

  edit(id, newName) {
    let theTodo = this.todos.find(function (td) {
      return td.id === id;
    });
    if (theTodo) {
      theTodo.update(newName);
    }
  }

  delete(id) {
    this.todos = this.todos.filter(function (td) {
      return td.id !== id; // return only the matched todo obj, except unmatched
    });
  }
}

/*
- Temorary load from storage(if exist)
- Store state transition operation, add(), toggle(), delete(), edit()
- Save state change to storage for persistence
- Notify UI who are suscribed to state change

referring the key id: is mandetory as value is an expression ()
*/
