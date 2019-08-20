export default [
    {
        path:'/yesterday',
        component: ()=>import('../pages/yesterday/Yesterday'),
        children:[
            {
                path:"pic-group",
                component:()=>import("../pages/common/PicGroup/PicGroup")
            },
            {
                path:"detail",
                component:()=>import("../pages/common/Detail/Detail"),
            }
        ]
    }
]