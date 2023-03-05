const routes = [
    {
        name: 'login',
        path: '/',
        component: () => import('../src/views/login/Login.vue')
    },
    
];
 
export default routes