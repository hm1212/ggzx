<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from 'vue';
import userStore from "@/store/modules/user";
import {ElNotification} from "element-plus";
import {useRouter} from "vue-router";
import {getTime} from "@/utils/time";

let $router = useRouter();
let useStore = userStore();
let loginForm = reactive({username: 'admin', password: 'atguigu123'});
let loading = ref(false);
//el-form组件实例，validate	对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise
let loginForms = ref();
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (/^\d{5,10}$/.test(value)) {
    return callback();
  }
  return callback(new Error("账号长度必须5-10位"));
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (/^\d{5,10}$/.test(value)) {
    return callback();
  }
  return callback(new Error("密码长度必须5-10位"));
}
const rules = {
  username: [
    // {required: true, message: "用户名必传", trigger: 'blur'},
    // {min: 2, max: 6, message: "用户名最大6位", trigger: 'change'},
    {trigger: "change", validator: validatorUserName},
  ],
  password: [
    // {required: true, message: "密码必传", trigger: 'blur'},
    // {min: 2, max: 6, message: "密码最大6位", trigger: 'change'}
    {trigger: "change", validator: validatorPassword},
  ]
}


const login = async () => {
  //表单检验回调 检验完成才返回
  await loginForms.value.validate();
  loading.value = true;
  try {
    await useStore.userLogin(loginForm);
    $router.push('/login')
    ElNotification({
      type: 'success',
      title: `HI,${getTime()}好`,
      message: "欢迎回来"
    })
    loading.value = false;
  } catch (error: any) {
    loading.value = false;
    ElNotification({
      type: 'error',
      message: error.message
    })
  }
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') center center no-repeat;

  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>