import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: Login
        },
        {
            path: '/signUp',
            name: 'SignUp',
            component: SignUp
        }
    ]
});

export default router;