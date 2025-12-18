const KEY = "todos";

export function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function load() {
  // console.log(JSON.parse(localStorage.getItem(KEY) || "[]"));
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}
