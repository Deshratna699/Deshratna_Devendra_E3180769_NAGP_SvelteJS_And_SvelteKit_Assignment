// src/lib/api/tasks.js
export async function fetchTasks() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const tasks = await response.json();
  return tasks;
}
