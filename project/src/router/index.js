import Vue from 'vue'
import Router from 'vue-router'

import home from "./home"
import yesterday from "./yesterday"
import beforeyesterday from "./beforeyesterday"
import user from "./user"
<<<<<<< HEAD
import login from './login'
=======

>>>>>>> branch/jiangqin
Vue.use(Router)

const routes = [
  {
    path: '/',//启动页
    component: ()=>import('../pages/startPage/StartPage'),
  },
  {
    path: '/comment/:id',//评论页
    component: ()=>import('../pages/common/Comment/Comment'),
  },
  {
    path: '/share/:id',//分享页
    component: ()=>import('../pages/common/Share/Share'),
  },
<<<<<<< HEAD
  ...home,
  ...yesterday,
  ...beforeyesterday,
  ...user,
  ...login
=======
  {
    path:"/pic-group",
    component:()=>import("../pages/common/PicGroup/PicGroup")
  },
  ...home,
  ...yesterday,
  ...beforeyesterday,
  ...user
>>>>>>> branch/jiangqin
]

export default new Router({
  mode: 'history',
  routes,
})
