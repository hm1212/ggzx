<template>
  <div>
    <h1>svg测试</h1>
    <svg :style="{width,height}">
      <use :xlink:href="prefix+name" fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: String,
  color: {
    type: String,
    default: 'red'
  },
  width: {
    type: String,
    default: "20px"
  },
  height: {
    type: String,
    default: "20px"
  }
});
</script>


<style scoped>

</style>