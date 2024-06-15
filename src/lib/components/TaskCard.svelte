<script>
  export let task;
</script>

<div class="task-card">
  <h2>{task.title}</h2>
  <p>{task.description}</p>
  <p>Due Date: {task.dueDate}</p>
  <p>Category: {task.category}</p>
</div>

<style>
  .task-card {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
  }
  .task-card h2 {
    margin: 0 0 0.5em 0;
  }
  .task-card p {
    margin: 0.5em 0;
  }
</style>
