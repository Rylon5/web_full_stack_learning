<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/users/login">User management</router-link> |
    <router-link to="/projects/create">Projects</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <hr>
  <router-view/>
  <GeneralFooter></GeneralFooter>
</template>

<style>
:root {
  --main-white: #f0f0f0;
  --main-red: #be3144;
  --main-blue: #45567d;
  --main-gray: #303841;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-white);
}

nav {
  padding: 20px 0 10px 0;
}

nav a {
  font-weight: bold;
  color: var(--main-white);
}

nav a.router-link-exact-active {
  background-color: var(--main-blue);
}
</style>

<script>
import GeneralFooter from "@/components/footers/GeneralFooter.vue";

export default {
  components: {GeneralFooter}
}

</script>