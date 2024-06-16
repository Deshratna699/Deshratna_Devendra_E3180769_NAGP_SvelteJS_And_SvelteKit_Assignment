<script>
  import { authStore } from '$lib/stores/authStore';
  import { goto } from '$app/navigation';

  let user = {};

  $: {
    const authState = $authStore;
    user = authState.user;
  }

  function handleLogout() {
    localStorage.removeItem('authToken');
    authStore.set({ isAuthenticated: false, user: null });
    goto('/login');
  }
</script>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #333;
  }
  .profile-details {
    margin: 20px 0;
    text-align: left;
  }
  .profile-details p {
    margin: 5px 0;
  }
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 20px 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
  .btn:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  <h1>User Profile</h1>
  {#if user}
    <div class="profile-details">
      <p><strong>Name:</strong> Deshratna Devendra</p>
      <p><strong>Email:</strong> devendra.deshratna@nagarro.com</p>
      <p><strong>Member Since:</strong> 2019</p>
    </div>
    <button class="btn" on:click={handleLogout}>Logout</button>
  {/if}
</div>
