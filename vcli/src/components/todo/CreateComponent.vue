<template>
  <div>
    <h2>Create new Task</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="taskName" placeholder="Enter task name">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="onCreate" >Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import makeUId from "../../helpers/makeUID"

export default {
name: "CreateComponent",
  data: function () {
    return {
      taskName: ""
    }
  },
  methods: {
    onCreate() {
      // we create new task on here
      const task = {id: makeUId(), title: this.taskName, active: 0}
      this.taskName = ''
      // you modified code here use axios create task, can you try?
      /**
       * Create event form child to parent listen data
       * $emit is function create event of VUE Support
       */
      this.$emit('event-create-from-child', task)
    }
  }
}
</script>

<style scoped>

</style>