// 配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'
// 引入Login组件
import Login from '@/views/login'

Vue.use(VueRouter)
// 实例化vue-router
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login }
  ]
})
export default router
