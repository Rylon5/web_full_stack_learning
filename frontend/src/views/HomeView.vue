<template>
  <div>

    <div class="text-center">
      <h1>Welcome to my first Vue page</h1>
      <p> This is an app built with Nest.js, Vue.js and SQLite</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { server } from "@/utils/helper";
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
          .get(`${server.baseURL}/user`)
          .then(data => (this.users = data.data));
    },
    deleteUser(id) {
      axios.delete(`${server.baseURL}/user/delete?id=${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>