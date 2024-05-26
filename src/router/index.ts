import {createRouter, createWebHashHistory} from 'vue-router';
import {constRoute} from "@/router/routes.ts";

let router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    },
    routes: constRoute
})
export default router;
