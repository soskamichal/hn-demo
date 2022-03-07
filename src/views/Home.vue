<template>
  <div class="home">
    <div class="my-5">
      <h1 class="text-lg">Top posts from hackernews!</h1>
    </div>
    <div class="flex-1 flex-wrap">
      <div class="w-full md:w-1/2 lg:w-1/3 border border-round-1 border-slate-2">
        <h3>A post on hackernews</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, itaque quam. Illo iste architecto inventore sint earum tenetur neque minus ad deserunt, eum dolore, voluptates, odit facilis adipisci tempora. Quisquam!</p>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 border border-round-1 border-slate-2">
        <h3>A post on hackernews</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, itaque quam. Illo iste architecto inventore sint earum tenetur neque minus ad deserunt, eum dolore, voluptates, odit facilis adipisci tempora. Quisquam!</p>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 border border-round-1 border-slate-2">
        <h3>A post on hackernews</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, itaque quam. Illo iste architecto inventore sint earum tenetur neque minus ad deserunt, eum dolore, voluptates, odit facilis adipisci tempora. Quisquam!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",

  async created() {
    await this.getMostPopular();
  },

  methods: {
    ...mapActions(["getMostPopular"]),
  },
};
</script>
