// Todo Item UI
export function TodoItem(todo, state) {
  const todoItem = document.createElement("li");

  // checkbox here
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("click", (e) => {
    e.preventDefault();
    state.checked(todo.id);
    console.log("clicked", todo.id, checkbox.checked);
  });


  // todo statement
  const todoName = document.createElement("input");
  todoName.type = "text";
  todoName.value = todo.context;
  todoName.readOnly = true;
  todoName.classList.add("todo-title");

  Object.assign(todoName.style, {
    outline: "none",
    border: "none"
  })

  let preValue = todo.context;

  todoName.addEventListener('dblclick', () => {
    todoName.readOnly = false;
    todoName.focus();
    todoName.select();
  })

  todoName.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      todoName.blur();
    }
    if (e.key === "Escape") {
      todoName.value = preValue;
      todoName.blur();
    }
  })

  todoName.addEventListener('blur', (e) => {

    let newValue = todoName.value.trim();
    if (!todoName || newValue === preValue) {
      todoName.value = preValue;
      return
    }
    state.edit(todo.id, newValue);
  })
  // todo statement end


  // delete button 
  const todoDel = document.createElement('span');
  const icon = document.createElement('img')

  icon.src = '/assets/delete-bin-line.svg'
  icon.alt = 'Delete Icon'
  icon.style.width = '16px'
  icon.style.height = '16px'

  todoDel.addEventListener('click', (e) => {
    console.log("Delete Clicked");
    state.delete(todo.id);
  })

  todoDel.appendChild(icon);

  const iconWrap = document.createElement("div");
  iconWrap.classList.add("utilIcon");
  iconWrap.append(todoDel);

  todoItem.append(checkbox, todoName, iconWrap);
  return todoItem;
}
