<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>
<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue';
</script>
<script  lang="ts">
export default {
  "name": "Tabbar",
}
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to Right, #d4cece, #cacade, #eee3e3);

  .tabbar-left {
    display: flex;
    align-items: center;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
  }
}


</style>