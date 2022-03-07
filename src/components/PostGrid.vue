<template>
  <div class="flex-1 flex-wrap">
    <div
      v-for="(post, index) in posts"
      :key=index
      class="w-full md:w-1/2 lg:w-1/3 border border-round-1 border-slate-2 flex flex-col"
    >
      <h3>Author: {{post.author}}</h3>
      <h5>Created: {{post.time}}</h5>
      <a class="text-blue-600" :href="post.internalLink">Hacker News link</a>
      <a class="text-blue-600" :href="post.externalLink">External Link</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {

  methods: {
    ...mapActions(["getPosts"]),
  },

  computed: {
    ...mapGetters(['posts'])
  }
}
</script>