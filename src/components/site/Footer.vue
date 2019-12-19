<template>
  <footer id="page-footer" class="page-footer grey darken-4">
    <div class="row">
      <div class="col l4 offset-l1 s12 grey-text text-lighten-2" style="padding:0 0 2rem 6rem">
        <div class="left-align no-wrap" style="margin-top:1rem;display:inline-flex; flex-flow: column; align-items:space-between;">
          <p>
            <i class="left material-icons circle-halo-white">location_on</i><span class="flow-text"><div>{{infos.location}}<br><b style="font-size:110%;">{{infos.city}}</b></div></span>
          </p>
          <p>
            <i class="left material-icons circle-halo-white">phone</i><span class="flow-text"><div>{{infos.phone}}</div></span>
          </p>
          <p>
            <i class="left material-icons circle-halo-white">email</i><span class="flow-text"><div>{{infos.mail}}</div></span>
          </p>
        </div>
      </div>
      <div class="col l5 offset-l1 s12 center-align">
        <div class="left-align container">
          <p>
            <span class="flow-text" style="border-left: 4px solid #aaa; padding-left: 12px;">Studio di Architettura</span>
            <span class="flow-text grey-text text-lighten-2">
              <p v-html="text.sections.about.description"></p>
            </span>
          </p>
          <p class="no-wrap">
            <a :href="infos.facebook"><i class="fa fa-facebook square-halo-white highlight-oh dark"></i></a>&nbsp;
            <a :href="infos.linkedin"><i class="fa fa-linkedin square-halo-white highlight-oh dark"></i></a>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2018 Made by Luca Pinchetti
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['infos']),
    links() { return this.$store.state.pages.pages },
    text() {
      return this.$store.getters['pages/home/text']
    }
  }
}
</script>

<style>
footer {
  margin-top: auto;
}
.footer-copyright {
  padding-bottom: 4px;
}
</style>
