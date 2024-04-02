<template>
<div class="card">
  <h2>{{ title }}</h2>
  <p>{{ content }}</p>
</div>
</template>

<script>
export default {
  name: 'StandardCard',
  props: {
    title: String,
    content: String
  }
}
</script>

<style>

</style>