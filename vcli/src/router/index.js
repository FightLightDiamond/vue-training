import Vue from "vue";
import Router from "vue-router"
import TodoPage from "@/pages/TodoPage";
import LoginPage from "@/pages/LoginPage";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/task',
            name: 'task',
            component: TodoPage
        }
    ],
    mode: 'history'
})