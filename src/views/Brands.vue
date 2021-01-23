<template>
  <div class="overview">
    <h1>All brands</h1>
    <div class="brand-list">
      <div v-for="(item, index) in brands" :key="index" class="brand-list__item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.shortDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import brandsList from '@/composables/brandsList'

export default {
  name: 'Brands',
  setup() {
    const { brands } = brandsList()

    return {
      brands
    }
  }
}
</script>

<style scoped>
.brand-list__item {
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  max-width: 600px;
}
</style>