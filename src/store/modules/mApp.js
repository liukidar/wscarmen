export const mApp = {
  namespaced: true,
  state: {
    title: 'IGPLombardia',
    home: {
      id: 'home',
      href: '',
      icon: 'home',
      color: 'main-color',
      sublinks: [
        { id: 'highlights', href: 'highlights' },
        { id: 'news', href: 'news' }
      ]
    },
    pages: {
      information: {
        id: 'information',
        href: '/information',
        icon: 'info',
        color: 'main-color',
        sublinks: [
          { id: 'igp', href: '!' },
          { id: 'passivhaus', href: 'passivhaus' },
          { id: 'executive', href: 'executive' },
          { id: 'partner', href: 'partner' }
        ]
      },
      registration: {
        id: 'registration',
        href: '/registration',
        icon: 'supervisor_account',
        color: '',
        sublinks: [
          { id: 'privates', href: '!' },
          { id: 'society', href: 'society' }
        ]
      },
      blog: {
        id: 'blog',
        href: '/blog',
        icon: 'chat_bubble_outline',
        color: 'blue',
        sublinks: [
          { id: 'events', href: '!' },
          { id: 'projects', href: 'projects' }
        ]
      },
      _4: { desc: 'ASSISTENZA', href: '_4', icon: 'live_help', color: 'red', sublinks: [] }
    },
    style: {
      color: {
        main: '#0079A0'
      }
    },
    lang: null
  },
  getters: {
    activePage: (state) => (route) => {
      var path = route.path.substr(1, route.path.indexOf('/', 1) - 1)
      if (path !== '') {
        return state.pages[path]
      } else {
        return state.home
      }
    },
    langs: (state) => {
      return state.lang.available_langs
    },
    activeLang: (state) => {
      return state.lang.current_lang
    }
  },
  mutations: {
    setLangRoot(state, lang) {
      state.lang = lang
    },
    changeLang(state, l) {
      state.activeLang = l
      state.lang.setLang(l)
    }
  }
}
