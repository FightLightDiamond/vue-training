<template>
  <div>
    <h2>Create new Task</h2>
        <ValidationObserver ref="createTask">
        <ValidationProvider name="Task" rules="min:8|required" :bails="false" v-slot="{ errors }">

    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="taskName" placeholder="Enter task name">
 
       
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="onCreate" >Add</button>
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

import axios from "axios"

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
    onCreate() {

           this.$refs.createTask.validate().then(success => {
        if (!success) {
          return;
        }
      // we create new task on here
      const task = {title: this.taskName, active: 0}

      axios.post('http://localhost:2000/tasks/', task).then((res) => {
        if(res.status === 201) {
          this.taskName = ''
          /**
           * Create event form child to parent listen data
           * $emit is function create event of VUE Support
           */
          console.log('newTask before call API', task)
          console.log('newTask after call API', res.data)

          // this.$emit('event-create-from-child', task)
          this.$emit('event-create-from-child', res.data)
          alert('create task successfully')
        } else {
          alert('create task fail')
        }
      }).catch((error) => {
          alert(error.toString())
        })
      })
    }
  },}

</script>

<style scoped>

</style>