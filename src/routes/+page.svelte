<script>
  import { goto } from '$app/navigation';
  import { authStore } from '$lib/stores/authStore';
  import { onMount } from 'svelte';

  let isAuthenticated = false;

  $: isAuthenticated = $authStore.isAuthenticated;

  onMount(() => {
    if (!isAuthenticated) {
      goto('/login');
    }
  });
</script>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  h1 {
    color: #333;
  }
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  .btn:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  <h1>Welcome to Your Personal Task Manager</h1>
  <p>Manage your tasks efficiently and effectively.</p>
  <a href="/tasks" class="btn">Go to Tasks</a>
  <a href="/profile" class="btn">View Profile</a>
</div>
