import Vue from 'vue'
import Vuex from 'vuex'
import { module as app } from './modules/app'
import { module as pages } from './modules/pages'
import { module as scroll } from 'cmps/lib/ScrollWrap'
import { module as sourcedmng } from 'cmps/lib/sourced/SourcedMng'
import { module as filemanager } from 'cmps/site/Filemanager'
import { API } from 'lib/js/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: API('https://www.carmentese.it/api/controller'),
    accessFlag: '',
    title: 'Carmen',
    supportedLangs: ['it'],
    lang: 'it'
  },
  mutations: {
    changeLang(state, payload) {
      state.lang = state.supportedLangs[payload]
    }
  },
  modules: {
    app,
    scroll,
    pages,
    filemanager,
    sourcedmng
  }
})
