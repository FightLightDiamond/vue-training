<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <router-link v-if="isAuthenticated===true" class="nav-link" to="/task">Task</router-link>
<!--            <a class="nav-link" href="/task">Task</a>-->
          </li>
                    <li class="nav-item">
            <router-link v-if="isAuthenticated===true" class="nav-link" to="/ChangePwd">ChangePwd</router-link>
<!--            <a class="nav-link" href="/task">Task</a>-->
          </li>
          <li class="nav-item">
            <router-link v-if="isAuthenticated===false" class="nav-link" to="/login">Login</router-link>
<!--            <a class="nav-link" href="/login">Login</a>-->
          </li>
          <li class="nav-item">
<!--            <router-link class="nav-link" to="/login">Login</router-link>-->
            <a class="nav-link" v-if="isAuthenticated===true" @click="onLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <!--
      Component in here, same, like slot
      -->
      <router-view />
    </div>
<!--    <TodoPage></TodoPage>-->

  </div>
</template>

<script>
// import TodoPage from "@/pages/TodoPage";
import {mapState, mapMutations} from "vuex";

export default {
  name: 'App',
  // components: {
  //   TodoPage
  // }
  computed: {
    ...mapState(['isAuthenticated']),
  },
  methods: {
    ...mapMutations(['LOGOUT']),
    onLogout: function () {
      /*
      * Remove user on local storage
      * */
      this.LOGOUT()
    }
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
