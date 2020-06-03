<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          |
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>
            {{ category.name }}
          </td>
          <td>
            {{ category.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'category-table',
  computed: {
    categories() {
      return this.$store.getters.categoryList
    }
  },
  mounted() {
    this.$store.dispatch('getCategories')
  }
}
</script>

<style></style>
