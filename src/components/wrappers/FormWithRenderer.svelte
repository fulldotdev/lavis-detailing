<!-- <script lang="ts">
  import type { Form } from '@types'
  import { create } from 'api'

  export let form: Form | string

  function getElement(type) {
    if (type == 'textarea') return 'textarea'
    else return 'input'
  }

  function getType(type) {
    if (getElement(type) != 'input') return
    if (type == 'number') return 'number'
    if (type == 'email') return 'email'
    if (type == 'text') return 'text'
    else return type
  }

  const getClass = (type) => {
    if (type == 'textarea') return 'textarea'
    if (type == 'checkbox') return 'cursor-pointer'
    else return 'input'
  }

  const onSubmit = async function (event: Event) {
    const formData = new FormData(event.target as HTMLFormElement)
    const dataObject = Object.fromEntries(formData)
    const dataToSend = Object.entries(dataObject).map(([name, value]) => ({
      field: name,
      value,
    }))
    await create({
      collection: 'submissions',
      data: {
        form: typeof form === 'string' ? form : form.id,
        submissionData: dataToSend,
      },
    })
    window.location.href = '/bedankt'
  }
</script>

{#if typeof form !== 'string'}
  <form
    class="form"
    on:submit|preventDefault={onSubmit}
  >
    {#if form.fields}
      {#each form.fields as field}
        <div
          class="
        {field.blockType == 'checkbox'
            ? 'border-hue6 pl-size3 rounded-size1 [&>label]:(p-size3 w-full) block flex flex-row-reverse items-center items-center justify-end border'
            : 'flex flex-col'}
        "
        >
          {#if 'label' in field}
            <label
              for={field.name}
              class="label"
            >
              {field.label}
            </label>
          {/if}
          <svelte:element
            this={getElement(field.blockType)}
            type={getType(field.blockType)}
            class={getClass(field.blockType)}
            required={field.required}
            name={field.name}
            id={field.name}
          />
        </div>
      {/each}
    {/if}
    {#if form.submitButtonLabel}
      <button
        type="submit"
        class="button look-solid hue-brand !text-black"
      >
        {form.submitButtonLabel}
      </button>
    {/if}
  </form>
{/if} -->
