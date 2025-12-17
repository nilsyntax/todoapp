export function TodoItem (todo){
  const listItem = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  
  const span = document.createElement('span');
  span.textContent = todo.name; 
    
  const icons = document.createElement('div');
  icons.classList.add('itemIcon');
  
  const todoEdit = document.createElement('span');
  todoEdit.textContent = "edit";
  const todoDel = document.createElement('span');
  todoDel.textContent = "delete";
  
  icons.append(todoEdit, todoDel);
  
  listItem.append(checkbox, span, icons)
  
  return listItem;
}