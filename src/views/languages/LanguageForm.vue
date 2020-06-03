<template>
  <div id="languageForm">
    <form @submit.prevent="addLanguage">
      <p>
        <label for="name">Name:</label>
        <input
          ref="name"
          id="name"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="name"
          @focus="clearStatus"
          @keypress="clearStatus"
          required
        />
      </p>

      <p>
        <label for="shortName">Short-name:</label>
        <input
          id="short_name"
          type="text"
          :class="{ 'has-error': submitting && invalidShortName }"
          v-model="shortName"
          @focus="clearStatus"
          @keypress="clearStatus"
          required
        />
      </p>

      <p v-if="submitting && error" class="error-message">
        Please enter valid information!
      </p>
      <p v-if="success" class="success-message">
        ✅ Language successfully added
      </p>

      <p id="submitButton">
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'language_form',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      id: null,
      name: '',
      shortName: ''
    }
  },
  methods: {
    clearStatus() {
      this.success = false
      this.error = false
    },
    addLanguage() {
      this.submitting = true
      this.clearStatus()

      if (this.invalidName || this.invalidShortName) {
        this.error = true
        return
      }

      let language_ = {
        name: this.name,
        shortName: this.shortName
      }

      // Call vuex action 'addLanguage'
      this.$store.dispatch('addLanguage', language_)
      this.$refs.name.focus()

      this.name = null
      this.shortName = null

      this.error = false
      this.success = true
      this.submitting = false
    }
  },
  computed: {
    languages() {
      return this.$store.getters.languageList
    },
    invalidName() {
      return this.name === ''
    },
    invalidShortName() {
      return this.shortName === '' || this.shortName.length > 3
    }
  },
  mounted() {
    this.$store.dispatch('getLanguages')
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
[class*='-message'] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
