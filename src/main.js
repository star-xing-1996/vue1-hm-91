import Vue from 'vue'
import App from './App.vue'
// 引入router
import router from '@/router'
// 引入element组件
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
