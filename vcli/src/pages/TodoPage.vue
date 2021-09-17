<template>
<!--
Vue cli support .vue => not use.js
-->
  <div id="app" class="container">
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

export default {
name: "TodoPage",
  data() {
    return {
      tasks: [
        {id: this.makeUId(), title: 'Task1', active: 0},
        {id: this.makeUId(), title: 'Task2', active: 1},
      ],
    }
  },
  components: {
    'create-component': CreateComponent,
    'inactive-list-component': InactiveListComponent,
    'active-list-component': ActiveListComponent,
    'total-component': TotalComponent,
  },
  /*
  * I can not move or move for child
  * Computed cache, if computed use by many component. I will move for child, if one component use
  * */
  computed: {
    total: function () {
      return this.tasks.length
    }
  },
  methods: {
    onCreate(taskFromChild) {
      this.tasks = [...this.tasks, taskFromChild]
    },
    makeUId(length = 10) {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
      }
      return result
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