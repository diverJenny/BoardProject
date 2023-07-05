<template>
  <div id="app">
    <nav>
      <router-link to="/">OK Board</router-link>
      <!--   to 속성은 router.js에서 선언한 path와 연결
      :to를 사용하면 router.js에 설정한 name을 사용할 수 있음.(path가 아닌 name과 매칭)   -->
      <router-link :to="{name: 'LoginPage'}">Log in</router-link>
      <router-link to="/signUp">Sign Up</router-link>
    </nav>
      <v-app>
        <v-main>
          <!-- router.js에서 선언해둔 component가 보여지는 자리 -->
          <router-view/>
        </v-main>
      </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
