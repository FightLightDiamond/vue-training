<template>
  <div>
    <h1>Profile</h1>
    <table class="table">
      <tr>
        <th>Name</th>
        <td>{{user.userLogin.name}}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{{user.userLogin.email}}</td>
      </tr>
      <tr>
        <th>Role</th>
        <td>{{user.userLogin.role}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "ProfilePage",
  computed: {
    ...mapState(['user'])
  },
}
</script>

<style scoped>

</style>