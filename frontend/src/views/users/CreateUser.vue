<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <UsersNavbar/>
  <div>
    <form id="create-user-form" @submit.prevent="registerUser">
      <fieldset class="col-md-12 form-wrapper">
      <legend> Register new user </legend>
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
          <input type="email" id="mail"  v-model="mail" placeholder="Enter mail address" class="form-control" required>
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success submit" type="submit"> Sign up </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "@/utils/helper";
import router from "../../router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import UsersNavbar from "@/components/navbars/UsersNavbar.vue";

export default {
  components: {UsersNavbar},
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
      axios.post(`${server.baseURL}/auth/register/`, data)
          .then(() => {router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped>
.form-control[type="number"] {
  appearance: textfield;
}
</style>