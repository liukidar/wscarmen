<template>
  <div id="app">
    <div id="!">
      <v-navbar></v-navbar>
      <v-sidebar></v-sidebar>
      <main>
        <login-modal></login-modal>
        <router-view/>
      </main>
      <fabbutton></fabbutton>
      <scroll-up-arrow></scroll-up-arrow>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import './lib/js/materialize.min.js'
import VNavbar from './pages/components/Navbar'
import VSidebar from './pages/components/Sidebar'
import VFooter from './pages/components/Footer'
import Fabbutton from './pages/components/Fabbutton'
import ScrollUpArrow from './pages/components/misc/ScrollUpArrow'
import LoginModal from './pages/components/modals/LoginModal'

export default {
  name: 'App',
  components: {
    VNavbar,
    VSidebar,
    VFooter,
    Fabbutton,
    ScrollUpArrow,
    LoginModal
  },
  methods: {
    materialize() {
      var elems = document.querySelectorAll('.materialboxed')
      M.Materialbox.init(elems, {})
      elems = document.querySelectorAll('.modal')
      M.Modal.init(elems, {})
      elems = document.querySelectorAll('.tooltipped')
      M.Tooltip.init(elems, {})
    }
  },
  beforeCreate() {
    this.$store.commit('mApp/setLangRoot', this.$lang)
  },
  mounted() {
    this.materialize()
  },
  updated() {
    this.materialize()
  }
}
</script>

<style>
@import './lib/css/materialize.min.css';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import 'https://fonts.googleapis.com/css?family=Poiret+One';

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  max-width: 100vw;
}

body {
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  line-height: 1.2;
}

*:focus {
  outline: 0;
}

header,
main,
footer {
  padding-right: 300px;
}

@media only screen and (max-width: 992px) {
  header,
  main,
  footer {
    padding-right: 0;
  }
}

::-webkit-scrollbar {
  width: 12px;
  position: absolute;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.35);
}

.sidenav li > a > i.material-icons {
  height: auto !important; /*BUG?*/
}

.main-color {
  background: #0079a0 !important;
}

.btn.main-color:hover {
  background: #229Bc2 !important;
}

hr {
  border: none;
  height: 1px;
}

.title {
  padding: 20px;
  margin-top: 0;
  font-family: 'Poiret ONe';
  text-transform: uppercase;
}

ul.browser-default {
  padding:0 30px;
}
ul.browser-default > li {
  padding:4px 0;
  line-height: 1.3;
  list-style-type: disc;
}

.row {
  margin-bottom:0;
}
.row .col {
  margin-bottom:20px;
}
</style>
