<template>
  <div>
    <h1>Login</h1>
    <ValidationObserver ref="formLogin">

      <form @submit.prevent="onLogin">
        <ValidationProvider name="email" rules="email|min:8|required" :bails="false" v-slot="{ errors }">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control">
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="password" rules="min:8|required" :bails="false" v-slot="{ errors }">
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" class="form-control">
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button type="submit" class="btn btn-primary">Submit</button>
        <br><br>
        <button type="submit" class="btn btn-danger" @click="goToReg()">Not Registered yet? Click here for
          Registration
        </button>
        <br><br>
        <button type="submit" class="btn btn-warning" @click="test()">
          {{name}}
        </button>

      </form>
    </ValidationObserver>
  </div>
</template>

<script>
// import axios from "axios"
import {mapState, mapActions} from "vuex";
var myMixin = {
  //Data tiến hành merge và ưu tiên lấy giá trị component
  data: function () {
    return {
      email: 'email',
      password: 'password',
      name: 'mixin'
    }
  },
  //Hook sẽ chạy hook mixin trước rồi chạy hook component
  created: function () {
    console.log('mixin hook called')
  },
  //Methods tiến hành merge và ưu tiên lấy component
  methods: {
    test: function () {
      alert('Test function mixin')
    },
    onLogin() {
      alert('Mixin login')
    }
  }
}

export default {
  mixins: [myMixin],
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['login']),
    goToReg() {
      this.$router.push("/Registration");
    },
    goToChangePwd() {
      this.$router.push("/ChangePwd");
    },
    onLogin: async function () {
      this.$refs.formLogin.validate().then(async (success) => {
        if (!success) {
          return;
        }
        this.login({email: this.email, password: this.password, ability: this.$ability})
        //After login success, we need add permission for user
      })
    }
  },
  beforeCreate() {
    console.log("beforeMount")
  },
  created() {
    console.log('component hook called')
    console.log("this.ability", this.$ability)
    /*
    * Had login
    * */
    if (this.user.isAuthenticated) {
      this.$router.push({name: 'task'})
    }
    console.log("mounted")
  },
}
</script>

<style scoped>

</style>
