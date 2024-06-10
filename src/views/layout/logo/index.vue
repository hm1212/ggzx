<template>
  <div class="logo_container">
    <img :src="setting.logoUrl" v-if="setting.logoDisplay">
    <p>{{ setting.tile }}</p>
  </div>
</template>
<script setup lang="ts">
import setting from '@/setting.ts';

</script>
<script  lang="ts">
export default {
  "name": "LOGO",
}
</script>
<style scoped lang="scss">
.logo_container {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  img{
    width: $base-menu-logo-width;
    height: $base-menu-logo-height;
  }
  p {
    margin-left: 10px;
    font-size: $base-title-fontSize;
    color: $base-title-color;
  }

}
</style>