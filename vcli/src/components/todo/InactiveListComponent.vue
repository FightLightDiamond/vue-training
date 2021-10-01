<template>
  <div>
    <h2>List inactive</h2>
    <table-component>
      <tr v-for="task in inactiveTasks" v-bind:key="task.id">
        <td>{{ task.title }}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-danger" @click="updateTask(task.id)">Active</button>
        </td>
      </tr>
    </table-component>
  </div>
</template>

<script>
import TableComponent from "./TableComponent"
import {mapGetters, mapActions} from "vuex";

export default {
  name: "InactiveListComponent",
  components: {
    'table-component': TableComponent
  },
  computed: {
    ...mapGetters(['inactiveTasks']),
  },
  methods: {
    ...mapActions(['updateTask']),
  }
}
</script>

<style scoped>

</style>