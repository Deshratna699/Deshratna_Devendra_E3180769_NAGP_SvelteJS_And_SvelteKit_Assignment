<script>
  import { register } from '$lib/api';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  async function handleRegister() {
    try {
      await register({ email, password });
      goto('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  }
</script>

<h1>Register</h1>
<form on:submit|preventDefault={handleRegister}>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>
  <button type="submit">Register</button>
</form>
