import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 任务
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path:'/details',
    name:'listDetail',
    component: () => import('../views/details/details.vue')
  },
  // 社区
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/Community.vue')
  },
  // 我
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/Me.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //切换路由滚动条位置
  scrollBehavior (to, from, savedPosition) { 
    return { x: 0, y: 0 } 
  }
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
