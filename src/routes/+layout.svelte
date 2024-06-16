<script>
  import Nav from '$lib/Nav.svelte';
  import { onMount } from 'svelte';
  import { loadAuthState } from '$lib/stores/authStore';

  onMount(() => {
    loadAuthState();
  });
</script>

<Nav />

<main>
  <slot />
</main>
