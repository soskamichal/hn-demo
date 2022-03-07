<template>
  <div class="flex-1 flex-wrap max-w-3xl justify-center items-center py-5">
    <Post v-for="(post, index) in posts" :key=index :post="post" />
    <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click.prevent="loadMore"
    >
      {{ loading }}
    </button>
  </div>
</template>

<script>
import Post from "./Post"
import { mapActions, mapGetters } from "vuex";
export default {

  data() {
    return {
      isLoading: false,
    }
  },

  components: {
    Post,
  },

  methods: {
    ...mapActions(["getPosts"]),
    async loadMore() {
      this.isLoading = true
      await this.getPosts()
      this.isLoading = false
    }
  },

  computed: {
    ...mapGetters(['posts']),
    loading() {
      return this.isLoading? "Loading" : "Load 20 more"
    }
  }
}
</script>