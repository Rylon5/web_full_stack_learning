<template>
  <nav>
    <router-link to="/users/register"> Register </router-link> |
    <router-link to="/users/login"> Login </router-link> |
    <router-link to="/users/find"> Find user </router-link> |
    <router-link to="/users"> User list </router-link>
  </nav>
  <hr>
  <div class="text-center">
    <div class="col-md-12 form-wrapper">
      <h2> Find User </h2>
      <form id="search-user-form" @submit.prevent="getUser">
        <div class="form-group col-md-12">
          <label for="id"> ID </label>
          <input type="number" id="id"  v-model="id" placeholder="Enter id" class="form-control" min="0">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit" id="submit_field"> Search User </button>
        </div>
        <p v-if="Object.keys(user).length"> {{ user.firstName }} {{ user.lastName }}, {{ user.age }} </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {server} from "@/utils/helper";
import UsersNavbar from "@/components/navbars/UsersNavbar.vue";

export default {
  components: {UsersNavbar},
  data() {
    return {
      id: null,
      user: {}
    };
  },
  methods: {
    getUser() {
      axios
          .get(`${server.baseURL}/users/${this.id}`)
          .then(data => (this.user = data.data));
    },
  }
};
</script>