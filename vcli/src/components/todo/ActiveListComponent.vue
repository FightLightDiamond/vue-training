<template>
  <div>
    <h2>List Active</h2>
    <table-component>
      <tr v-for="task in activeTasks" v-bind:key="task.id">
        <td>{{ task.title }}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-danger" @click="REMOVE_TASK(task.id)">Remove</button>
        </td>
      </tr>
    </table-component>

<!--    <b-table striped hover :items="tasks"></b-table>-->
  </div>
  <!--You write template in here-->
</template>

<script>
import TableComponent from "./TableComponent"
import {mapGetters, mapMutations} from "vuex"

export default {
  name: "ActiveListComponent",
  //tasks here
  // props: ['tasks'],
  components: {
    'table-component': TableComponent
  },
  computed: {
    ...mapGetters(['activeTasks'])
  },
  methods: {
    ...mapMutations(['REMOVE_TASK']),
    // onRemove(id) {
    //   /*
    //   * I will use axios remove task
    //   * Call to api remove task
    //   *
    //   * Use mutations on vuex
    //   * */
    //   this.REMOVE_TASK(id)
    // },
    // findIndexTaskById(id) {
    //   return this.tasks.findIndex((obj => obj.id === id))
    // },
    // removeTaskByIndex(index) {
    //   this.tasks.splice(index, 1)
    // },
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