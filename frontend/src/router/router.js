import { createRouter, createWebHistory } from 'vue-router';
// import Home from "@"
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import Home from "@/views/Home.vue";


const routes = [
    {
        // route url path
        path: '/',
        // route로 연결할때 사용할 이름(필수X)
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'LoginPage',
        // route에서 불러올 컴포넌트
        component: Login
    },
    {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp
        // component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
    },
/*    {
        // user 다음에 오는 url을 name이라는 파라미터로 받아서 사용하겠다.
        // ex) user/test -> test라는 url이 넘어오면 name에는 test가 삽입되어 파라미터로 사용.
        path: 'user/:name',
        name: 'User',
        // component:
    }*/
/*    {
        // :catchAll(.*)은 위에서 선언한 path를 제외한 나머지 path는 전부 EooroPage component로 보내주는 역할
        path: '/:catchAll(.*)',
        name: 'ErrorPage',
        component:
    }*/
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
});

export default router;