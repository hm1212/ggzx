<template>
  <div style="color: white">
    <template v-for="(item) in menuList" :key="item.path">
      <!--没有子路由-->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
          <el-icon>
            <component :is="item.meta?.icon"></component>
          </el-icon>
          <template #title>
            {{ item.meta.title }}
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children&&item.children.length==1" >
        <!--有子路由，但是只有1个子路由-->
        <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path" @click="goRoute">
          <el-icon>
            <component :is="item.children[0].meta?.icon"></component>
          </el-icon>
          <template #title>
            {{ item.children[0].meta.title }}
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children&&item.children.length>1">
        <!--有子路由，且个数大于1-->
        <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.meta?.icon"></component>
            </el-icon>
            {{ item.meta.title }}
          </template>
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
let $router = useRouter();

defineProps(["menuList"])
const goRoute=(vc:any)=>{
  console.log(vc)
  $router.replace(vc.index);
}
</script>
<script lang="ts">
export default {
  name: "Menu",
}
</script>

<style scoped lang="scss">

</style>