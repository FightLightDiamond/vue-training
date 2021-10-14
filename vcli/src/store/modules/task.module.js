import Vue from "vue"
import Vuex from "vuex"
import TaskService from "@/services/task.service";
import router from '../../router'
import notify from "vue-notification"
Vue.use(Vuex)
Vue.use(notify)

const TaskModule = {
    state: () => ({
        taskEdit: {
            id: "",
            title: "",
            active: 0
        },
        tasks: []
    }),
    mutations: {
        GET_TASKS(state, task) {
            state.tasks = task
        },
        GET_TASK(state, task) {
            state.taskEdit = task
        },
        CREATE_TASK(state, task) {
            state.tasks = [...state.tasks, task]
        },
        ACTIVE_TASK(state, id) {
            const index = state.tasks.findIndex((obj => obj.id === id))
            state.tasks[index].active = 1
        },
        EDIT_TASK(state, {id, title}) {
            const index = state.tasks.findIndex((obj => obj.id === id))
            if(index) state.tasks[index].title = title
            Vue.notify({
                type: 'success',
                title: 'Task message',
                text: 'Edit task successfully!',
            })

            router.push({name: 'task'})
        },
        ASSIGN_TASK(state, {id, assign}) {
            const index = state.tasks.findIndex((obj => obj.id === id))
            if(index) state.tasks[index].assign = assign
            Vue.notify({
                type: 'success',
                title: 'Task message',
                text: 'Assign task successfully!',
            })

            router.push({name: 'task'})
        },
        async REMOVE_TASK(state, id) {
            const index = state.tasks.findIndex((obj => obj.id === id))
            state.tasks.splice(index, 1)
        },
    },
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
        async getTask({commit}, id) {
            /*
            * I do not want write: context  => context.commit('GET_TASKS', res.data)
            * I use: {commit} => commit('GET_TASKS', res.data) => shorter
            * */
            try {
                const res = await TaskService.index({id})
                if (res.status === 200) {
                    commit('GET_TASK', res.data.pop())
                } else {
                    alert('Get task fail')
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

                    router.push({name: 'task'})
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
        async editTask({commit}, {id, title}) {
            try {
                const res = await TaskService.update(id, {title})
                if (res.status === 200) {
                    commit('EDIT_TASK', {id, title})
                } else {
                    Vue.notify({
                        type: 'error',
                        title: 'Task message',
                        text: 'Edit task fail!'
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
        async assignTask({commit}, {id, assign}) {
            try {
                const res = await TaskService.update(id, {assign})
                if (res.status === 200) {
                    commit('ASSIGN_TASK', {id, assign})
                } else {
                    Vue.notify({
                        type: 'error',
                        title: 'Task message',
                        text: 'Assign task fail!'
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
        },
    },
    getters: {
        // taskNameEdit: state => state.taskEdit.name,
        totalTask: state => state.tasks.length,
        activeTasks: state => state.tasks.filter(task => task.active),
        inactiveTasks: state => state.tasks.filter(task => !task.active)
    }
}

export default TaskModule