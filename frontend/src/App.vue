<template>
  <GeneralNavbar></GeneralNavbar>
  <GeneralFooter></GeneralFooter>
</template>

<style>
:root {
  --main-white: #f0f0f0;
  --main-red: #be3144;
  --main-blue: #45567d;
  --main-gray: #303841;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-white);
  background: var(--main-gray);
  min-height: 100vh;
}

fieldset {
  width: 25%;
  margin: 20px auto;
  box-shadow: 3px 3px 10px 2px var(--main-gray);
  border-radius: 10px;
  border: none;
  background: var(--main-white);
  color: var(--main-gray)
}

fieldset legend {
  position: relative;
  top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
}

.submit {
  width: 33%;
  height: 40px;
  border: 1px solid #17252A;
  background: transparent;
  color: #17252A;
  margin-top: 5px;
}

.submit:hover {
  background: #d0d0d0;
}

.form-group {
  margin: auto;
  padding: 5px 0;
}

.form-group:first-of-type {
  padding: 0;
}

input {
  vertical-align: middle;
  background: transparent;
  border: none;
  border-bottom: 1px solid #17252A;
  color: #17252A;
  height: 40px;
  width: 90%;
}

input:focus, input:hover {
  outline: none;
  background: #d0d0d0;
  border-radius: 3px;
}

fieldset label {
  display: block;
  text-align: left;
  margin: 2px 0;
}

hr {
  color: var(--main-white);
  margin-bottom: 10px;
}

nav {
  width: 100%;
  height: 50px;
  background-color: var(--main-red);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

nav a {
  display: block;
  padding: 15px 1.2rem;
  font-weight: bold;
  color: var(--main-white);
  height: 100%;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background-color: var(--main-blue);
}

a {
  color: lightblue;
}

.card {
  margin: 25px 0 25px 25%;
  width: 50%;
  text-align: center;
  box-shadow: 2px 2px 4px 2px #17252A;
  padding: 10px 8px;
  border-radius: 5px 5px 5px 5px;
  transition: 0.2s;
  background-color: var(--main-blue);
}

.card:hover {
  box-shadow: 2px 4px 8px 4px #17252A;
}
</style>

<script>
import GeneralFooter from "@/components/footers/GeneralFooter.vue";
import GeneralNavbar from "@/components/navbars/GeneralNavbar.vue";

export default {
  components: {GeneralNavbar, GeneralFooter}
}

</script>