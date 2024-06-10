//面包屑展示图标相关小仓库
import {defineStore} from "pinia";
import {FoldData} from "@/store/modules/types/type.ts";

const useLayoutTabbarStore = defineStore('layoutTabbarStore', {
    state: (): FoldData => {
        return {
            fold: false
        };
    },
})
export default useLayoutTabbarStore;