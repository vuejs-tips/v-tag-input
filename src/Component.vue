<template lang="html">
  <input class="v-tag-input" type="text" v-model="editableValue">
</template>

<script>
export default {
  name: 'v-tag-input',
  props: {
    value: {
      type: Array,
      default: () => [] // factory function
    },
    separator: {
      type: String,
      default: ' '
    }
  },
  computed: {
    editableValue: {
      get () {
        return (this.value || []).join(this.separator)
      },
      set (newValue) {
        newValue = newValue.trim() ? newValue.split(this.separator) : []
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
