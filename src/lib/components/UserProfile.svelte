<script>
  export let user;
</script>

<div class="user-profile">
  <img src={user.avatar} alt="User Avatar" />
  <h2>{user.name}</h2>
  <p>{user.email}</p>
  <!-- Add more user details as needed -->
</div>
