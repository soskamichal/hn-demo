<template>
  <div class="home">
    <h1>Testing, attention please</h1>
    <p>feel the tension as soon as someone mentions me</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  async created() {
    await this.getMostPopular()
    console.log(this.$store.state.mostPopular)
  },

  methods: {
    ...mapActions(['getMostPopular']),

  }
}
</script>
