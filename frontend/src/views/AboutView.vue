<template>
  <div class="card">
    <h2>About me</h2>
    <p>Greetings. I'm Gerrit, currently studying computer science at RWTH University. I got my bachelors degree in 2022 and am now working on my masters degree.
      This website is my way of learning full stack development, having a platform to host my other various projects on and building a portfolio website.
      It is built with nestjs, vuejs and sqlite. </p>
  </div>

  <div class="card">
    <h2>Contact information:</h2>
    <h3>Gerrit Koch</h3>
      <div class="contact">
        <div>Email: <a href="mailto:gerrit.h.koch@outlook.com">gerrit.h.koch@outlook.com</a></div>
        <div>LinkedIn: <a href="https://www.linkedin.com/in/gerrit-koch-43ba482a7/">Gerrit Koch</a></div>
      </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.contact {
  display: grid;
  align-content: space-between;
}

.contact a {
  color: lightblue;
}

.contact a:visited {
  color: lightblue;
}
</style>