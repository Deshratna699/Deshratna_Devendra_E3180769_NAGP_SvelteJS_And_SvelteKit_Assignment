<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/login');
    }
  });
</script>

<h1>Home</h1>
<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
  <a href="/tasks/all">Tasks</a>
</nav>
<slot></slot>
