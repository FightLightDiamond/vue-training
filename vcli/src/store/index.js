import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";
/*
* import router because not use this.$router, here is not component
* */
import router from '../router'

Vue.use(Vuex)

const storeData = {
    state: {
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: !!localStorage.getItem('user')
    },
    mutations: {
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