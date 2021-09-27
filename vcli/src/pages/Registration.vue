<template>
<div>
  <h1>Registration</h1>
  <form @submit.prevent="onReg">
    <div class="form-group">
      <label >Email address</label>
      <input type="email" v-model="email" class="form-control">
    </div>
    <div class="form-group">
      <label >Password</label>
      <input type="password" v-model="password" class="form-control" >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button><br><br>
    <button type="submit" class="btn btn-info" @click="goToLogin()">Registered already? Click here for Login</button>

  </form>
</div>
</template>

<script>
import axios from "axios"

export default {
  name: "Registration",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    onReg() {
      // we create new task on here
      const user = {email: this.email, password: this.password}

      axios.post('http://localhost:2000/users/', user).then((res) => {
        if(res.status === 201) {
          this.email = '',
          this.password = '',
          /**
           * Create event form child to parent listen data
           * $emit is function create event of VUE Support
           */
          this.$emit('event-create-from-child', user)
          alert('Registration is complete')
        } else {
          alert('Registration fail')
        }
      }).catch((error) => {
        alert(error.toString())
      })
    }
  } ,
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