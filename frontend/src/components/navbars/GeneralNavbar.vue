<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/users/login">User management</router-link> |
    <router-link to="/projects/create">Projects</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/404">Error 404</router-link> |
    <router-link to="/501">Error 501</router-link>
  </nav>
  <hr>
  <router-view/>
</template>

<script setup>

</script>

<style scoped>

</style>