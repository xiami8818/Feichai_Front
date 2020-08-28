import Vue from 'vue';
import Router from 'vue-router';
const Index = ()=>import('@/components/Index');
const Code = ()=>import('@/components/code/Code');
const JE = ()=>import('@/components/je/JE');
const PI= ()=>import('@/components/perInfo/PerInfo')
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
        path: '/code',
        component: Code
    },
    {
        path: '/je',
        component: JE
    },
    {
        path: '/perInfo',
        component: PI
    },

]
const router = new Router({routes, mode:'history'})
export default router