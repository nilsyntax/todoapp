export function TodoItem(todo, state) {
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  console.log("Here", checkbox.checked);
  checkbox.addEventListener("click", (e) => {
    e.preventDefault();
    state.checked(todo.id);
    console.log("clicked", todo.id, checkbox.checked);
  });
  
  const span = document.createElement("span");
  span.textContent = `${todo.name}: ${todo.id}`;

  const icons = document.createElement("div");
  icons.classList.add("itemIcon");

  const todoEdit = document.createElement("span");
  todoEdit.textContent = "edit";
  Object.assign(todoEdit.style, {
    backgroundColor: "royalblue",
    color: "white",
    padding: "4px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  });

  const todoDel = document.createElement("span");
  todoDel.textContent = "delete";

  icons.append(todoEdit, todoDel);

  listItem.append(checkbox, span, icons);

  return listItem;
}
