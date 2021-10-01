import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";
/*
* import router because not use this.$router, here is not component
* */
import router from '../router'
import TaskService from "@/services/task.service";
import notify from "vue-notification"

Vue.use(Vuex)
Vue.use(notify)

const storeData = {
    state: {
        tasks: [],
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: !!localStorage.getItem('user')
    },
    getters: {
        totalTask: state => state.tasks.length,
        activeTasks: state => state.tasks.filter(task => task.active),
        inactiveTasks: state => state.tasks.filter(task => !task.active)
    },
    actions: {
        /*
        *
        * Logic with API
        * */
        async getTasks({commit}) {
            /*
            * I do not want write: context  => context.commit('GET_TASKS', res.data)
            * I use: {commit} => commit('GET_TASKS', res.data) => shorter
            * */
            try {
                const res = await TaskService.index({})
                if (res.status === 200) {
                    commit('GET_TASKS', res.data)
                } else {
                    alert('Get tasks fail')
                }
            } catch (e) {
                alert(e.toString())
            }
        },
        async createTask({commit}, task) {
            try {
                const res = await TaskService.create(task)
                if (res.status === 201) {
                    commit('CREATE_TASK', res.data)
                    alert('create task successfully')
                } else {
                    alert('create task fail')
                }
            } catch (e) {
                alert(e.toString())
            }
        },

        async updateTask({commit}, id) {
            try {
                const res = await TaskService.update(id, {active: 1})
                if (res.status === 200) {
                    commit('ACTIVE_TASK', id)
                    Vue.notify({
                        type: 'success',
                        title: 'Task message',
                        text: 'Active task successfully!',
                    })
                } else {
                    Vue.notify({
                        type: 'error',
                        title: 'Task message',
                        text: 'Active task fail!'
                    })
                }
            } catch (e) {
                Vue.notify({
                    type: 'error',
                    title: 'Task message',
                    text: e.toString()
                })
            }
        },
    },
    mutations: {
        /*
        * Logic with state
        * */
        GET_TASKS(state, task) {
            state.tasks = task
        },
        CREATE_TASK(state, task) {
            state.tasks = [...state.tasks, task]
        },
        ACTIVE_TASK(state, id) {
            const index = state.tasks.findIndex((obj => obj.id === id))
            state.tasks[index].active = 1

        },
        async REMOVE_TASK(state, id) {
            try {
                const res = TaskService.delete(id)
                if (res.status === 200) {
                    // remove task on data
                    const index = state.tasks.findIndex((obj => obj.id === id))
                    state.tasks.splice(index, 1)
                    Vue.notify({
                        type: 'success',
                        title: 'Task message',
                        text: 'Delete task successfully'
                    })
                } else {
                    Vue.notify({
                        type: 'error',
                        title: 'Task message',
                        text: 'Delete task fail'
                    })
                }
            } catch (e) {
                Vue.notify({
                    type: 'error',
                    title: 'Task message',
                    text: e.toString()
                })
            }
        },
        async LOGIN(state, {email, password}) {
            try {
                const res = await axios.get(`http://localhost:2000/users?email=${email}&password=${password}`)
                console.log('login', res)
                /*
              * Count length array. No found account return array eq []
              *
              * */
                if (res.status === 200 && res.data.length > 0) {
                    alert('login successfully')
                    /*
                  * Save user login in local storage
                  * LocalStorage in browser. save data for client
                  * */
                    localStorage.setItem('user', JSON.stringify(res.data.pop()))
                    state.isAuthenticated = true;

                    //*
                    // Redirect to task
                    // */
                    // this.$router.push('/task')
                    router.push({name: 'task'})

                } else {
                    /*
                    * Login fail
                    * Set error message
                    * */
                    // this.$refs.formLogin.setErrors({email: 'User or password incorrect'});
                    // alert('User or password incorrect')
                }
            } catch (e) {
                alert('Login fail' + e.toString())
            }
        },
        LOGOUT(state) {
            localStorage.removeItem('user')
            state.isAuthenticated = false;
            router.push({name: 'login'})
        }
    }
}

const store = new Vuex.Store(storeData)

export default store