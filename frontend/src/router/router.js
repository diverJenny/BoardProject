import { createRouter, createWebHistory } from 'vue-router';
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Home from "@/views/Home.vue";

/*const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
]*/

const routes = [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
        path: '/sign-in',
        component: () => import('@/views/SignIn.vue')
    },
    {
        path: '/sign-up',
        component: () => import('@/views/SignUp.vue')
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;