<!-- SignIn.vue -->
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submit">
      <v-text-field
          v-model="state.form.email"
          label="e-mail"
      ></v-text-field>

      <v-text-field
          v-model="state.form.password"
          label="password"
      ></v-text-field>

      <v-btn block class="mt-2" @click="submit()">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import router from "@/router/router";

export default {
  // methods: {stat},
  setup() {
    const state = reactive({
      form: {
        email: "",
        password: ""
      }
    });

    const submit = () => {
      axios.post("/sign-api/sign-in", state.form).then((res) => {
        // 로그인 성공한 경우
        console.log(res.data);
        // alert("로그인 하였습니다.");
        router.push("/");
      })
          .catch(error => {
            // 로그인 실패한 경우
            console.log(error);
            alert("아이디와 비밀번호를 확인해 주세요.");
          });
    };

    return {state, submit}
  }
};
</script>