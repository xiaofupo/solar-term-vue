import Vue from 'vue'
import Router from 'vue-router'

import home from "./home"
import yesterday from "./yesterday"
import beforeyesterday from "./beforeyesterday"
import user from "./user"
<<<<<<< HEAD
=======
import login from './login'
import datum from './datum'
>>>>>>> prokerface
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
    name:"share",
    path: '/share',//分享页
    component: ()=>import('../pages/common/Share/Share'),
  },
  {
    path: '/detail',//分享页
    component: ()=>import('../pages/common/Detail/Detail'),
  },
  {
    path:"/pic-group",
    component:()=>import("../pages/common/PicGroup/PicGroup")
  },
  ...home,
  ...yesterday,
  ...beforeyesterday,
<<<<<<< HEAD
  ...user
=======
  ...user,
  ...login,
  ...datum
>>>>>>> prokerface
]

export default new Router({
  mode: 'history',
  routes,
})
