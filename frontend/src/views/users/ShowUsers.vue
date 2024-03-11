<template>
  <div class="wrapper">
    <UsersNavbar></UsersNavbar>
  </div>
  <div class="container text-center">
    <h5><span class="glyphicon glyphicon-time"></span> Users: </h5>
  </div>
  <table class="container text-center">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Age</th>
    </tr>
    </thead>
    <tbody v-for="user in users" :key="user.id">
    <tr>
      <td>
        {{ user.id }}
      </td>
      <td>
        {{ user.firstName }}
      </td>
      <td>
        {{ user.lastName }}
      </td>
      <td>
        {{ user.age }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { server } from "@/utils/helper";
import axios from "axios";
import router from "../../router";
import UsersNavbar from "@/components/navbars/UsersNavbar.vue";
export default {
  components: {UsersNavbar},
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

   table {
     border-collapse: collapse;
     border: 2px solid rgb(140 140 140);
     font-family: sans-serif;
     font-size: 0.8rem;
     letter-spacing: 1px;
     margin-left: auto;
     margin-right: auto;
   }

  th, td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
  }

  td {
    text-align: center;
  }
</style>