<template>
  <div>
    <QuestionForm />
    <QuestionTable />
  </div>
</template>

<script>
import QuestionForm from './QuestionForm.vue'
import QuestionTable from './QuestionTable.vue'
export default {
  components: {
    QuestionForm,
    QuestionTable
  }
}
</script>

<style></style>
