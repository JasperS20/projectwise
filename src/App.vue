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
  },
  computed: {
    checkIfAuthenticated() {
      const isAuthenticated = this.$store.getters.isAuthenticated;
      if (isAuthenticated === true) {
        return true;
      } else {
        this.$router.replace('/auth');
        return false;
      }
    }
  }
}
</script>