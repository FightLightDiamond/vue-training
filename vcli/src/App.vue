<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link v-if="user.isAuthenticated===true" class="nav-link" to="/task">Task</router-link>
            <!--            <a class="nav-link" href="/task">Task</a>-->
          </li>
          <li class="nav-item">
            <router-link v-if="user.isAuthenticated===true && !$ability.cannot('update', 'Password')" class="nav-link" to="/ChangePwd">ChangePwd</router-link>
            <!--            <a class="nav-link" href="/task">Task</a>-->
          </li>
          <li class="nav-item">
            <router-link v-if="user.isAuthenticated===false" class="nav-link" to="/login">Login</router-link>
            <!--            <a class="nav-link" href="/login">Login</a>-->
          </li>
          <li class="nav-item">
            <router-link v-if="user.isAuthenticated===false" class="nav-link" to="/Registration">Registration</router-link>
            <!--            <a class="nav-link" href="/task">Task</a>-->
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item v-if="user.isAuthenticated===true" @click="onLogout">
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


    <div class="container">
      <!--
      Component in here, same, like slot
      -->
      <router-view />
    </div>
    <notifications position="top center" />
  </div>
</template>

<script>
// import TodoPage from "@/pages/TodoPage";
import {mapState, mapGetters, mapMutations} from "vuex";
import {abilityRoles} from "./casl/index"
import router from "@/router";


export default {
  name: 'App',
  // components: {
  //   TodoPage
  // }
  computed: {
    ...mapGetters(['role', 'username']),
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['LOGOUT']),
    onLogout: function () {
      /*
      * Remove user on local storage
      * */
      this.LOGOUT()
      this.$ability.update([])
    }
  },
  created() {
    console.log("new ability after refresh", this.$ability)
    const ability = this.$ability
    const role = this.role
    // Need update rule when browser refresh
    let permissions = abilityRoles(role)
    ability.update([...permissions.rules, ...ability.rules])
    console.log("new ability after login", ability)
    router.push({name: 'task'})
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.error {
  color: darkred;
}
</style>
