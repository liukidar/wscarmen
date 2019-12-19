import Vue from 'vue'

export const module = {
  namespaced: true,
  state: {
    articles: {},
    highlights: [],
    it: {
      sections: {
        articles: {
          title: 'Articoli'
        }
      }
    },
    en: {

    }
  },
  mutations: {
    list(state, payload) {
      state.articles = payload
    },
    highlights(state, payload) {
      state.highlights = payload
    },
    load(state, payload) {
      state.articles[payload.ID].paragraphs = payload.paragraphs
    },
    add(state, payload) {
      Vue.set(state.articles, payload.ID, payload.article)
    },
    save(state, payload) {
      Vue.set(state.articles, payload.ID, payload.article)
    },
    remove(state, payload) {
      Vue.delete(state.articles, payload)
    }
  },
  actions: {
    list(context) {
      context.rootState.api.request('GET', 'article', {}, (r) => {
        context.commit('list', r.success)
      })
    },
    highlights(context) {
      let data = {
        news: true
      }
      context.rootState.api.request('GET', 'article', data, (r) => {
        context.commit('highlights', r.success)
      })
    },
    load(context, payload) {
      let data = {
        ID: payload
      }
      context.rootState.api.request('GET', 'article', data, (r) => {
        context.commit('load', { files: r.success })
      })
    },
    add(context) {
      context.rootState.api.request('POST', 'article', {}, (r) => {
        if (r.success) {
          context.commit('add', r.success)
        } else {
          console.log(r.error)
        }
      })
    },
    highlight(context, payload) {
      context.rootState.api.request('PUT', 'article', { highlight: true, ...payload }, (r) => {

      })
    },
    remove(context, payload) {
      context.rootState.api.request('DELETE', 'article', payload, (r) => {
        context.commit('remove', r.success)
      })
    },
    updateMetadata(context, payload) {
      let data = {
        metadata: true,
        ...payload
      }
      context.rootState.api.request('PUT', 'article', data)
    }
  },
  getters: {
    text(state, getters, rootState) {
      return state[rootState.lang]
    },
    list(state, getters, rootState) {
      return state.articles
    },
    listHighlights(state, getters, rootState) {
      return state.highlights.map((el) => state.articles[el])
    }
  }
}
