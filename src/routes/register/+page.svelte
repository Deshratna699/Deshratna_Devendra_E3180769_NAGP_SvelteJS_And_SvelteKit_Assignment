<script>
  import { register } from '$lib/api';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let confirmPassword = '';

  async function handleRegister() {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await register({ email, password });
      alert('Registration successful. Please log in.');
      goto('/login');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed: ' + error.message);
    }
  }
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  <h1>Register</h1>
  <form on:submit|preventDefault={handleRegister}>
    <input type="email" bind:value={email} placeholder="Email" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <input type="password" bind:value={confirmPassword} placeholder="Confirm Password" required />
    <button type="submit">Register</button>
  </form>
</div>
