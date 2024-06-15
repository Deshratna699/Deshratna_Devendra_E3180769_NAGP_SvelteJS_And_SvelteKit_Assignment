<!-- src/lib/components/RegisterForm.svelte -->
<script>
  import { register } from '$lib/api/auth';
  import { user } from '$lib/stores/userStore';
  let name = '';
  let email = '';
  let password = '';

  async function registerUser() {
    try {
      const { user: registeredUser, token } = await register(name, email, password);
      user.set({ isAuthenticated: true, data: registeredUser });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
</script>

<form on:submit|preventDefault={registerUser}>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} required>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required>
  </div>
  <button type="submit">Register</button>
</form>
