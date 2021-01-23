<template>
  <div>
    <h1>Add new</h1>
    <form class="form">
      <div class="form__item">
        <label>Name</label>
        <input type="text" v-model="name">
      </div>
      <div class="form__item">
        <label>Short description</label>
        <textarea v-model="shortDesc" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'AddNew',
  setup() {
    const name = ref('')
    const shortDesc = ref('')

    return {
      name,
      shortDesc
    }
  }
}
</script>