<!-- Login.vue -->
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
          v-model="state.form.email"
          label="e-mail"
          :rules="emailRules"
      ></v-text-field>

      <v-text-field
          v-model="state.form.password"
          label="password"
          :rules="passwordRules"
      ></v-text-field>

      <v-btn block class="mt-2" @click="submit()">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import {reactive} from "vue";
// import {stat} from "@babel/core/lib/gensync-utils/fs";
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
      axios.post("/account/login", state.form).then((res) => {
        console.log(res);
        alert("로그인 하였습니다.");
      })
    }

    return {state, submit}
  }
};
</script>