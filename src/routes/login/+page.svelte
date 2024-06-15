<script>
  import { authStore } from '$lib/stores/authStore';
  import { login } from '$lib/api';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  async function handleLogin() {
    try {
      const user = await login({ email, password });
      localStorage.setItem('authToken', JSON.stringify(user));
      authStore.set({
        isAuthenticated: true,
        user: user,
      });
      goto('/tasks');
    } catch (error) {
      console.error('Login failed', error);
    }
  }
</script>

<h1>Login</h1>
<form on:submit|preventDefault={handleLogin}>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>
  <button type="submit">Login</button>
</form>
