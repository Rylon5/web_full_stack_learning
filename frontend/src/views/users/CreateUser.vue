<template>
  <nav>
    <router-link to="/users/register"> Register </router-link> |
    <router-link to="/users/find"> Find user </router-link> |
    <router-link to="/users"> User list </router-link>
  </nav>
  <hr>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Register new user </h2>
      <form id="create-user-form" @submit.prevent="registerUser">
        <div class="form-group col-md-12">
          <label for="username"> Username </label>
          <input type="text" id="username" v-model="username" name="username" class="form-control" placeholder="Enter username" required>
        </div>
        <div class="form-group col-md-12">
          <label for="password"> Password </label>
          <input type="password" id="password" v-model="password" name="password" class="form-control" placeholder="Enter password" required>
        </div>
        <div class="form-group col-md-12">
          <label for="password_repeat"> Repeat password </label>
          <input type="password" id="password_repeat" v-model="password_repeat" name="password_repeat" class="form-control" placeholder="Enter password again" required>
        </div>
        <div class="form-group col-md-12">
          <label for="firstName"> First Name </label>
          <input type="text" id="firstName" v-model="firstName" name="firstName" class="form-control" placeholder="Enter first name" required>
        </div>
        <div class="form-group col-md-12">
          <label for="lastName"> Last Name </label>
          <input type="text" id="lastName" v-model="lastName" name="lastName" class="form-control" placeholder="Enter last name" required>
        </div>
        <div class="form-group col-md-12">
          <label for="age"> Age </label>
          <input type="number" id="age"  v-model="age" placeholder="Enter age" class="form-control" min="0" required>
        </div>
        <div class="form-group col-md-12">
          <label for="mail"> Email </label>
          <input type="email" id="mail"  v-model="mail" placeholder="Enter mail adress" class="form-control" required>
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Register user </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "@/utils/helper";
import router from "../../router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      username: "",
      password: "",
      password_repeat: "",
      firstName: "",
      lastName: "",
      age: "",
      mail: "",
    };
  },
  methods: {
    registerUser() {
      let userData = {
        username: this.username,
        password: this.password,
        password_repeat: this.password_repeat,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        mail: this.mail,
      };
      if (this.password === this.password_repeat) {
        this.username = '';
        this.password = '';
        this.password_repeat = '';
        this.firstName = '';
        this.lastName = '';
        this.age = null;
        this.mail = '';
        this.__submitToServer(userData);
      }
      else {
        toast.error("Passwords must match");
      }
    },
    __submitToServer(data) {
      // eslint-disable-next-line no-unused-vars
      axios.post(`${server.baseURL}/auth/register/`, data).then(response => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>