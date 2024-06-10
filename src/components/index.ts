import svgIcon from '@/components/svgIcon/index.vue'
import {App} from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const globalComponent = {svgIcon}
export default {
    install(app: App): void {
        Object.keys(globalComponent).forEach((key: string) => {
            app.component(key, globalComponent[key])
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}