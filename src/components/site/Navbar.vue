<template>
  <header class="navbar-wrap grey darken-4" :class="{active: scroll > 0.08}">
    <div class="navbar horizontal-flex middle" style="justify-content: space-between;">
      <h1 class="hide-on-small-only flow-text no-margin" style="font-family:Anders;letter-spacing:4px;">
        <router-link to="/!"><logo></logo></router-link>
      </h1>
      <h1 class="hide-on-med-and-up flow-text main-color no-margin"><router-link to="/!"><i class="material-icons">home</i></router-link></h1>
      <div class="no-margin">
        <a @click="scrollTo(el)" v-for="el in page.sections" :key="el" style="margin: .5rem .6rem;" class="btn-hm uppercase text-important waves-effect">
          {{text.sections[el].title}}
        </a>
      </div>
    </div>
    <div class="progress-bar grey">
      <div class="main-bkg" :style="{ width: scroll * 100 + '%' }"></div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo'

export default {
  computed: {
    scroll() { return this.$store.getters['get_scroll']('window').scroll },
    title() { return this.$store.state.title },
    page() { return this.$store.getters['pages/activePage'](this.$route) },
    text() { return this.$store.getters['pages/' + this.page.id + '/text'] }
  },
  methods: {
    scrollTo(id) {
      this.$store.getters['get_scroll']('window').scrollToEl(id, -this.$el.clientHeight)
    }
  },
  watch: {
    $route(to, from) {
      this.scrollTo(this.$route.params.target)
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped>
.navbar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 1s;
  box-shadow: none;
  height: auto !important;
}
@media only screen and (min-width: 601px) {
  .navbar {
    margin-right: 4%;
    padding:20px 1.6rem;
  }
}
.navbar {
  padding:20px .6rem 20px 1.6rem;
  transition: 1s;
}
.progress-bar {
  opacity: 0;
  transition: opacity 1s;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,1) inset;
}
.progress-bar > div {
  margin: 0 auto;
  height:3px;
  transition: width .5s ease-out;
}
.navbar-wrap:not(.active) {
  background: rgba(0,0,0,0) !important;
}
.navbar-wrap.active {
  transition: .5s;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.25);
}
.navbar-wrap.active > .navbar {
  padding: 0 2%;
}
.navbar-wrap.active > .progress-bar {
  transition: opacity 1s .25s;
  opacity: 1;
}
</style>
