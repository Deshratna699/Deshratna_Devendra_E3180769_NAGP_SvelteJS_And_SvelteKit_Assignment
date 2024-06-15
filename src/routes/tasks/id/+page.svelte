<script context="module">
  export async function load({ params }) {
    const id = params.id;
    const response = await fetch(`/api/tasks/${id}`);
    const task = await response.json();
    return { props: { task } };
  }
</script>

<script>
  export let
</script>

<h1>{task.title}</h1>
<p>{task.description}</p>
<p>Due date: {task.dueDate}</p>
<!-- Add more task details as needed -->
