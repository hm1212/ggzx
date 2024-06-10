<template>
  <router-view v-slot="{component}">
    <Transition name="fade">
       <component :is="component" />
    </Transition>
  </router-view>
</template>
<script>

</script>
<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>