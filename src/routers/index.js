import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Register from '../components/Register.vue'

const routes = [
    {
        path:'/login',
        name: 'login',
        component: Login    
    },
    {
        path:'/register',
        name: 'register',
        component: Register    
    },
    {
        path:'/',
        name: 'dashboard',
        component: Dashboard    
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router