import Vue from 'vue';
import Router from 'vue-router';

const Index = ()=>import('@/components/Index');
const JE = ()=>import('@/components/je/JE');
const PI= ()=>import('@/components/perInfo/PerInfo');
const Analyse=()=>import('@/components/analyse/Analyse');
Vue.use(Router);
const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/je',
        component: JE
    },
    {
        path: '/perInfo',
        component: PI
    },
    {
        path: '/analyse',
        component: Analyse
    }
]
const router = new Router({routes, mode:'history',base: '/',build:{assetsPublicPath:'/'}})
export default router