<template>
  <div class="home flex flex-col items-center justify-center">
    <div class="my-5">
      <h1 class="text-3xl">Top posts from hackernews!</h1>
    </div>
    <post-grid />
  </div>
</template>

<script>
import PostGrid from "../components/PostGrid"
import { mapActions } from "vuex";

export default {
  name: "Home",

  components: {
    PostGrid
  },

  async created() {
    await this.getMostPopular()
    await this.getPosts()
  },

  methods: {
    ...mapActions(["getMostPopular", "getPosts"]),
  },
};
</script>
