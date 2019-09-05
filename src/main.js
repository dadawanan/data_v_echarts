import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import relise from './config'
import './assets/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'default-passive-events'
import '@/routerbeforeEach' // permission control
relise()
window.addEventListener('resize', function () {
  relise()
})
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
