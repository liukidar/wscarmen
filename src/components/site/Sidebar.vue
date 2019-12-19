<template>
  <ul id="slide-out" class="sidenav">
    <li><div class="user-view no-padding">
      <logo></logo>
    </div></li>
    <li class='hide-on-large-only'><language-selector class='valign-wrapper' style='justify-content:space-around;'></language-selector></li>
    <li><a class='waves-effect waves-dark' href='#/!'><i class="material-icons">home</i>Home</a></li>
    <li><a href='' data-target="login-modal" class="modal-trigger waves-effect waves-dark"><i class="material-icons">person</i>Login</a></li>
    <li><div class="divider"></div></li>
    <ul class="collapsible">
      <li v-for="(link, index) in links" :key="index">
        <a class="collapsible-header waves-effect waves-dark">{{$lang.app[link.id]}}<i class="material-icons" style="margin-right:16px;">arrow_drop_down</i></a>
        <div class="collapsible-body">
          <ul>
            <li v-for="(sublink, index) in link.sublinks" :key="index"><router-link class="waves-effect waves-dark" :to="link.href + '/' + sublink.href" style="font-weight:400;">{{$lang.app[sublink.id]}}</router-link></li>
          </ul>
        </div>
      </li>
    </ul>
  </ul>
</template>

<script>
import Logo from './Logo'
import LanguageSelector from './LanguageSelector'
import { mapState } from 'vuex'

export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapState('app', {
      links: state => state.pages
    })
  },
  mounted: function() {
    M.Sidenav.init(this.$el, { edge: 'right' })
    var elem = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elem, {accordion: true})
  },
  components: {
    LanguageSelector, Logo
  }
}
</script>

<style>
.sidenav {
  height: 100vh;
}
</style>
