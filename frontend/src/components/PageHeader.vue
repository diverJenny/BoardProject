<!-- PageHeader.vue -->
<template>
  <header>
    <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
    <div id="nav">
      <router-link to="/">OK Board</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signUp">Sign Up</router-link>
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