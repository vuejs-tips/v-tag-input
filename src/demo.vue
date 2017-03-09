<template lang="html">
<div class="container">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css" />
  <h1 class="title is-1">v-tag-input</h1>
  <div class="columns">
    <div class="column">
      <p class="control">
        <label class="label">v-model</label>
        <v-tag-input v-model="tags" class="input"></v-tag-input>
      </p>

      <p class="control">
        <label class="label">:value only</label>
        <v-tag-input :value="tags" class="input"></v-tag-input>
      </p>

      <p class="control">
        <label class="label">@input only</label>
        <v-tag-input @input="tags = arguments[0]" class="input"></v-tag-input>
      </p>

      <p class="control">
        <label class="label">Use comma as separator</label>
        <v-tag-input v-model="tags" separator="," class="input"></v-tag-input>
      </p>

      <p class="control">
        <label class="label">v-model undefined data {{undef}}</label>
        <v-tag-input v-model="undef" class="input"></v-tag-input>
      </p>

      <p class="control">
        <label class="label">v-model null data {{nil}}</label>
        <v-tag-input v-model="nil" class="input"></v-tag-input>
      </p>
    </div>

    <div class="column">
      <pre>{{tags}}</pre>
    </div>
  </div>
</div>
</template>

<script>
import VTagInput from './Component.vue'

export default {
  components: {VTagInput},
  data () {
    return {
      tags: ['foo', 'bar'],
      undef: undefined,
      nil: null
    }
  }
}
</script>
