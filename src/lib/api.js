const API_URL = 'http://localhost:5184/api';

export async function register(user) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error('Failed to register');
  return res.json();
}

export async function login(credentials) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error('Failed to log in');
  return res.json();
}

export async function getTasks(filters = {}) {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${API_URL}/tasks?${query}`);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}

export async function addTask(task) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error('Failed to add task');
  return res.json();
}

export async function updateTask(task) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error('Failed to update task');
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error('Failed to delete task');
  return res.json();
}
