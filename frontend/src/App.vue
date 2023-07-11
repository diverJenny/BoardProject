<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="OK Board">
      <Header/>
    </v-app-bar>

<!--    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import Header from "@/components/PageHeader.vue";
</script>