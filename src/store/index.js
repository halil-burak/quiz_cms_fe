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
    },
    ADD_LANGUAGE(state, data) {
      console.log('Adding a language...')
      state.languages.push(data)
      console.log('Added a language.')
    }
  },
  actions: {
    getLanguages({ commit }) {
      console.log('Requesting to fetch languages from server...')
      fetch('http://localhost:8080/api/languages/listAll')
        .then(response => response.json())
        .then(data => commit('FETCH_LANGUAGES', data))
        .catch(err => requestError(err, 'languages'))
    },
    addLanguage({ commit }, language) {
      console.log('Requesting to add a language...')
      if (language) {
        fetch('http://localhost:8080/api/languages/add', {
          method: 'POST',
          body: JSON.stringify(language),
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
          .then(response => response.json())
          .then(data => commit('ADD_LANGUAGE', data))
          .catch(err => requestError(err, 'languages'))
      }
    }
  },
  modules: {}
})
