<template>
  <div class="border rounded-md my-3 px-3  border-slate-2 flex flex-col items-start">
    <h1 class="text-2xl font-bold text-slate-800 py-2">{{ post.title }}</h1>
    <h3 class="text-slate-400">By: {{post.author}} | {{post.time}}</h3>
    <div class="w-full flex justify-evenly">
      <a class="py-2 px-3 my-2 px-6 text-white bg-green-500 inline-block rounded" :href="post.internalLink">Hacker News link</a>
      <a class="py-2 px-3 my-2 px-6 text-white bg-green-500 inline-block rounded" :href="post.externalLink">External Link</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    }
  },
}
</script>