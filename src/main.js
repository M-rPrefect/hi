import { createApp } from 'vue';
import App from './App.vue';
import Vue3StarrySky from '../packages/index';
import router from '../router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(Vue3StarrySky);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
