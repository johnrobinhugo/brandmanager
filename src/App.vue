<template>
  <div id="app">
    <main>
      <div class="sidebar">
        <p class="project-title">Brandmanager</p>
        <div class="menu">
          <div class="menu__item">
            <router-link :to="{name: 'brands'}" class="menu__item__link">All brands</router-link>
          </div>
          <div class="menu__item">
            <router-link :to="{name: 'add-new'}" class="menu__item__link">Add new</router-link>
          </div>
        </div>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'App',
  router
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  @import 'assets/styles/buttons.css';

  html {
    --base-font: 'Open Sans', sans-serif;
    --color-grey: #F1F1F1;
    --color-black: #080808;
    font-family: var(--base-font);
    background-color: var(--color-grey);
  }

  body {
    margin: 0;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: white;
    padding: 50px 30px;
    width: 250px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .main-content {
    padding: 50px 30px 30px 330px;
  }

  .project-title {
    font-size: 22px;
    font-weight: 700;
  }

  .menu__item {
    margin-top: 15px;
  }
</style>
