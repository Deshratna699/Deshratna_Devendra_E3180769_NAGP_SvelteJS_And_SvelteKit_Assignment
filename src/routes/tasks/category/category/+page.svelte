<script context="module">
  export async function load({ params }) {
    const category = params.category;
    const response = await fetch(`/api/tasks?category=${category}`);
    const tasks = await response.json();
    return { props: { tasks, category } };
  }
</script>

<script>
  export let tasks = [];
  export let category = '';
</script>

<h1>Tasks in {category} category</h1>
<ul>
  {#each tasks as task}
    <li>{task.title}</li>
  {/each}
</ul>
