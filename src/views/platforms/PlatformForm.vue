<template>
  <div id="platformForm">
    <form @submit.prevent="addPlatform">
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
        <label for="description">Description:</label>
        <input
          id="description"
          type="text"
          :class="{ 'has-error': submitting && invalidDescription }"
          v-model="description"
          @focus="clearStatus"
          @keypress="clearStatus"
          required
        />
      </p>
      <p v-if="submitting && error" class="error-message">
        Please enter valid description!
      </p>
      <p v-if="success" class="success-message">
        ✅ Platform successfully added
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'platform_form',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      id: null,
      name: '',
      description: ''
    }
  },
  methods: {
    clearStatus() {
      this.success = false
      this.error = false
    },
    addPlatform() {
      this.submitting = true
      this.clearStatus()

      if (this.invalidName || this.invalidDescription) {
        this.error = true
        return
      }

      let platform_ = {
        name: this.name,
        email: this.description
      }

      // Call vuex action 'addPlatform'
      this.$store.dispatch('addPlatform', platform_)
      this.$refs.name.focus()

      this.name = null
      this.description = null

      this.error = false
      this.success = true
      this.submitting = false
    }
  }
}
</script>

<style scoped></style>
