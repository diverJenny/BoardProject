<!-- SignUp.vue -->
<template>
  <v-card
      class="mx-auto"
      max-width="344"
      title="User Registration"
  >
    <v-container>
      <v-text-field
          v-model="name"
          color="primary"
          label="Name"
          variant="underlined"
      ></v-text-field>

      <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
      ></v-text-field>

      <v-text-field v-model="password" label="Password" type="password" variant="underlined"></v-text-field>
      <v-text-field v-model="passwordConfirm" label="Confirm Password" type="password"
                    variant="underlined"></v-text-field>

      <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn block color="success" @click="submitRegistration()">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import axios from "axios";

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      terms: false,
    };
  },
  methods: {
    submitRegistration() {
      // 유효성 검사
      if (!this.name || !this.email || !this.password || !this.passwordConfirm || !this.terms) {
        alert('모든 필드를 입력하고 약관에 동의해야 합니다.');
        return;
      }
      if (this.password !== this.passwordConfirm) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
      }

      // 회원가입 API 요청
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios.post('/sign-api/sign-up', userData)
          .then((response) => {
            console.log(response.data);
            alert('회원가입이 완료되었습니다.');
            // 회원가입 성공 후 리다이렉트 등 필요한 동작 수행
          })
          .catch((error) => {
            console.error(error);
            alert('회원가입에 실패했습니다.');
          });
    },
  },
};
</script>