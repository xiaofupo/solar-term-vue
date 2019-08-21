export default [
    {
        path:"/collect",
        component:()=>import('../pages/user/Collect/Collect'),
        name:"collect",
        children:[
            {
                path:'message',
                component:()=>import('../pages/user/Message/Message'),
                //通知中心页面
            },
            {
                path:'setting',
                component:()=>import("../pages/user/Setting/Settingnow"),
                //未登录设置页面
            },
            {
                path:'settingstart',
                component:()=>import("../pages/user/Setting/Settingstart"),
                //已登录设置页面
                       children:[
                           {
                               //应用评分页面
                               path:'grade',
                               component:()=>import('../pages/user/Setting/grade/Grade'),
                           },
                           {
                            //我要吐槽页面
                            path:'debunk',
                            component:()=>import('../pages/user/Setting/debunk/Debunk'),
                        },
                       ]
            },
        ]
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