<script>
  import { goto } from '$app/navigation';
  import { authStore } from '$lib/stores/authStore';
  import { onMount } from 'svelte';

  let isAuthenticated = false;

  $: isAuthenticated = $authStore.isAuthenticated;

  function navigateTo(path) {
    goto(path);
  }

  function logout() {
    localStorage.removeItem('authToken');
    authStore.set({ isAuthenticated: false, user: null });
    goto('/login');
  }
</script>

<style>
  nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    text-decoration: underline;
  }
</style>

<nav>
  <ul>
    <li on:click={() => navigateTo('/about')}>About</li>
    {#if !isAuthenticated}
      <li on:click={() => navigateTo('/register')}>Register</li>
      <li on:click={() => navigateTo('/login')}>Login</li>
    {/if}
    {#if isAuthenticated}
      <li on:click={() => navigateTo('/')}>Home</li>
      <li on:click={() => navigateTo('/tasks')}>Tasks</li>
      <li on:click={() => navigateTo('/profile')}>Profile</li>
      <li on:click={logout}>Logout</li>
    {/if}
  </ul>
</nav>
