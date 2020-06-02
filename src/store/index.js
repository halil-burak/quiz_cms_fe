import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function requestError(err, part) {
  console.log(err + ' ' + part)
}

export default new Vuex.Store({
  state: {
    languages: []
  },
  getters: {
    languageCount(state) {
      return state.languages.length
    },
    languageList(state) {
      return state.languages
    }
  },
  mutations: {
    FETCH_LANGUAGES(state, data) {
      console.log('Fetching languages...')
      state.languages = data
      console.log('Fetched languages.')
    }
  },
  actions: {
    getLanguages({ commit }) {
      console.log('Requesting to fetch languages from server...')
      fetch('http://localhost:8080/api/languages/listAll')
        .then(response => response.json())
        .then(data => commit('FETCH_LANGUAGES', data))
        .catch(err => requestError(err, 'languages'))
    }
  },
  modules: {}
})
