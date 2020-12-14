import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import login from '../views/admin/login.vue'
import zhu from '../views/admin/zhu.vue'
import home from '../views/admin/home.vue'
import sp from '../views/admin/sp.vue'
import dl from '../views/admin/dl.vue'
import hy from '../views/admin/hy.vue'
import sz from '../views/admin/sz.vue'
Vue.use(Router)

const router = new Router({
routes:[
  
  { path: '/login',name: 'login',component: login},
  { path: '/zhu',name: 'zhu',component: zhu,children:[
  { path: '/home',name: 'home',component: home},
  { path: '/sp',name: 'cs',component: sp},
  { path: '/dl',name: 'dl',component: dl},
  { path: '/hy',name: 'dl',component: hy},
  { path: '/sz',name: 'dl',component: sz},
]},


]
})
router.beforeEach((to,from,next) => {
if(to.path=='/login') return next()
const tokenSter=window.sessionStorage.getItem('token')
if(!tokenSter) return next('/login')
next()
})
export default router
