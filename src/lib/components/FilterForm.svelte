<!-- src/lib/components/FilterForm.svelte -->
<script>
  import { filters, sortOption } from '$lib/stores/taskStore';

  let category = 'All';
  let dueDate = 'All';
  let status = 'All';
  let sort = 'date';

  function applyFilters() {
    filters.set({ category, dueDate, status });
    sortOption.set(sort);
  }
</script>

<form on:submit|preventDefault={applyFilters}>
  <label>
    Category:
    <select bind:value={category}>
      <option>All</option>
      <option>Work</option>
      <option>Personal</option>
      <!-- Add more categories as needed -->
    </select>
  </label>

  <label>
    Due Date:
    <select bind:value={dueDate}>
      <option>All</option>
      <option>2024-06-01</option>
      <option>2024-06-02</option>
      <!-- Add more dates as needed -->
    </select>
  </label>

  <label>
    Status:
    <select bind:value={status}>
      <option>All</option>
      <option value="true">Completed</option>
      <option value="false">Pending</option>
    </select>
  </label>

  <label>
    Sort By:
    <select bind:value={sort}>
      <option value="date">Date</option>
      <option value="priority">Priority</option>
    </select>
  </label>

  <button type="submit">Apply Filters</button>
</form>
