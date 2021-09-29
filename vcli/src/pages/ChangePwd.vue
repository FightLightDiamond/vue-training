<template>
  <div>
    <h1>Change Password</h1>
    <ValidationObserver ref="formPwd">
        

      <form @submit.prevent="onChangePwd">
        <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control">
           
          </div>

        <ValidationProvider name="password" rules="min:8|required" :bails="false" v-slot="{ errors }">
          <div class="form-group">
            <label>New Password</label>
            <input type="password" v-model="password" class="form-control">
            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="Confirm_password" rules="password!=''?!Confirm_password" :bails="false" v-slot="{ errors }">
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" v-model="Confirm_password" class="form-control">
            <span class="error">{{ errors[0] }}</span>
                        <span class="error">{{ errors[0] }}</span>

          </div>
        </ValidationProvider>






         
        <button type="submit(user.id)" class="btn btn-primary"> Submit</button>
        <br>
        <br>

        <button type="submit" class="btn btn-success" @click="goToLogin()">Log In
        </button>

      </form>
    </ValidationObserver>

  </div>
</template>

<script>


export default {
  name: "ChangePwd",
  data() {
    return {

     

    }
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },

    
  },
  beforeCreate() {
    console.log("beforeMount")
  },
  created() {
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