<template>
  <nav>
    <router-link to="/user/create"> Create new user </router-link> |
    <router-link to="/user/find"> Find user </router-link> |
    <router-link to="/user"> User list </router-link>
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
          .get(`${server.baseURL}/user`)
          .then(data => (this.users = data.data));
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