<template>
  <UsersNavbar/>
  <div class="container">
    <form class="account-info-form">
      <fieldset>
        <h1>Welcome to your profile, <span class="username">{{ $route.params.username }}</span></h1>
      </fieldset>
    </form>

    <form>
      <fieldset>

      </fieldset>
    </form>

    <form class="account-update-form" @submit.prevent="updateUser">
      <fieldset class="account-update-fieldset">
        <legend>Change account information</legend>
        <div class="form-group col-md-12">
          <label for="username"> Username </label>
          <input type="text" id="username" v-model="username" name="username" class="form-control" placeholder="Enter username">
        </div>
        <div class="form-group col-md-12">
          <label for="password"> Password </label>
          <input type="password" id="password" v-model="password" name="password" class="form-control" placeholder="Enter password">
        </div>
        <div class="form-group col-md-12">
          <label for="password_repeat"> Repeat password </label>
          <input type="password" id="password_repeat" v-model="password_repeat" name="password_repeat" class="form-control" placeholder="Enter password again">
        </div>
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
        <div class="form-group col-md-12">
          <label for="mail"> Email </label>
          <input type="email" id="mail"  v-model="mail" placeholder="Enter mail address" class="form-control">
        </div>
      </fieldset>
    </form>

    <form class="account-delete-form" @submit.prevent="deleteUser">
      <fieldset>
        <label for="account-delete" class="account-delete-label">Delete your account?</label>
        <button class="btn account-delete" id="account-delete" name="account-delete"> Confirm </button>
      </fieldset>
    </form>
  </div>
</template>

<script>

import UsersNavbar from "@/components/navbars/UsersNavbar.vue";
import router from "@/router";
import axios from "axios";
import {server} from "@/utils/helper";
import {toast} from "vue3-toastify";
/*import {onMounted} from "vue";
import router from "@/router";
import {toast} from "vue3-toastify";

onMounted( () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push({ name: 'users/login'});
    toast.error('Please log in to access a profile');
  }
  else console.log(token);
})*/

// const route = useRouter().currentRoute.value;

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
    deleteUser() {
      let userData = {
        username: this.$route.params.username,
      };
      this.__submitDeleteToServer(userData);
    },
    __submitDeleteToServer(data) {
      axios.delete(`${server.baseURL}/users/${data.username}`)
          .then(() => router.push({name: "home"}))
          .then(() => toast.success('User successfully deleted'))
    },
    updateUser() {
      let userdata = {
        username: this.username,
        password: this.password,
        password_repeat: this.password_repeat,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        mail: this.mail,
      };
      this.__submitUpdateToServer(userdata)
    },
    __submitUpdateToServer(data) {
      axios.patch(`${server.baseURL}/users/${data.username}`, data)
          .then(() => router.push({name: "users/:profile"}))
          .then(() => toast.success('User information successfully updated'))
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
}

form {
  width: 40%;
  margin: 20px auto;
}

form fieldset {
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
  position: relative;
}

label {
  text-align: center;
}

.account-delete {
  background-color: red;
  border: none;
}

.account-delete:active {
  background-color: orangered;
  border: none;
}

.form-control[type="number"] {
  appearance: textfield;
}

.username {
  color: firebrick;
}
</style>