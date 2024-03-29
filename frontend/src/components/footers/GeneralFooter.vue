<script setup>

</script>

<template>
<Footer>
  <div class="general-footer">
    <hr>
    <p>You like this project or have any ideas to make it even better?</p>
    <p>Then don't hesitate to <router-link to="/about">contact</router-link> me.</p>
  </div>
</Footer>
</template>

<style scoped>
.general-footer, hr {
  width: 100%;
  margin: auto;
  font-size: 90%;
}

.general-footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
  background-color: var(--main-red);
}

.general-footer a:visited, .general-footer a:active {
  color: blue;
}

hr {
  margin-bottom: 10px;
}

</style>