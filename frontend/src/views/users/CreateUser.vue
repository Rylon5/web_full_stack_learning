<template>
  <nav>
    <router-link to="/users/create"> Create new user </router-link> |
    <router-link to="/users/find"> Find user </router-link> |
    <router-link to="/users"> User list </router-link>
  </nav>
  <hr>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Create User </h2>
      <form id="create-user-form" @submit.prevent="createUser">
        <div class="form-group col-md-12">
          <label for="firstName"> First Name </label>
          <input type="text" id="firstName" v-model="firstName" name="firstName" class="form-control" placeholder="Enter first name">
        </div>
        <div class="form-group col-md-12">
          <label for="lastName"> Last Name </label>
          <input type="text" id="lastName" v-model="lastName" name="lastName" class="form-control" placeholder="Enter last name">
        </div>
        <div class="form-group col-md-12">
          <label for="age"> Age </label>
          <input type="number" id="age"  v-model="age" placeholder="Enter age" class="form-control" min="0">
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Create User </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "@/utils/helper";
import router from "../../router";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
    };
  },
  methods: {
    createUser() {
      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
      };
      this.firstName = '';
      this.lastName = '';
      this.age = null;
      this.__submitToServer(userData);
    },
    __submitToServer(data) {
      // eslint-disable-next-line no-unused-vars
      axios.post(`${server.baseURL}/user`, data).then(data => {
        router.push({ name: "create" });
      });
    }
  }
};
</script>