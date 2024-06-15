<script>
  export let categories = [];
  export let selectedCategory = '';
  const handleChange = (event) => {
    selectedCategory = event.target.value;
    const customEvent = new CustomEvent('categoryChange', {
      detail: { category: selectedCategory },
    });
    dispatchEvent(customEvent);
  };
</script>

<select on:change={handleChange}>
  <option value="">All Categories</option>
  {#each categories as category}
    <option value={category} selected={category === selectedCategory}>{category}</option>
  {/each}
</select>
