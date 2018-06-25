<template>
   <header>
     <nav class="white light-blue-text darken-3 nav-extended">
      <div class="nav-wrapper">
        <div class="container">
          <a :style="{color: color}" class="brand-logo">{{title}}</a> <!-- TODO: Remove and realign -->
          <ul class="right hide-on-large">
            <li><a data-target="slide-out" class="sidenav-trigger"><i class="material-icons grey-text">menu</i></a></li>
          </ul>
          <language-selector class="right hide-on-med-and-down"></language-selector>
        </div>
      </div>
      <div class="nav-content">
        <div class="container">
          <ul class="tabs">
            <li v-for="(link, index) in links" :key="index" class="tab">
              <a class="waves-effect waves-dark" :style="{color: color}" @click="scrollTo(link.href)">{{$lang.app[link.id]}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </header>
</template>

<script>
import LanguageSelector from './misc/LanguageSelector'
import { mapState } from 'vuex'

export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapState('mApp', {
      title: state => state.title,
      color: state => state.style.color.main
    }),
    links() {
      return this.$store.getters['mApp/activePage'](this.$route).sublinks
    }
  },
  methods: {
    scrollTo(id) {
      setTimeout(function() { document.getElementById(id).scrollIntoView(({ behavior: 'smooth', block: 'start', inline: 'nearest' })) }, 0)
    }
  },
  mounted() {
    if (this.$route.params.target) {
      this.scrollTo(this.$route.params.target)
    }
  },
  watch: {
    $route(to, from) {
      this.scrollTo(this.$route.params.target)
    }
  },
  components: {
    LanguageSelector
  }
}
</script>

<style>
header, main, footer {
  padding-right: 300px;
}
@media only screen and (max-width: 992px) {
  header, main, footer {
    padding-right: 0;
  }
}
.tabs .tab a{
  transition: background-color 0.5s;
}
.tabs .tab a:hover {
  background-color: #eceff1;
}
</style>
