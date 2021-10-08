import Vuex from "vuex"
import TaskModule from "@/store/modules/task.module";
import UserModule from "@/store/modules/user.module";
/**
 * Component use mapStates, mapGetters to get data to display data
 * Event on component:
 *  - Change database: use mapActions => working api success commit('MUTATION') to update data state vuex
 *  - Only change state vuex: use mapMutations
 *
 * @type {{mutations: {LOGOUT(*): void, ACTIVE_TASK(*, *): void, CREATE_TASK(*, *): void, GET_TASKS(*, *): void, REMOVE_TASK(*, *): Promise<void>, LOGIN(*, {email: *, password: *}): Promise<void>}, state: {isAuthenticated: boolean, user: any, tasks: []}, getters: {inactiveTasks: (function(*): *), activeTasks: (function(*): *), totalTask: (function(*): *)}, actions: {updateTask({commit: *}, *=): Promise<void>, getTasks({commit: *}): Promise<void>, createTask({commit: *}, *=): Promise<void>, deleteTask({commit: *}, *=): Promise<void>}}}
 */
const storeData = {
    modules: {
        user: UserModule,
        task: TaskModule
    }
}

const store = new Vuex.Store(storeData)

export default store