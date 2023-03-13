<template>
  <div style="height: 100%;width: 100%" class="home">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">
        <el-card>
          <div>
            <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </div>
        </el-card>
        <el-divider>
          <el-icon>
            <HotWater/>
          </el-icon>
        </el-divider>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {HotWater} from '@element-plus/icons-vue';
import {ref} from 'vue'

const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<style scoped>
.home {
  display: flex;
}

.infinite-list {
  flex: 1;
  noresize:true;
  height: 300px;
  padding: 0;
  margin-left: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  /*background: var(--el-color-primary-light-8);*/
  margin: 10px;
  /*color: var(--el-color-primary);*/
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>