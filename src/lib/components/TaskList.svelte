<!-- src/lib/components/TaskList.svelte -->
<script>
  import { tasks } from '$lib/stores/taskStore';
</script>

<ul>
  {#each $tasks as task (task.id)}
    <li>
      <h3>{task.title || "No Title"}</h3>
      <p>{task.description || "No Description"}</p>
      <p>Due Date: {task.dueDate || "No Due Date"}</p>
      <p>Category: {task.category || "No Category"}</p>
      <p>Status: {task.status || "No Status"}</p>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 1em;
    padding: 1em;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  h3 {
    margin: 0 0 0.5em 0;
  }
  p {
    margin: 0.2em 0;
  }
</style>
