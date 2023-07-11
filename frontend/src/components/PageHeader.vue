<!-- PageHeader.vue -->
<template>
  <header>
    <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
    <div id="nav">
      <router-link to="/">OK Board</router-link> |
      <router-link to="/sign-in">Login</router-link> |
      <router-link to="/sign-up">Sign Up</router-link>
    </div>
  </header>
  <hr/>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>