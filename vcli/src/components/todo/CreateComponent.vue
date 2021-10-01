<template>
  <div>
    <h2>Create new Task</h2>
    <ValidationObserver ref="createTask">
      <ValidationProvider name="Task" rules="min:8|required" :bails="false" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="taskName" placeholder="Enter task name">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="onCreate">Add</button>
          </div>
        </div>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </ValidationProvider>
    </ValidationObserver>
  </div>
</template>

<script>

import {mapActions} from "vuex"

export default {
  name: "CreateComponent",
  data: function () {
    return {
      taskName: ""
    }
  },
  methods: {
    /*
    * Use mutations on vuex
    * */
    ...mapActions(['createTask']),
    onCreate() {
      this.$refs.createTask.validate().then(success => {
        if (!success) {
          return;
        }
        // we create new task on here
        const task = {title: this.taskName, active: 0}
        this.taskName = ''
        this.createTask(task)
      })
    }
  },
}

</script>

<style scoped>

</style>