import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: Login
    },
    {
        path: '/singUp',
        name: 'SignUp',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router