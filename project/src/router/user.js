export default [
    {
        path: "/collect",
        component: () => import('../pages/user/Collect/Collect'),
        name: 'collect',
        redirect: "/collect/detail",
        meta: {
            tabBarFlag: true
        }
    },
    {
        path: "/private",
        component: () => import("../pages/user/Collect/children/private"),
        name: 'private',
        meta: {
            tabBarFlag: true
        }

    }
]