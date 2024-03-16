<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import './assets/styles/main.css';
import NavBar from './components/layouts/Navbar.vue';
export default {
  components: {
    NavBar
  }
}
</script>