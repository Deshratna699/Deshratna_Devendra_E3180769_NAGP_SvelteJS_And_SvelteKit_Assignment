import { writable } from 'svelte/store';

export const tasks = writable([]);

export function addTask(task) {
  tasks.update(t => {
    task.id = Date.now();
    return [...t, task];
  });
}

export function updateTask(updatedTask) {
  tasks.update(t =>
    t.map(task => (task.id === updatedTask.id ? updatedTask : task))
  );
}
