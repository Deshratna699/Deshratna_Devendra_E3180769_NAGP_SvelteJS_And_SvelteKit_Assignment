<script>
  import { createTask, updateTask } from '$lib/api';
  import { createEventDispatcher } from 'svelte';

  export let task = null;
  const dispatch = createEventDispatcher();

  let title = task ? task.title : '';
  let description = task ? task.description : '';

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (task) {
        await updateTask(task.id, { title, description });
      } else {
        await createTask({ title, description });
      }
      dispatch('taskAdded');
      title = '';
      description = '';
    } catch (error) {
      console.error('Failed to save task:', error);
    }
  }
</script>

<form on:submit={handleSubmit}>
  <label>
    Title:
    <input type="text" bind:value={title} required />
  </label>
  <label>
    Description:
    <input type="text" bind:value={description} required />
  </label>
  <button type="submit">{task ? 'Update' : 'Add'} Task</button>
</form>
