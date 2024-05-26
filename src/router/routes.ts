export const constRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'Login',
    },
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        name: 'layout',
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
    },
    {
        path: '/',
        component: () => import('@/views/login/index.vue'),
        name: 'Login',
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404/index.vue'),
        name: 'any',
    }
]