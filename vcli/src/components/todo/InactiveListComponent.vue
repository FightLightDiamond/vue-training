<template>
  <div>
         {{JSON.stringify(this.activeTasks)}}
    <h2>List inactive</h2>
   

    <table-component>
      <tr v-for="(task, index) in inactiveTasks" v-bind:key="task.id">
        <td>{{ task.title }}</td>
        <td>
          <b-form-select
            @change="onAssign(index, task.id)"
            v-model="task.assign"
            :options="optionsUser"
          ></b-form-select>
        </td>
        <td class="text-right">
          <Can I="update" a="Task">
            <router-link
              :to="{ name: 'task.edit', params: { id: task.id } }"
              class="btn btn-sm btn-info"
              >Edit</router-link
            >
          </Can>

          <Can I="active" a="Task">
            <button class="btn btn-sm btn-danger" @click="updateTask(task.id)">
              Active
            </button>
          </Can>
        </td>
      </tr>
    </table-component>
  </div>
</template>

<script>
import TableComponent from "./TableComponent";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InactiveListComponent",
  components: {
    "table-component": TableComponent,
  },
  computed: {
    ...mapGetters(["inactiveTasks", 'optionsUser']),
  },
  methods: {
    ...mapActions(["updateTask","getUsers", "assignTask"]),
    onAssign(index, id) {
      const { assign } = this.activeTasks[index];
      this.assignTask({ id, assign });
    },
  },
};
</script>

<style scoped>
</style>