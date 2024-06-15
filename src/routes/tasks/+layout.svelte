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



<slot />
