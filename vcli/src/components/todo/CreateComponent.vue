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

import axios from "axios"

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
      const task = {title: this.taskName, active: 0}

      axios.post('http://localhost:2000/tasks/', task).then((res) => {
        if(res.status === 201) {
          this.taskName = ''
          /**
           * Create event form child to parent listen data
           * $emit is function create event of VUE Support
           */
          this.$emit('event-create-from-child', task)
          alert('create task successfully')
        } else {
          alert('create task fail')
        }
      }).catch((error) => {
        alert(error.toString())
      })
    }
  }
}
</script>

<style scoped>

</style>