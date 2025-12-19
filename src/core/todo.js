// Default Blueprint a todo
// (!) No state management

export class Todo {
  constructor({ id, context, completed = false }) {
    this.id = id;
    this.context = context;
    this.completed = completed;     // false
    
  }

  // toggle the value of completed by calling (false <-> true)
  checked() {
    this.completed = !this.completed;
  }

  // Update todo name through func parameter
  update(changedName) {
    this.context = changedName;
  }
}