<script>
  export let name
  export let labelText
  export let options
</script>

<div class="flex w-full flex-col">
  <label
    class="label"
    for={name}>{labelText}</label
  >
  <select
    class="select rounded-size2 p-2"
    {name}
    id={name}
  >
    {#each options.data as option}
      <option value={option.value}>{option.name}</option>
    {/each}
  </select>
</div>
