import Vue from 'vue'
import App from './App'
import ccLoading from './components/cc-loading.vue'
// import VConsole from '@/common/vconsole.min.js' //import vconsole
// let vConsole = new VConsole() // 初始化
import axios from '@/common/axios'

Vue.component('cc-loading',ccLoading)
Vue.config.productionTip = true
Vue.prototype.axios = axios

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
