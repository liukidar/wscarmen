import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import lang from 'vuejs-localization'

Vue.config.productionTip = false
lang.requireAll(require.context('../lang', true, /\.js$/))

Vue.use(lang, {default: 'it', languages: ['it', 'en', 'de']})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
