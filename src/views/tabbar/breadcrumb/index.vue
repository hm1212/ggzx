<template>
  <el-icon style="margin-left: 10px" @click="changeIcon()">
    <component :is="layoutTabbarStore.fold?'Fold':'Expand'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import {ArrowRight} from "@element-plus/icons-vue";
import useLayoutTabbarStore from '@/store/modules/Setting.ts'
let layoutTabbarStore=useLayoutTabbarStore()

const changeIcon = () => {
  layoutTabbarStore.fold=!layoutTabbarStore.fold;
};
</script>
<script lang="ts">
export default {
  "name": "Breadcrumb",
}
</script>
<style scoped lang="scss">

</style>