<template>
  <div style="height: 100%;width: 100%">
    <Header/>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch = "true">
      <el-tab-pane label="世界" name="first"><INFOS/></el-tab-pane>
      <el-tab-pane label="Ta" name="second"><INFOS/></el-tab-pane>
      <el-tab-pane label="我的" name="third"><INFOS/></el-tab-pane>
    </el-tabs>
  </div>

</template>

<script lang="ts" setup>

import {ref} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import INFOS from "../../components/Infomsg.vue"
import Header from "../../components/Header.vue"


const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>


</style>
