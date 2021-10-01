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
/**
 * Component use mapStates, mapGetters to get data to display data
 * Event on component:
 *  - Change database: use mapActions => working api success commit('MUTATION') to update data state vuex
 *  - Only change state vuex: use mapMutations
 *
 * @type {{mutations: {LOGOUT(*): void, ACTIVE_TASK(*, *): void, CREATE_TASK(*, *): void, GET_TASKS(*, *): void, REMOVE_TASK(*, *): Promise<void>, LOGIN(*, {email: *, password: *}): Promise<void>}, state: {isAuthenticated: boolean, user: any, tasks: []}, getters: {inactiveTasks: (function(*): *), activeTasks: (function(*): *), totalTask: (function(*): *)}, actions: {updateTask({commit: *}, *=): Promise<void>, getTasks({commit: *}): Promise<void>, createTask({commit: *}, *=): Promise<void>, deleteTask({commit: *}, *=): Promise<void>}}}
 */
const storeData = {
    /**
     * Data using in all component (dont need share data by other component)
     */
    state: {
        tasks: [],
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: !!localStorage.getItem('user')
    },
    /**
     * Data by state
     */
    getters: {
        totalTask: state => state.tasks.length,
        activeTasks: state => state.tasks.filter(task => task.active),
        inactiveTasks: state => state.tasks.filter(task => !task.active)
    },
    /**
     * Handle event on component, working with api, data on database, not update state in vuex
     */
    actions: {
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
        async deleteTask({commit}, id) {
            try {
                /**
                 * Call api to remove task in date base
                 */
                const res = await TaskService.delete(id)
                if (res.status === 200) {
                    // when remove task on database success, update tasks state on vue
                    commit('REMOVE_TASK', id)
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
        }
    },
    /**
     * Handle only logic change state vuex
     */
    mutations: {
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
            const index = state.tasks.findIndex((obj => obj.id === id))
            state.tasks.splice(index, 1)
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