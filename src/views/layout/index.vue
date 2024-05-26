<template>
  <div class="layout_container">
    <!--左侧导航栏-->
    <div class="layout_slider">
      <logo></logo>
    </div>
    <!--顶部导航区-->
    <div class="layout_tabbar"></div>
    <!--右侧展示区-->
    <div class="layout_main">
      <p>我是段落</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import logo from './logo/index.vue';

</script>

<style scoped lang="scss">

.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-color;
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-menu-height;
    top: 0px;
    left: $base-menu-width;
    background-color: #00ff00;
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-menu-height);
    position: absolute;
    top: $base-menu-height;
    left: $base-menu-width;
    background-color: palevioletred;
    overflow: scroll;
    p{
      padding: 20px;
      height: 100000px;
      background-color:wheat;
    }
  }
}

</style>