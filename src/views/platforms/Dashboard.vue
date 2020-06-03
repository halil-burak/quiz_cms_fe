<template>
  <div>
    <PlatformForm />
    <PlatformTable />
  </div>
</template>

<script>
import PlatformForm from './PlatformForm.vue'
import PlatformTable from './PlatformTable.vue'
export default {
  components: {
    PlatformForm,
    PlatformTable
  }
}
</script>

<style scoped></style>
