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

<h1>Task Manager</h1>

<div>
  <label>Category:</label>
  <input type="text" bind:value={category} />
  <label>Status:</label>
  <input type="text" bind:value={status} />
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

<div>
  <h2>Add Task</h2>
  <label>Title:</label>
  <input type="text" bind:value={newTask.title} />
  <label>Description:</label>
  <input type="text" bind:value={newTask.description} />
  <label>Category:</label>
  <input type="text" bind:value={newTask.category} />
  <label>Due Date:</label>
  <input type="date" bind:value={newTask.dueDate} />
  <label>Status:</label>
  <input type="text" bind:value={newTask.status} />
  <label>Priority:</label>
  <input type="text" bind:value={newTask.priority} />
  <button on:click={handleAddTask}>Add Task</button>
</div>

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
