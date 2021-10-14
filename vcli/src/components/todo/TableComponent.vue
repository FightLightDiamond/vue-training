<template>
  <table class="table table-bordered">
    <tr>
      <th>Title</th>
      <th>Assign</th>
      <th style="width: 10%"></th>
    </tr>
    <slot></slot>
  </table>
</template>

<script>
export default {
name: "TableComponent"
}
</script>

<style scoped>

</style>