import Vue from 'vue'
import Vuex from 'vuex'
import { mApp } from './modules/mApp'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mApp
  },
  state: {
    cards: [
      {
        title: 'sssa',
        desc: 'qwewe qwewq eq e qsdf fwaef ewfew fweaf wefa fweafewa fwfe wefwef wef wefew fwafeew f',
        img: require('../assets/sample-1.jpg')
      },
      {
        title: 'Qwerty',
        desc: 'qwewe qwewq eq e qsdf fwaef ewfew f',
        img: require('../assets/sample-1.jpg')
      },
      {
        title: 'Title',
        desc: 'qwewe qwewq eq e qsdf fwaef ewfew fweaf wefa fweafewa fwfe wefwef wef wefew fwafeewfweaf wefa fweafewa fwfe wefwef wef wefew fwafeew f',
        img: require('../assets/sample-1.jpg')
      }
    ],
    mainCard: 1
  },
  getters: {
    card: (state) => (id) => {
      return state.cards[id]
    }
  }
})
