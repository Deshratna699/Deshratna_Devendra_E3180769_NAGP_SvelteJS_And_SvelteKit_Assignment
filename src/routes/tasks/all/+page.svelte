<script>
  import { onMount } from 'svelte';
  import CategoryFilter from '$lib/components/CategoryFilter.svelte';
  let tasks = [];
  let filteredTasks = [];
  let categories = ["Work", "Personal", "Urgent"]; // Example categories
  let selectedCategory = "";
  let sortOption = "date";

  onMount(async () => {
    const response = await fetch('/api/tasks');
    tasks = await response.json();
    filterTasks();
  });

  const filterTasks = () => {
    filteredTasks = tasks.filter(task => {
      return (selectedCategory ? task.category === selectedCategory : true);
    }).sort((a, b) => {
      if (sortOption === "date") return new Date(a.dueDate) - new Date(b.dueDate);
      if (sortOption === "priority") return a.priority - b.priority;
    });
  };

  $: filterTasks();
</script>

<CategoryFilter {categories} bind:selectedCategory on:categoryChange={filterTasks} />
<!-- Add sorting UI and bind sortOption -->
<ul>
  {#each filteredTasks as task}
    <li>{task.title}</li>
  {/each}
</ul>
