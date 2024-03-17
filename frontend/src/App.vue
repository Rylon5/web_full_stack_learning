<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/users/login">User management</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <GeneralFooter></GeneralFooter>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17252A;
}

nav {
  padding: 30px 0 10px 0;
}

nav a {
  font-weight: bold;
  color: #17252A;
}

nav a.router-link-exact-active {
  color: #DEF2F1;
}
</style>

<script>
import GeneralFooter from "@/components/footers/GeneralFooter.vue";

export default {
  components: {GeneralFooter}
}

</script>