<script>
  import { onMount } from 'svelte';
  import { authStore, loadAuthState } from '$lib/stores/authStore';
  import { goto } from '$app/navigation';

  let isAuthenticated = false;

  authStore.subscribe((value) => {
    isAuthenticated = value.isAuthenticated;
  });

  onMount(() => {
    loadAuthState();
  });

  function handleLogout() {
    localStorage.removeItem('authToken');
    authStore.set({
      isAuthenticated: false,
      user: null,
    });
    goto('/');
  }
</script>

<nav>
  <a href="/register">Register</a>
  <a href="/login">Login</a>

  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/tasks">Task Manager</a>

  {#if isAuthenticated}
    <button on:click={handleLogout}>Logout</button>
  {:else}

  {/if}
</nav>

<slot />
