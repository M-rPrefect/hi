<script setup>
import { StarrySky } from '../../../packages/index';
import { UserFilled, Lock, Promotion, Collection } from '@element-plus/icons-vue';
import { ref } from 'vue'


const input1 = ref('')
const input2 = ref('');

// export default {
//   methods: {
//     to(){
//       this.$router.push({ path: '/home' });
//     }
//   }
// }
</script>

<template>
    <starry-sky :stars-count="1000" :distance="1000" />
    <div id="main">
        <div id="login-box">
            <div>
                <span style="margin-left: 20px; font-size: x-large">Hi</span>
            </div>
            <div>
                <el-input v-model="input1" class="w-50 m-2" placeholder="Please input name" :prefix-icon="UserFilled" />
            </div>
            <div>
                <el-input v-model="input2" type="password" placeholder="Please input password" show-password
                    :prefix-icon="Lock" />
            </div>
            <div>
                <el-button :key="success" :type="success" text style="margin-left: 20px" :icon="Promotion" @click="to">登录</el-button>
                <el-button :key="primary" :type="primary" text style="float: right;" :icon="Collection">注册</el-button>
            </div>
        </div>

    </div>
</template>

<style>
#login-box {
    /* width: 500px; */
    height: 100px;
    margin-top: 10%;
}

#login-box div {
    margin: 10px;
}

#main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>