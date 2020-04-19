import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SignUp',
        component: Home
    }, {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    }, {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
