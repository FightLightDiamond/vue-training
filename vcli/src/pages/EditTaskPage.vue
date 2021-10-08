<template>
  <div>
    <h2>Edit new Task</h2>
    <ValidationObserver ref="editTask">
      <ValidationProvider name="Task" rules="min:8|required" :bails="false" v-slot="{ errors }">
        <div class="input-group mb-3">
          {{id}} {{task}}
          <input type="text" class="form-control" v-model="task.taskEdit.title" placeholder="Enter new task name">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="onCreate">Edit</button>
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
import {mapActions, mapState} from "vuex";

export default {
  name: "EditTaskPage",
  data: function () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['task'])
  },
  created() {
    this.getTask(this.id)
  },
  methods: {
    /*
    * Use mutations on vuex
    * */
    ...mapActions(['getTask', 'editTask']),
    onCreate() {
      this.$refs.editTask.validate().then(success => {
        if (!success) {
          return;
        }
        alert(this.task.taskEdit.title)
        // we create new task on here
        const task = {id: this.id, title: this.task.taskEdit.title}
        this.taskName = ''
        this.editTask(task)
      })
    },
  },
}
</script>

<style scoped>

</style>