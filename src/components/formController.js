export class TodoFormController {
  constructor(state) {
    this.state = state;
    this.form = document.querySelector("#todo-form");
    this.input = document.querySelector("#todo-input");
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // if value is empty -> do nothing, return(stop)
      if(!this.input.value.trim()) return
      
      this.state.add(this.input.value);
      this.input.value = "";
    })
  }
} 