import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element
// import './plugins/element.js'

Vue.config.productionTip = false



//配置axios
// import axios from "axios";
import axios from "@/utils/request";
axios.defaults.baseURL='http://ceshi5.dishait.cn/'
Vue.prototype.$axios = axios;

// 配置echarts
import echarts from 'echarts'
Vue.prototype.echarts = echarts;


// // 配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




// 全局路由守卫
router.beforeEach((to, from, next) => {
  /*to:即将要进入的路由对象。
  from:即将要离开的路由对象。
  next:是否进入到路由，next(url):跳转到指定的路由 */

  // 判断是否是电商管理后台页面
  // if (to.path.indexOf('/login') > -1) {
  //   console.log('我是管理后台页面')

  //   // 先获取本地存储的token值
  //   let token = sessionStorage.getItem("user_token")
  //   // 判断是否是登录页面
  //   if (to.path == "/login/login") {
  //     // 如果用户登陆了直接跳转到管理页面
  //     token != null ? next('/login/home') : "";
  //   } else {
  //     // 如果用户没有登录就返回登录页面
  //     token == null ? next('/login/login') : "";
  //   }

  // }

  next()
})

// 全局获取时间
Vue.filter('dataForm',function(originVal){
  const dt = new Date(originVal)
  // 获取年份
  const y = dt.getFullYear()
  // 获取月份
  const m = (dt.getMinutes()+1+'').padStart(2,'0')
  // 获取日
  const d = (dt.getDate()+'').padStart(2,'0')
  // 时
  const h = (dt.getHours()+'').padStart(2,'0')
  // 分
  const f = (dt.getMinutes()+'').padStart(2,'0')
  // 秒
  const mm = (dt.getSeconds()+'').padStart(2,'0')

  return `${y}-${m}-${d} ${h}:${f}:${mm}`
})

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')