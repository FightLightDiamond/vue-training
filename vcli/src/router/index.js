import Vue from "vue";
import Router from "vue-router"
import TodoPage from "@/pages/TodoPage";
import LoginPage from "@/pages/LoginPage";
import Registration from "@/pages/Registration";
import ChangePwd from "@/pages/ChangePwd";
import EditTaskPage from "@/pages/EditTaskPage";



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/tasks',
            name: 'task',
            component: TodoPage
        },
        {
            path: '/tasks/:id',
            name: 'task.edit',
            component: EditTaskPage
        },
        {
            path: '/Registration',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/ChangePwd',
            name: 'ChangePwd',
            component: ChangePwd
        },

    ],
    mode: 'history'
})