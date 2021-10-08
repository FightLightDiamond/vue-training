<template>
  <div>
    <h1>Registration</h1>
<!--    <ValidationObserver v-slot="{ invalid }">-->
    <ValidationObserver v-slot="{ handleSubmit, reset }" ref="formRegister">
<!--      <form @submit.prevent="handleSubmit(onReg)" @reset.prevent="reset">-->
      <form @submit.prevent="onReg" @reset.prevent="reset">
<!--      <form @submit.prevent="onReg">-->
        <ValidationProvider v-if="currentStep === 1" name="email" rules="email|min:8|required" :bails="false" v-slot="{ errors }">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control">
          </div>
          <!--        <span class="error">{{ errors[0] }}</span>-->
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </ValidationProvider>

        <ValidationProvider v-if="currentStep === 2" name="password" rules="required|min:8" v-slot="{ errors }">
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" class="form-control">
          </div>
          <!--        <span class="error">{{ errors[0] }}</span>-->
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </ValidationProvider>
        <div>
          <button type="button" @click="goToStep(currentStep - 1)">Previous</button>
            <button type="button" @click="goToStep(currentStep + 1)">{{ currentStep === 2 ? 'Submit' : 'Next' }}</button>


          <!--          <button type="submit" class="btn btn-primary" :disabled="invalid">Submit</button>-->
<!--          <button type="submit" class="btn btn-primary" >Submit</button>-->
          <br><br>
          <button type="reset" class="btn btn-primary" >Reset</button>
          <br><br>
          <button type="submit" class="btn btn-info" @click="goToLogin()">Registered already? Click here for Login
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import axios from "axios"
import {mapState} from "vuex"
export default {
  name: "Registration",
  data() {
    return {
      currentStep: 1,
      email: '',
      password: '',
      value: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    goToStep (step) {
      if (step < 1) {
        return;
      }

      if (step > 2) {
        this.onReg();
        return;
      }

      this.currentStep = step;
    },
    goToLogin() {
      this.$router.push("/login");
    },
    onReg() {
      this.$refs.formRegister.validate().then(success => {
        if (!success) {
          return;
        }
        // we create new task on here
        const user = {email: this.email, password: this.password}

        axios.post('http://localhost:2000/users/', user).then((res) => {
          if (res.status === 201) {
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
      })
    }
  },
  beforeCreate() {
    console.log("beforeMount")
  },
  created() {
    /*
    * Had login
    * */
    if (this.user.isAuthenticated) {
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