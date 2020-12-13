<template>
  <p>App</p>
</template>

<script>

export default {
  name: 'App',
  setup() {

    // Extract this into some kind of global function using the composition API concept
    // async function fetchBrandsApi(url = '') {
    //   const response = await fetch(url)
    //   return response.json()
    // }

    // fetchBrandsApi('http://localhost:8000/brands')
    //   .then(data => {
    //     console.log(data)
    //   })
  }
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
