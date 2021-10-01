<template>
  <div>
    Total: {{ totalTask }}
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "TotalComponent",
  computed: {
    ...mapGetters(['totalTask'])
  }
}
</script>

<style scoped>

</style>