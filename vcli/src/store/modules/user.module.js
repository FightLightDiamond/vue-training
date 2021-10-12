import Vue from "vue"
import Vuex from "vuex"
import notify from "vue-notification"
import UserService from "@/services/user.service";
import router from "@/router";
Vue.use(Vuex)
Vue.use(notify)

import {abilityRoles} from "../../casl/index"

const UserModule = {
    /**
     * Data using in all component (dont need share data by other component)
     */
    state: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: !!localStorage.getItem('user')
    },
    getters: {
        role: (state) => state.user.role ? state.user.role : "guest"
    },
    /**
     * Handle event on component, working with api, data on database, not update state in vuex
     */
    actions: {
        async login({commit}, {email, password, ability}) {
            console.log("ability", ability)
            try {
                // const res = await axios.get(`http://localhost:2000/users?email=${email}&password=${password}`)
                const params = {
                    email, password
                }
                const res = await UserService.index(params)
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
                    const user = res.data.pop();
                    localStorage.setItem('user', JSON.stringify(user))
                    // state.isAuthenticated = true;
                    commit('LOGIN_SUCCESS', {user, ability})
                } else {
                    /*
                    * Login fail
                    * Set error message
                    * */
                    // this.$refs.formLogin.setErrors({email: 'User or password incorrect'});
                    // alert('User or password incorrect')
                    Vue.notify({
                        type: 'error',
                        title: 'Login',
                        text: 'User or password incorrect!'
                    })
                }
            } catch (e) {
                Vue.notify({
                    type: 'error',
                    title: 'Login',
                    text: e.toString()
                })
            }
        }
    },
    /**
     * Handle only logic change state vuex
     */
    mutations: {
        async LOGIN_SUCCESS(state, {user, ability}) {
            state.isAuthenticated = true;
            state.user = user;
            //Update permission for user
            let permissions = abilityRoles(user.role)
            ability.update([...permissions.rules, ...ability.rules])
            console.log("new ability after login", ability)
            router.push({name: 'task'})
        },
        LOGOUT(state) {
            localStorage.removeItem('user')
            state.isAuthenticated = false;
            router.push({name: 'login'})
        }
    },
}

export default UserModule