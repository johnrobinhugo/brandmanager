<template>
  <div id="app">
    <p>{{ brands}}</p>
  </div>
</template>

<script>
import brandsList from '@/composables/brandsList'

export default {
  name: 'App',
  setup() {
    const brands = brandsList()

    return {
      brands
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
