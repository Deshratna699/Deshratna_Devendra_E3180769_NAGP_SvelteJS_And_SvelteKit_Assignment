import { json } from '@sveltejs/kit';
import { tasks } from '$lib/db';

export async function GET({ url }) {
  const category = url.searchParams.get('category');
  const status = url.searchParams.get('status');
  const sortBy = url.searchParams.get('sortBy');
  const sortOrder = url.searchParams.get('sortOrder') || 'asc';

  let filteredTasks = tasks;

  if (category) {
    filteredTasks = filteredTasks.filter(task => task.category === category);
  }

  if (status) {
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }

  if (sortBy) {
    filteredTasks = filteredTasks.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  return json(filteredTasks);
}

export async function POST({ request }) {
  const { title, description, category, dueDate, status, priority } = await request.json();
  const newTask = { id: tasks.length + 1, title, description, category, dueDate, status, priority };
  tasks.push(newTask);
  return json(newTask);
}

export async function PUT({ request }) {
  const { id, title, description, category, dueDate, status, priority } = await request.json();
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return json({ error: 'Task not found' }, { status: 404 });
  }

  tasks[taskIndex] = { id, title, description, category, dueDate, status, priority };
  return json(tasks[taskIndex]);
}

export async function DELETE({ request }) {
  const { id } = await request.json();
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return json({ error: 'Task not found' }, { status: 404 });
  }

  tasks.splice(taskIndex, 1);
  return json({ message: 'Task deleted' });
}
