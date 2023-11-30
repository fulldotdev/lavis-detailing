<!-- <script lang="ts">
  import type { Form } from '@types'
  import { create } from 'api'

  export let form: Form | string

  async function onSubmit(event: Event) {
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

<form
  class="form"
  on:submit|preventDefault={onSubmit}
>
  <slot />
</form> -->
