<script>
  import { onMount } from 'svelte';
  import { getTasks, addTask, updateTask, deleteTask } from '$lib/api';
  import { authStore } from '$lib/stores/authStore';
  import { goto } from '$app/navigation';

  let tasks = [];
  let category = '';
  let status = '';
  let sortBy = '';
  let sortOrder = 'asc';
  let newTask = { title: '', description: '', category: '', dueDate: '', status: '', priority: '' };
  let isAuthenticated = false;

  $: isAuthenticated = $authStore.isAuthenticated;

  onMount(async () => {
    if (!isAuthenticated) {
      goto('/login');
    } else {
      await fetchTasks();
    }
  });

  async function fetchTasks() {
    tasks = await getTasks({ category, status, sortBy, sortOrder });
  }

  async function handleAddTask() {
    await addTask(newTask);
    newTask = { title: '', description: '', category: '', dueDate: '', status: '', priority: '' };
    await fetchTasks();
  }

  async function handleUpdateTask(task) {
    await updateTask(task);
    await fetchTasks();
  }

  async function handleDeleteTask(id) {
    await deleteTask(id);
    await fetchTasks();
  }
</script>

<style>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .filters, .add-task, .tasks {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input, select, button {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background: white;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  li strong {
    font-size: 1.2em;
  }
  li p {
    margin: 5px 0;
  }
  li button {
    margin-right: 10px;
  }
</style>

<div class="container">
  <h1>Task Manager</h1>

  <div class="filters">
    <label>Category:</label>
    <select bind:value={category}>
      <option value="">Select...</option>
      <option value="work">Work</option>
      <option value="personal">Personal</option>
    </select>

    <label>Status:</label>
    <select bind:value={status}>
      <option value="">Select...</option>
      <option value="Initiated">Initiated</option>
      <option value="InProgress">InProgress</option>
      <option value="Completed">Completed</option>
    </select>

    <label>Sort By:</label>
    <select bind:value={sortBy}>
      <option value="">Select...</option>
      <option value="dueDate">Due Date</option>
      <option value="priority">Priority</option>
    </select>

    <label>Sort Order:</label>
    <select bind:value={sortOrder}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>

    <button on:click={fetchTasks}>Filter</button>
  </div>

  <div class="add-task">
    <h2>Add Task</h2>
    <label>Title:</label>
    <input type="text" bind:value={newTask.title} />

    <label>Description:</label>
    <input type="text" bind:value={newTask.description} />

    <label>Category:</label>
    <select bind:value={newTask.category}>
      <option value="">Select...</option>
      <option value="work">Work</option>
      <option value="personal">Personal</option>
    </select>

    <label>Due Date:</label>
    <input type="date" bind:value={newTask.dueDate} />

    <label>Status:</label>
    <select bind:value={newTask.status}>
      <option value="">Select...</option>
      <option value="Initiated">Initiated</option>
      <option value="InProgress">InProgress</option>
      <option value="Completed">Completed</option>
    </select>

    <label>Priority:</label>
    <input type="text" bind:value={newTask.priority} />

    <button on:click={handleAddTask}>Add Task</button>
  </div>

  <div class="tasks">
    <h2>Tasks</h2>
    <ul>
      {#each tasks as task (task.id)}
        <li>
          <strong>{task.title}</strong>
          <p>{task.description}</p>
          <p>Category: {task.category}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          <button on:click={() => handleUpdateTask(task)}>Edit</button>
          <button on:click={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      {/each}
    </ul>
  </div>
</div>
