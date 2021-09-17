<template>
  <div>
    <h2>List Active</h2>
    <table-component>
      <tr v-for="task in tasks" v-show="task.active" v-bind:key="task.id">
        <td>{{ task.title }}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-danger" @click="onRemove(task.id)">Remove</button>
        </td>
      </tr>
    </table-component>

<!--    <b-table striped hover :items="tasks"></b-table>-->
  </div>
  <!--You write template in here-->
</template>

<script>
import TableComponent from "./TableComponent"

export default {
  name: "ActiveListComponent",
  props: ['tasks'],
  components: {
    'table-component': TableComponent
  },
  methods: {
    onRemove(id) {
      const index = this.findIndexTaskById(id);
      this.removeTaskByIndex(index);
    },
    findIndexTaskById(id) {
      return this.tasks.findIndex((obj => obj.id === id))
    },
    removeTaskByIndex(index) {
      this.tasks.splice(index, 1)
    },
  }
}
</script>

<style scoped>
/*
 You style here
*/
h2 {
  color: rebeccapurple;
}
</style>