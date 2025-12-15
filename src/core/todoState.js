// Defined the State and state transition function
// manage function - add(), toggle(), delete(), edit()
// Operation for todoItem.js

import { todoItem } from "./todoItem.js";

export class todoState {
  constructor() {
    this.todos = [];                // array of todo object   
  }

  add(name) {
    // referring the key id: is mandetory as value is an expression ()
    this.todos.push(new todoItem({ id: crypto.randomUUID(), name }));
  }

  toggle(id) {
    let getTodo = this.todos.find(function (td) {
      return td.id == id; // gets the matched todo item object to getTodo
    });
    if (getTodo) {
      getTodo.toggle(); // default value false, by calling fillped to true, each call flips it
    }
  }

  edit(id, newName) {
    let getTodo = this.todos.find(function (td) {
      return td.id === id;
    });
    if (getTodo) {
      getTodo.update(newName);
    }
  }

  delete(id) {
    this.todos = this.todos.filter(function(td){
      return td.id !== id;                    // return only the todo obj that doesn't match td.id with id
    })
  }
}
