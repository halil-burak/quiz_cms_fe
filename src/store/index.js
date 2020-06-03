import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function requestError(err, part) {
  console.log(err + ' ' + part)
}

export default new Vuex.Store({
  state: {
    languages: [],
    platforms: [],
    categories: []
  },
  getters: {
    languageCount(state) {
      return state.languages.length
    },
    languageList(state) {
      return state.languages
    },
    platformCount(state) {
      return state.platforms.length
    },
    platformList(state) {
      return state.platforms
    },
    categoryCount(state) {
      return state.categories.length
    },
    categoryList(state) {
      return state.categories
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
    },
    FETCH_PLATFORMS(state, data) {
      console.log('Fetching platforms...')
      state.platforms = data
      console.log('Fetched platforms.')
    },
    ADD_PLATFORM(state, data) {
      console.log('Adding a platform...')
      state.platforms.push(data)
      console.log('Added a platform.')
    },
    FETCH_CATEGORIES(state, data) {
      console.log('Fetching categories...')
      state.categories = data
      console.log('Fetched categories.')
    },
    ADD_CATEGORY(state, data) {
      console.log('Adding a category...')
      state.categories.push(data)
      console.log('Added a category.')
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
    },
    getPlatforms({ commit }) {
      console.log('Requesting to fetch platforms from server...')
      fetch('http://localhost:8080/api/platforms/listAll')
        .then(response => response.json())
        .then(data => commit('FETCH_PLATFORMS', data))
        .catch(err => requestError(err, 'platforms'))
    },
    addPlatform({ commit }, platform) {
      console.log('Requesting to add a platform...')
      if (platform) {
        fetch('http://localhost:8080/api/platforms/add', {
          method: 'POST',
          body: JSON.stringify(platform),
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
          .then(response => response.json())
          .then(data => commit('ADD_PLATFORM', data))
          .catch(err => requestError(err, 'platforms'))
      }
    },
    getCategories({ commit }) {
      console.log('Requesting to fetch categories from server...')
      fetch('http://localhost:8080/api/categories/listAll')
        .then(response => response.json())
        .then(data => commit('FETCH_CATEGORIES', data))
        .catch(err => requestError(err, 'categories'))
    },
    addCategory({ commit }, category) {
      console.log('Requesting to add a category...')
      if (category) {
        fetch('http://localhost:8080/api/categories/add', {
          method: 'POST',
          body: JSON.stringify(category),
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
          .then(response => response.json())
          .then(data => commit('ADD_CATEGORY', data))
          .catch(err => requestError(err, 'categories'))
      }
    }
  },
  modules: {}
})
