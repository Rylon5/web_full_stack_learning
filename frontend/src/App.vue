<template>
  <GeneralNavbar></GeneralNavbar>
  <GeneralFooter></GeneralFooter>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-white);
}
</style>

<script>
import GeneralFooter from "@/components/footers/GeneralFooter.vue";
import GeneralNavbar from "@/components/navbars/GeneralNavbar.vue";

export default {
  components: {GeneralNavbar, GeneralFooter}
}

</script>