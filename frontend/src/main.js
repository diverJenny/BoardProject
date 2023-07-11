import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import vuetify from './plugins/vuetify'
import axios from "axios";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: 'http://api.example.com', // API의 기본 URL
    timeout: 5000, // 요청의 최대 대기 시간 (밀리초)
});

createApp(App)
    .use(router)
    .use(vuetify)
    .provide('axios', axiosInstance) // Vue 컴포넌트에서 axios를 사용할 수 있도록 전역으로 제공
    .mount('#app');