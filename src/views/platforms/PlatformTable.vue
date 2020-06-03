<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          |
          <th>Description</th>
          |
          <th>Languages</th>
          |
          <th>Categories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="platform in platforms" :key="platform.id">
          <td>
            {{ platform.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'platform-table',
  computed: {
    platforms() {
      return this.$store.getters.platformList
    }
  },
  mounted() {
    this.$store.dispatch('getPlatforms')
  }
}
</script>

<style></style>
