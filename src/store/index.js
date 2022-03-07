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
      state.loaded += posts.length
    }
  },
  actions: {
    async getMostPopular({ commit }) {
      await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
        .then(response => response.json())
        .then(data => commit('setMostPopular', data))
    }
  },
  modules: {
  }
})
