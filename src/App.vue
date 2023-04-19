<template>
  <div>
    <!-- <HomePage /> -->
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
#app {
  font-family: 'Karla', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
