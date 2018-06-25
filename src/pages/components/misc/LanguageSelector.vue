<template>
  <ul>
    <!-- Switched 'IT' to 'it' and 'ENG' to 'en'. Added .toUpperCase() for design. -->
    <li v-for="(lang, index) in langs" :key='index' @click='changeLang(lang)' class="waves-effect waves-dark"><a :style="{color:color}" v-bind:class="{ disabled: !isActive(lang) }">{{lang.toUpperCase()}}</a></li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function() {
    return {}
  },
  computed: {
    ...mapState('mApp', {
      color: state => state.style.color.main
    }),
    langs() {
      return this.$store.getters['mApp/langs']
    }
  },
  methods: {
    changeLang(lang) {
      this.$store.commit('mApp/changeLang', lang)
    },
    isActive(lang) {
      return this.$store.getters['mApp/activeLang'] === lang
    }
  }
}
</script>

<style scoped>
li:hover > a.disabled {
  color: rgba(0,0,0,0.87) !important;
}
.disabled {
  color: #e0e0e0 !important;
}
</style>
