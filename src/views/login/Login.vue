<script>
import { StarrySky } from '../../../packages/index';
import { UserFilled, Lock, Promotion, Collection } from '@element-plus/icons-vue';
import { ref } from 'vue'
import { useRouter } from "vue-router";


export default {

    name: "login",

    setup() {
        const input1 = ref('');
        const input2 = ref('');
        const input3 = ref('');
        const dialogVisible = ref(false);
        const router = useRouter();
        const tohome = () => {
            router.push({ path: '/home' });
        }
        return {
            tohome,
            input1,
            input2,
            input3,
            dialogVisible
        }

    }
}


</script>

<template>
    <starry-sky :stars-count="1000" :distance="1000" />
    <div id="main">
        <div id="login-box">
            <div>
                <span style="margin-left: 20px; font-size: xx-large; font-family: 'STCaiyun'">LUATS</span><br>
                <span style="margin-left: 20px; font-size: x-small; letter-spacing: 5px; font-family: 'STXingkai'">世界因你而精彩</span>
            </div>
            <div>
                <el-input v-model="input1" class="w-50 m-2" placeholder="Please input name" :prefix-icon="UserFilled" />
            </div>
            <div>
                <el-input v-model="input2" class="w-50 m-2" type="password" placeholder="Please input password" :prefix-icon="Lock" />
            </div>
            <div>
                <el-button :key="success" :type="success" text style="margin-left: 20px" :icon="Promotion"
                    @click="tohome">登录</el-button>
                <el-button :key="primary" :type="primary" text style="float: right;" :icon="Collection"
                    @click="dialogVisible = true">注册</el-button>
            </div>

        </div>

    </div>
    <!-- 注册弹窗 -->
    <el-dialog v-model="dialogVisible" title="LUATS 注册" width="50%" draggable align-center>
        <div>
            用户名:<el-input v-model="input1" placeholder="用户名小于6位" :prefix-icon="UserFilled" />
        </div>
        <div style="margin-top: 10px;">
            密码:<el-input v-model="input2" type="password" placeholder="密码小于12位" :prefix-icon="Lock"  />
        </div>
        <div style="margin-top: 10px;">
            确认密码:<el-input v-model="input3" type="password" placeholder="请再次确认密码" :prefix-icon="Lock"  />
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">
                    Go
                </el-button>
            </span>
        </template>
    </el-dialog>
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