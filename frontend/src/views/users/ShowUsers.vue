<template>
  <nav>
    <router-link to="/users/create"> Create new user </router-link> |
    <router-link to="/users/find"> Find user </router-link> |
    <router-link to="/users"> User list </router-link>
  </nav>
  <div class="text-center">
    <div class="col-sm-12">
      <hr>
      <h5><span class="glyphicon glyphicon-time"></span> Users by id: </h5>
      <div class="col-md-4" v-for="user in users" :key="user.id">
      <p> {{ user.id }}: {{ user.firstName }} {{ user.lastName }}, {{ user.age }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { server } from "@/utils/helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      users: []
    };
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios
          .get(`${server.baseURL}/users`)
          .then(response => (this.users = response.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>

<style>
  h5 {
    font-weight: bold;
    font-size: large;
  }
</style>