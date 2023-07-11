<!-- SignIn.vue -->
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submit">
      <v-text-field v-model="state.form.email" label="e-mail"></v-text-field>
      <v-text-field v-model="state.form.password" label="password"></v-text-field>

      <v-btn block class="mt-2" @click="submit">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<!--<script setup>-->
<script>
import { reactive, ref } from "vue";
import axios from "axios";
import router from "@/router/router";

const state = reactive({
  form: {
    email: "",
    password: ""
  }
});

const isLoggedIn = ref(false);
const username = ref("");

const submit = () => {
  axios
      .post("/sign-api/sign-in", state.form)
      .then((res) => {
        // 로그인 성공한 경우
        isLoggedIn.value = true;
        username.value = res.data.username;
        alert(`${username.value}님 환영합니다.`);
        router.push("/");
      })
      .catch((error) => {
        // 로그인 실패한 경우
        console.log(error);
        alert("이메일과 비밀번호를 확인해 주세요.");
      });
};

export { state, isLoggedIn, username, submit };
</script>