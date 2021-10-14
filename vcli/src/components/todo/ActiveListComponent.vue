<template>
  <div>
    <h2>List Active</h2>
    {{JSON.stringify(this.activeTasks)}}
    <table-component>
      <tr v-for="(task, index) in activeTasks" v-bind:key="task.id" v-show="onlyViewCurrentUser(task)">
        <td>{{ task.title }}</td>
        <td>
          <b-form-select @change="onAssign(index, task.id)"  v-model="task.assign" :options="optionsUser"></b-form-select>
        </td>
        <td class="text-right">
          <Can I="delete" a="Task" >
            <button class="btn btn-sm btn-danger" @click="deleteTask(task.id)">Remove</button>
          </Can>
        </td>
      </tr>
    </table-component>

<!--    <b-table striped hover :items="tasks"></b-table>-->
  </div>
  <!--You write template in here-->
</template>

<script>
import TableComponent from "./TableComponent"
import {mapGetters, mapActions} from "vuex"
import {Task} from "@/entities";

export default {
  name: "ActiveListComponent",
  //tasks here
  // props: ['tasks'],
  data() {
    return {
      selected: null,
      // options: [
      //   { value: null, text: 'Please select an option' },
      //   { value: 'a', text: 'This is First option' },
      //   { value: 'b', text: 'Selected Option' },
      //   { value: { C: '3PO' }, text: 'This is an option with object value' },
      //   { value: 'd', text: 'This one is disabled', disabled: true }
      // ]
    }
  },
  components: {
    'table-component': TableComponent
  },
  computed: {
    ...mapGetters(['activeTasks', 'optionsUser']),
  },
  created() {
    this.getUsers()
  },
  methods: {
    onlyViewCurrentUser(task) {
      const currentTask = new Task(task)
      return this.$can('view', currentTask)
    },
    ...mapActions(['deleteTask', 'getUsers', 'assignTask']),
    onAssign(index, id) {
      const {assign} = this.activeTasks[index]
      this.assignTask({id, assign})
    }
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