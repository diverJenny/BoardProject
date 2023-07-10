<!-- Login.vue -->
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
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
        console.log(res);
        alert("로그인 하였습니다.");
      })
    }

    return {state, submit}
  }
};
</script>