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

export default {
  name: "InactiveListComponent",
  props: ['tasks'],
  components: {
    'table-component': TableComponent
  },
  methods: {
    onActive(id) {
      // alert('call active from child')
      // get index by id
      const index = this.findIndexTaskById(id)
      this.activeTaskByIndex(index)
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