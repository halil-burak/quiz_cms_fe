<template>
  <div>
    <LanguageForm />
    <LanguageTable />
  </div>
</template>

<script>
import LanguageForm from './LanguageForm'
import LanguageTable from './LanguageTable'
export default {
  components: { LanguageForm, LanguageTable }
}
</script>

<style scoped>
button {
  background: #009435;
  border: 1px solid #009435;
}
.small-container {
  max-width: 680px;
}
</style>
