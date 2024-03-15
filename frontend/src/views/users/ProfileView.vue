<template>
<h3>Welcome {{ $route.params.username }}</h3>
</template>

<script setup>

import {onMounted} from "vue";
import router from "@/router";
import {toast} from "vue3-toastify";

onMounted( () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push({ name: 'users/login'});
    toast.error('Please log in to access a profile');
  }
  else console.log(token);
})
</script>

<style scoped>

</style>