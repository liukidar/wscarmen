import { module as home } from './pages/home'
import { module as articles } from './pages/articles'

export const module = {
  namespaced: true,
  state: {
    pages: {
      home: {
        href: '',
        icon: 'home',
        color: 'main-color',
        sections: [
          'about', 'news', 'infos'
        ]
      },
      articles: {
        href: '/articles',
        icon: 'home',
        color: 'grey darken-4',
        sections: [
          'articles'
        ]
      }
    }
  },
  getters: {
    activePage: (state) => (route) => {
      var path = route.path.substr(1, route.path.indexOf('/', 1) - 1)
      if (path !== '') {
        return { ...state.pages[path], id: path }
      } else {
        return { ...state.pages.home, id: 'home' }
      }
    }
  },
  modules: {
    home, articles
  }
}
