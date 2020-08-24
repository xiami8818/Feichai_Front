import Vue from 'vue';
import Router from 'vue-router';
const Index = ()=>import('@/components/Index');
const Code = ()=>import('@/components/code/Code');
const JE = ()=>import('@/components/je/JE');
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

]
const router = new Router({routes, mode:'history'})
export default router