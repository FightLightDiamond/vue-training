<template>
<!--
Vue cli support .vue => not use.js
-->
  <div class="container">
    <h1>Todo</h1>
    <create-component @event-create-from-child="onCreate"></create-component>
    <inactive-list-component :tasks="tasks"></inactive-list-component>

    <active-list-component :tasks="tasks"></active-list-component>
    <total-component :total="total" />

    <div>
      <p>Write to complete todo list example</p>
      - Get tasks data for List inactive and list active
      - Event Create Task
      - Event Active Task
      - Event Remove Task
      - View total Task
    </div>
  </div>
</template>

<script>
import CreateComponent from "@/components/todo/CreateComponent";
import InactiveListComponent from "@/components/todo/InactiveListComponent";
import ActiveListComponent from "@/components/todo/ActiveListComponent";
import TotalComponent from "@/components/todo/TotalComponent";

import axios from "axios"
import {mapState} from "vuex"
export default {
name: "TodoPage",
  data() {
    return {
      /*
      * Use state on vuex
      * */
      tasks: []
    }
  },
  components: {
    'create-component': CreateComponent,
    'inactive-list-component': InactiveListComponent,
    'active-list-component': ActiveListComponent,
    'total-component': TotalComponent,
  },
  created() {
    if(this.isAuthenticated) {
      axios.get('http://localhost:2000/tasks/').then((res) => {
        console.log('task res', res)
        if(res.status === 200) {
          this.tasks = res.data
        } else {
          alert('Get tasks fail')
        }
      }).catch((error) => {
        alert(error.toString())
      })
    } else {
      /*
      * Only login access page
      * */
      this.$router.push({name: "login"})
    }
  },
  /*
  * I can not move or move for child
  * Computed cache, if computed use by many component. I will move for child, if one component use
  * */
  computed: {
    ...mapState(['isAuthenticated']),
    total: function () {
      return this.tasks.length
    }
  },
  methods: {
    onCreate(taskFromChild) {
      this.tasks = [...this.tasks, taskFromChild]
    },
  },
}
</script>

<style scoped lang="css">
  h1 {
    color: red;
  }
  p {
    color: rebeccapurple;
  }
</style>