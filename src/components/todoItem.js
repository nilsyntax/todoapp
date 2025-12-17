export function TodoItem (todo){
  const list = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  
  const span = document.createElement('span');
  span.textContent = todo.name;
  
  const itemIcon = document.createElement('div');
  itemIcon.classList('itemIcon');
  
  const todoEdit = createElement('span');
  todoEdit.textContent = "edit";
  const todoDel = createElement('span');
  todoDel.textContent = "delete";
  itemIcon.append(todoEdit, todoDel);
  
  list.append(checkbox, span, itemIcon)
}