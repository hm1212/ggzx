<template>
  <div class="layout_container">
    <!--左侧导航栏-->
    <div class="layout_slider" :class="{fold:layoutTabbarStore.fold?true:false}">
      <Logo></Logo>
      <el-scrollbar class="scrollbar" :class="{fold:layoutTabbarStore.fold?true:false}">
        <!--动态路由菜单-->
        <el-menu :collapse="layoutTabbarStore.fold" background-color="#001529" text-color="white">
          <Menu :menuList="useStore.menuConstRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航区-->
    <div class="layout_tabbar" :class="{fold:layoutTabbarStore.fold?true:false}">
      <TabBar></TabBar>
    </div>
    <!--右侧展示区-->
    <div class="layout_main" :class="{fold:layoutTabbarStore.fold?true:false}">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue';
import Menu from './menu/index.vue'
import userStore from "@/store/modules/user.ts";
import Main from '@/views/layout/mian/index.vue';
import TabBar from '@/views/tabbar/index.vue';
import useLayoutTabbarStore from '@/store/modules/Setting.ts'
import {RouterView} from 'vue-router';

let useStore = userStore();

let layoutTabbarStore = useLayoutTabbarStore();


</script>
<script lang="ts">
export default {
  "name": "Layout",
}
</script>

<style scoped lang="scss">

.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-color;

    &.fold {
      transition: all 0.3s;
      width: $base-min-menu-width;
    }
  }

  .scrollbar {
    width: 100%;
    height: calc(100vh - $base-menu-logo-height);

    .el-menu {
      border-right: none;
    }

    &.fold {
      transition: all 0.3s;
      width: $base-min-menu-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-menu-height;
    top: 0px;
    left: $base-menu-width;

    &.fold {
      transition: all 0.3s;
      width: calc(100vw - $base-min-menu-width);
      left: $base-min-menu-width;
    }
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-menu-height);
    position: absolute;
    top: $base-menu-height;
    left: $base-menu-width;
    background-color: palevioletred;
    overflow: scroll;
    &.fold {
      transition: all 0.3s;
      width: calc(100vw - $base-min-menu-width);
      left: $base-min-menu-width;
    }

    p {
      padding: 20px;
      height: 100000px;
      background-color: wheat;
    }
  }
}

</style>