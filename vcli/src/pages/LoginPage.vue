<template>
<div>
  <h1>Login</h1>
  <form @submit.prevent="onLogin">
    <div class="form-group">
      <label >Email address</label>
      <input type="email" v-model="email" class="form-control">
    </div>
    <div class="form-group">
      <label >Password</label>
      <input type="password" v-model="password" class="form-control" >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button> <br><br>
    <button type="submit" class="btn btn-danger" @click="goToReg()">Not Registered yet? Click here for Registration</button>

  </form>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToReg() {
      this.$router.push("/Registration");
    },
    onLogin: async function () {
      try {
        const res = await axios.get(`http://localhost:2000/users?email=${this.email}&password=${this.password}`)
        console.log('login', res)
      /*
      * Count length array. No found account return array eq []
      *
      * */
        if(res.status === 200 && res.data.length > 0) {
          alert('login successfully')
          /*
          * Save user login in local storage
          * LocalStorage in browser. save data for client
          * */
          localStorage.setItem('user', JSON.stringify(res.data.pop()))
          //*
          // Redirect to task
          // */
          // this.$router.push('/task')
          this.$router.push({name: 'task'})

        } else {
          alert('User or password incorrect')
        }
      } catch (e) {
        alert('Login fail' + e.toString())
      }
    }
  },
  beforeCreate() {
    console.log("beforeMount")
  },
  created() {
    /*
    * Had login
    * */
    if(localStorage.getItem('user')) {

      this.$router.push({name: 'task'})
    }
    console.log("mounted")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  },
}
</script>

<style scoped>

</style>