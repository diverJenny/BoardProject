<!-- PageHeader.vue -->
<template>
  <header>
    <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
    <div id="nav">
      <router-link to="/">OK Board</router-link> |
      <router-link v-if="!isLoggedIn" :to="{ path: '/sign-in' }">Sign In</router-link> |
      <router-link v-if="!isLoggedIn" :to="{ path: '/sign-up' }">Sign Up</router-link>
      <button v-if="isLoggedIn" @click="logout">{{ username }}</button>
    </div>
  </header>
  <hr/>
</template>

<script>
import {inject, provide, ref} from "vue";

const isLoggedIn = inject("isLoggedIn");
const username = inject("username");

const logout = () => {
  // 로그아웃 처리 로직 작성
  // 로그아웃 후 isLoggedIn을 false로 설정하고 필요한 경우 추가 로직을 수행
};

const clearState = () => {
  // 상태 초기화 로직 작성
  isLoggedIn.value = false;
  username.value = "";
};

provide("logout", logout);
provide("clearState", clearState);
</script>