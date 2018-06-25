<template>
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li><div class="user-view">
      <div class="background">
        <img src="../../assets/header-small.png">
      </div>
      <div style="height:180px"></div>
    </div></li>
    <li class='hide-on-large-only'><language-selector class='valign-wrapper' style='justify-content:space-around;'></language-selector></li>
    <li><a class='waves-effect waves-dark' href='#/!'><i class="material-icons">home</i>Home</a></li>
    <li><a href='' data-target="login-modal" class="modal-trigger waves-effect waves-dark"><i class="material-icons">person</i>Login</a></li>
    <li><div class="divider"></div></li>
    <li v-for="(link, index) in links" :key="index">
      <router-link v-if="!link.sublinks.length" :to="link.href" class="waves-effect waves-dark">{{$lang.app[link.id]}}</router-link>
      <ul v-else class="collapsible collapsible-accordion">
        <li>
          <a class="collapsible-header waves-effect waves-dark">{{$lang.app[link.id]}}<i class="material-icons" style="margin-right:16px;">arrow_drop_down</i></a>
          <div class="collapsible-body">
            <ul>
              <li v-for="(sublink, index) in link.sublinks" :key="index"><router-link class="waves-effect waves-dark" :to="link.href + '/' + sublink.href" style="font-weight:400;">{{$lang.app[sublink.id]}}</router-link></li>
            </ul>
          </div>
        </li>
      </ul>
    </li>
  </ul>
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
      links: state => state.pages,
      color: state => state.style.color.main
    })
  },
  mounted: function() {
    M.Sidenav.init(this.$el, { edge: 'right' })
    var elem = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elem, {})
  },
  components: {
    LanguageSelector
  }
}
</script>
