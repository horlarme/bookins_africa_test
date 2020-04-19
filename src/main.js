import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from './store'
import CustomInput from './components/CustomInput'
import CustomButton from './components/CustomButton'
import axios from 'axios'

Vue.config.productionTip = false

Vue.component('custom-input', CustomInput)
Vue.component('custom-button', CustomButton)

Vue.prototype.$axios = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('projectUserToken')}`
    return axios
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
