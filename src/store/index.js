import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mostPopular: [],
    posts: [],
    loaded: 0,
  },
  mutations: {
    setMostPopular(state, mostPopular) {
      state.mostPopular = mostPopular
    },
    addPosts(state, posts) {
      state.posts.push(posts)
      state.loaded += 1
    }
  },
  actions: {
    async getPosts({ state, commit }) {
      //load 100 posts at most
      if (state.loaded >= 100) {
        console.log('100 posts already loaded')
        return
      }
      // get 20 posts
      const urls = state.mostPopular.slice(state.loaded, state.loaded + 20)
      const requests = urls.map(e => fetch("https://hacker-news.firebaseio.com/v0/item/" + e + ".json?print=pretty").then(e => e.json()))
      try {
        await Promise.all(requests)
          .then(values => values.forEach(e => {commit('addPosts', e)}))
      } catch (error) {
        console.log(error)
      }
    },
    async getMostPopular({ commit }) {
      await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
        .then(response => response.json())
        .then(data => commit('setMostPopular', data))
    },
  },
  getters: {
    posts (state) {
      return state.posts.map(e => {
        return {
          author: e.by,
          title: e.title,
          time: Date(e.time * 1000),
          externalLink: e.url,
          internalLink: "https://news.ycombinator.com/item?id=" + e.id,
        }
      })
    }
  },
  modules: {
  }
})
