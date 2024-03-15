<template>
  <UsersNavbar/>
  <div class="text-center">
    <div class="col-md-12 form-wrapper">
      <form id="login-user-form" @submit.prevent="loginUser">
        <fieldset>
          <legend>Login</legend>
          <div class="form-group col-md-12">
            <label for="username"> Username: </label>
            <input type="text" v-model="username" id="username" placeholder="Enter username" class="form-control" required>
          </div>
          <div class="form-group col-md-12">
            <label for="password" class="password-label"> Password: </label>
            <input type="text" v-model="password" id="password" placeholder="Enter password" class="form-control" required>
          </div>
          <div class="form-group col-md-4 pull-right">
            <button class="btn btn-success" type="submit"> Login user </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {server} from "@/utils/helper";
import router from "@/router";
import {toast} from "vue3-toastify";
import UsersNavbar from "@/components/navbars/UsersNavbar.vue";

export default {
  components: {UsersNavbar},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      let loginData = {
        username: this.username,
        password: this.password,
      };
      this.password = '';
      this.__submitLoginToServer(loginData)
    },
    __submitLoginToServer(data) {
      try {
        axios.post(`${server.baseURL}/auth/login`, data).then(response => {
          localStorage.setItem('token', response.headers['access_token'])}).then(() => {
          router.push({name: `users/:${data.username}`})
        })
      }
      catch (error) {
        console.log('Error logging in: ' + error.message)
        router.push({name: 'users/login'})
        toast.error('Login failed, wrong username or password')
      }
    }
  }
}
</script>

<style scoped>
* {
  font-size: 17px;
}

fieldset {
  width: 25%;
  margin: auto;
}

.form-group {
  margin: auto;
  padding: 5px 0;
}

input {
  width: 75%;
  margin: auto;
}

.btn-success {
  width: auto;
}

.password-label {
  padding-right: 2px;
}
</style>