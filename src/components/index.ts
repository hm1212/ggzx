import svgIcon from '@/components/svgIcon/index.vue'
import {App} from "vue";

const globalComponent = {svgIcon}
export default {
    install(app: App): void {
        Object.keys(globalComponent).forEach((key: string) => {
            app.component(key, globalComponent[key])
        })
    }
}