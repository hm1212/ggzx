export const constRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'Login',
        meta: {
            title: '登录',
            hidden: true,
            icon: 'Select',
        }
    },
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        name: 'layout',
        meta: {
            title: 'layout'
        },
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'House',
                }
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/views/screen/index.vue'),
        name: '数据大屏',
        meta: {
            title: '数据大屏',
            hidden: false,
            icon: 'Platform',
        },
    },
    {
        path: '/acl',
        component: () => import('@/views/layout/index.vue'),
        name: 'Acl',
        meta: {
            title: '权限管理',
            hidden: false,
            icon: 'Lock',
        },
        children: [
            {
                path: '/acl/user',
                component: () => import('@/views/acl/User/index.vue'),
                name: '用户管理',
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'User',
                },
            },
            {
                path: '/acl/role',
                component: () => import('@/views/acl/Role/index.vue'),
                name: '角色管理',
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'UserFilled',
                },
            },
            {
                path: '/acl/permission',
                component: () => import('@/views/acl/Permission/index.vue'),
                name: '菜单管理',
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Monitor',
                },
            },
        ]
    },
    {
        path: '/product',
        component: () => import('@/views/layout/index.vue'),
        name: 'product',
        meta: {
            title: '商品管理',
            hidden: false,
            icon: 'Lock',
        },
        redirect: '/product/attr',
        children: [
            {
                path: '/product/attr',
                component: () => import('@/views/product/attr/index.vue'),
                name: '属性管理',
                meta: {
                    title: '属性管理',
                    hidden: false,
                    icon: 'Files',
                },
            },
            {
                path: '/product/trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                name: '品牌管理',
                meta: {
                    title: '品牌管理',
                    hidden: false,
                    icon: 'ShoppingCartFull',
                },
            },
            {
                path: '/product/sku',
                component: () => import('@/views/product/sku/index.vue'),
                name: 'SKU管理',
                meta: {
                    title: 'SKU管理',
                    hidden: false,
                    icon: 'Shop',
                },
            },
            {
                path: '/product/spu',
                component: () => import('@/views/product/spu/index.vue'),
                name: 'SPU管理',
                meta: {
                    title: 'SPU管理',
                    hidden: false,
                    icon: 'Sell',
                },
            },
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true
        }
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     component: () => import('@/views/404/index.vue'),
    //     name: 'any',
    //     meta: {
    //         title: '任意路由',
    //         hidden: true
    //     }
    // }
]