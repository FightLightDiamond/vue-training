<template>
  <div>
    <h2>List inactive</h2>
    <table-component>
      <tr v-for="task in tasks" v-show="!task.active" v-bind:key="task.id">
        <td>{{task.title}}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-danger" @click="onActive(task.id)">Active</button>
        </td>
      </tr>
    </table-component>
  </div>
</template>

<script>
import TableComponent from "./TableComponent"
import axios from "axios"

export default {
  name: "InactiveListComponent",
  props: ['tasks'],
  components: {
    'table-component': TableComponent
  },
  methods: {
    onActive(id) {

      alert(id)
      /*
     * I will use axios remove task
     * Call to api remove task
     * */

      // //update task in vue before call api, logic wrong
      // const index = this.findIndexTaskById(id)
      // this.activeTaskByIndex(index)

      axios.patch(`http://localhost:2000/tasks/${id}` ).then((res) => {
        console.log('delete', res)
        // check response api success. Had update task
        if(res.status === 200) {

        // Must change state data task when after call api success
          const index = this.findIndexTaskById(id)
          this.activeTaskByIndex(index)

          alert('Active task successfully')
        } else {
          // No remove task on api
          alert('Active task fail')
        }
      }).catch((error) => {
        //error
        alert(error.toString())
      })

      // you can write code here
    },
    findIndexTaskById(id) {
      return this.tasks.findIndex((obj => obj.id === id))
    },
    activeTaskByIndex(index) {
      this.tasks[index].active = 1
    }
  }
}
</script>

<style scoped>

</style>