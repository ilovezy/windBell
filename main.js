import Vue from 'vue'
import App from './App'
import ccLoading from './components/cc-loading.vue'

Vue.component('cc-loading',ccLoading)
Vue.config.productionTip = true

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
