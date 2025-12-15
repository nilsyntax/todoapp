// Default Blueprint of each Todo Item
// (!) No state management

class todoItem{
  constructor(id, name, completed=false){
    this.id = id;
    this.name = name;
    this.completed = completed;
  }
  
  // toggle the completed value (false <-> true)
  toggle(){
    this.completed = !this.completed;
  }
  
  // Update todo name through func parameter
  update(changedName){
    this.name = changedName;
  }
}