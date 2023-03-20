const routes = [
    {
        name: 'login',
        path: '/',
        component: () => import('../src/views/login/Login.vue')
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('../src/views/home/Home.vue')
    },
    {
        name: 'world',
        path: '/world',
        component: () => import('../src/components/Infomsg.vue')
    }
    
];
 
export default routes