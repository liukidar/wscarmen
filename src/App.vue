<template>
  <div id="app">
    <scroll-wrap name="window" style="height: 100vh">
      <div class="white vertical-flex" id="!" style="min-height: 100vh">
        <main class="flex-filler">
          <router-view :loaded="!loading"/>
        </main>
        <foot></foot>
      </div>
      <template slot="overlay">
        <navbar v-show="this.$route.path.indexOf('/article/') == -1"></navbar>
        <scroll-up-arrow></scroll-up-arrow>
      </template>
    </scroll-wrap>
  </div>
</template>

<script>
import 'lib/js/masonry.min.js'
import 'lib/js/materialize.min.js'
import { Footer as Foot, Navbar } from 'cmps/site'
import { ScrollUpArrow, ScrollWrap } from 'cmps/lib'

export default {
  name: 'App',
  components: {
    Foot,
    ScrollUpArrow,
    ScrollWrap,
    Navbar
  },
  data: function() {
    return {
      loading: true,
      scrollHandle: null
    }
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
  mounted() {
    this.materialize()
    window.onload = () => {
      this.loading = false
      let event = new CustomEvent('resize')
      window.dispatchEvent(event)
    }
  },
  updated() {
    this.materialize()
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        let event = new CustomEvent('resize')
        window.dispatchEvent(event)
      })
    }
  }
}
</script>

<style>
@import './lib/css/style.css';
@import './lib/css/materialize.min.css';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import 'https://fonts.googleapis.com/css?family=Poiret+One';
@import 'https://fonts.googleapis.com/css?family=Lato:300,400';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

@font-face {
  font-family: 'Anders';
  src: url('./assets/Anders.ttf');
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  position: relative;
}

*:focus {
  outline: 0;
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

.hr {
  height:2px;
  width:100%;
}

.vr {
  width:2px;
  height:100%;
  display:inline-block;
}

a.hr, a.vr {
  display: inline-block;
  vertical-align: middle;
}

.hr.short {
  width:80%;
}

.vr.short {
  height:80%;
}
</style>
