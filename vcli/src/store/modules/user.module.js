import Vue from "vue"
import Vuex from "vuex"
import notify from "vue-notification"
import UserService from "@/services/user.service";
import router from "@/router";
Vue.use(Vuex)
Vue.use(notify)

const UserModule = {
    /**
     * Data using in all component (dont need share data by other component)
     */
    state: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: !!localStorage.getItem('user')
    },
    /**
     * Handle event on component, working with api, data on database, not update state in vuex
     */
    actions: {
        async login({commit}, {email, password}) {
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
                    localStorage.setItem('user', JSON.stringify(res.data.pop()))
                    // state.isAuthenticated = true;
                    commit('LOGIN_SUCCESS')

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
        async LOGIN_SUCCESS(state) {
            state.isAuthenticated = true;
        },
        LOGOUT(state) {
            localStorage.removeItem('user')
            state.isAuthenticated = false;
            router.push({name: 'login'})
        }
    },
}

export default UserModule