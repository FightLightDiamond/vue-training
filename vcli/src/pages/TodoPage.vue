<template>
<!--
Vue cli support .vue => not use.js
-->
  <div class="container">
    <h1>Todo</h1>
<!--    <create-component @event-create-from-child="onCreate"></create-component>-->
    <create-component></create-component>
    <inactive-list-component></inactive-list-component>
    <active-list-component></active-list-component>
    <total-component/>
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

import {mapState, mapActions} from "vuex"


export default {
name: "TodoPage",
  components: {
    'create-component': CreateComponent,
    'inactive-list-component': InactiveListComponent,
    'active-list-component': ActiveListComponent,
    'total-component': TotalComponent,
  },
  created() {
    if(this.isAuthenticated) {
      this.getTasks()
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
    ...mapState(['isAuthenticated', 'tasks']),
  },
  methods: {
    ...mapActions(['getTasks']),
    // onCreate(taskFromChild) {
    //   this.tasks = [...this.tasks, taskFromChild]
    // },
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