<template>
  <el-button size="small" circle icon="Refresh"></el-button>
  <el-button size="small" circle icon="FullScreen"></el-button>
  <el-button size="small" circle icon="Setting"></el-button>
  <img src="../../../public/logo.png" style="width: 24px;height: 24px;margin: 0px 10px"/>
  <el-dropdown>
    <el-button>
      admin
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">

</script>
<script lang="ts">
export default {
"name": "Setting",
}
</script>
<style scoped>

</style>