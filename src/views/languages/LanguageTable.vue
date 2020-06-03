<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          |
          <th>Short Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="language in languages" :key="language.id">
          <td>
            {{ language.name }}
          </td>
          <td>
            {{ language.shortName }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'language_table',
  data() {
    return {}
  },
  methods: {},
  computed: {
    languages() {
      return this.$store.getters.languageList
    }
  }
}
</script>

<style scoped></style>
