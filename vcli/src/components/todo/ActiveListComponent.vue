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
import axios from "axios";

export default {
  name: "ActiveListComponent",
  //tasks here
  props: ['tasks'],
  components: {
    'table-component': TableComponent
  },
  methods: {
    onRemove(id) {
      /*
      * I will use axios remove task
      * Call to api remove task
      *
      * Use mutations on vuex
      * */

      axios.delete(`http://localhost:2000/tasks/${id}` ).then((res) => {
        console.log('delete', res)
        // check response api success. Had remove task
        if(res.status === 200) {

          // remove task on data
          const index = this.findIndexTaskById(id);
          this.removeTaskByIndex(index);
          alert('Delete task successfully')
        } else {
          // No remove task on api
          alert('Delete task fail')
        }
      }).catch((error) => {
        //error
        alert(error.toString())
      })
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