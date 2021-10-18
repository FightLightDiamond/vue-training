<template>
  <div>
    <h1>Change Password</h1>
    <ValidationObserver ref="formPwd">
      <form @submit.prevent="onChangePassword">
        <!--        <div class="form-group">-->
        <!--          <label>Email address</label>-->
        <!--          <input type="email" v-model="email" class="form-control">-->
        <!--        </div>-->

        <ValidationProvider name="password" rules="min:8|required|notsame:@new_password" :bails="false" v-slot="{ errors }">
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" class="form-control">
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="new_password" vid="new_password"
                            rules="min:8|required|confirmed:confirm_password" :bails="false"
                            v-slot="{ errors }">
          <div class="form-group">
            <label>New Password</label>
            <input type="password" v-model="new_password" class="form-control">
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="confirm_password" :bails="false" v-slot="{ errors }" vid="confirm_password">
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" v-model="confirm_password" class="form-control">
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <button type="submit" class="btn btn-primary"> Submit</button>
        <br>
        <br>

        <!--       <button type="submit" class="btn btn-success" @click="goToLogin()">Log In</button>-->

      </form>
    </ValidationObserver>

  </div>
</template>

<script>
import axios from "axios";
import {mapState, mapGetters} from "vuex"

export default {
  name: "ChangePwd",
  data() {
    return {
      /*
      * How to get self id user had login
      * */
      password: '',
      new_password: '',
      confirm_password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['authId'])
  },
  methods: {
    goToLogin() {
      // this.$router.push("/login");
    },
    onChangePassword: function () {
      //check new password and password confirmation same. Can use support by: https://vee-validate.logaretm.com/v3/guide/rules.html#rules
      //check password is correct
      this.$refs.formPwd.validate().then(async (success) => {
        if (!success) {
          return;
        }
        try {
          const res = await axios.get(`http://localhost:2000/users?id=${this.id}&password=${this.password}`)
          console.log('check password repose', res)
          /*
        * Count length array. No found account return array eq []
        *
        * */
          if (res.status === 200 && res.data.length > 0) {
            /*
            * After check password success, change new password
            * */
            await this.updatePassword();

          } else {
            /*
            * Check password fail
            * Set error message
            * */
            this.$refs.formPwd.setErrors({password: 'Password incorrect'});
            // alert('User or password incorrect')
          }
        } catch (e) {
          alert(e.toString())
        }
      })
    },
    async updatePassword() {
      try {
        /*
        * PUT: hard update data, data same data update, remove data not same request data
        * PATCH: update not remove data not same
        * */
        // const res = await axios.put(`http://localhost:2000/users/${this.id}`, {password: this.password})
        const res = await axios.patch(`http://localhost:2000/users/${this.authId}`, {password: this.new_password})
        console.log('Res chang password', res)
        if (res.status === 200) {
          alert('Change password success')
        } else {
          alert('Change password fail')
        }
      } catch (e) {
        alert(e.toString())
      }
    },
  },
  beforeCreate() {
    console.log("beforeMount")
  },
  created() {
    if(this.$ability.cannot('update', 'Password')) {
      this.$router.push({name: "task"})
    } else if(!this.user.isAuthenticated ) {
      this.$router.push({name: "login"})
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