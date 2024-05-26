import {createApp} from 'vue'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import globalComponent from '@/components'
import router from './router'
import pinia from "@/store";


const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(globalComponent);
app.use(router);
app.use(pinia);
app.mount('#app')



