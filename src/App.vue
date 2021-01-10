<template>
  <div id="app">
    <main>
      <div class="sidebar">
        <p class="project-title">Brandmanager</p>
        <div class="menu">
          <a class="button">All brands</a>
          <a class="button">Add new</a>
        </div>
      </div>
      <div class="main-content">
        <div class="brand-list">
          <div v-for="(item, index) in brands" :key="index" class="brand-list__item">
            {{ item.name }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import brandsList from '@/composables/brandsList'

export default {
  name: 'App',
  setup() {
    const { brands } = brandsList()

    return {
      brands
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap');
  @import 'assets/styles/buttons.css';

  html {
    --base-font: 'Work Sans', sans-serif;
    --color-blue: #013850;
    --color-yellow: #E9F100;
    --color-black: #080808;
    font-family: var(--base-font);
  }

  body {
    margin: 0;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--color-blue);
    padding: 50px 30px;
    width: 300px;
    box-sizing: border-box;
  }

  .main-content {
    padding: 50px 30px 30px 330px;
  }

  .project-title {
    font-size: 25px;
    font-weight: 700;
    color: white;
  }
</style>
