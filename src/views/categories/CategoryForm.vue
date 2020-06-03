<template>
  <div id="categoryForm">
    <form @submit.prevent="addCategory">
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
        ✅ Category successfully added
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'category_form',
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
    addCategory() {
      this.submitting = true
      this.clearStatus()

      if (this.invalidName || this.invalidDescription) {
        this.error = true
        return
      }

      let category_ = {
        name: this.name,
        description: this.description
      }

      // Call vuex action 'addCategory'
      this.$store.dispatch('addCategory', category_)
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
