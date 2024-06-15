<!-- src/lib/components/LoginForm.svelte -->
<script>
  import { handleLogin } from '$lib/stores/userStore';
  let email = '';
  let password = '';

  async function login() {
    await handleLogin(email, password);
  }
</script>

<form on:submit|preventDefault={login}>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required>
  </div>
  <button type="submit">Login</button>
</form>
