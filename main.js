import Vue from 'vue'
import App from './App'
import ccLoading from './components/cc-loading.vue'
// import VConsole from '@/common/vconsole.min.js' //import vconsole
// let vConsole = new VConsole() // 初始化
import AXIOS from '@/common/axios'
import UTIL from '@/common/util'
import USER from '@/common/user'
import _ from '@/common/underscore'

Vue.component('cc-loading', ccLoading)
Vue.config.productionTip = true
Vue.prototype.AXIOS = AXIOS
Vue.prototype.UTIL = UTIL
Vue.prototype.USER = USER
Vue.prototype._ = _

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
