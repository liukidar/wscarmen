<template>
  <ul>
    <!-- Switched 'IT' to 'it' and 'ENG' to 'en'. Added .toUpperCase() for design. -->
    <li v-for="(lang, index) in langs" :key='index' @click='changeLang(lang)' class="waves-effect waves-dark"><a class="main-color" v-bind:class="{ disabled: !isActive(lang) }">{{lang.toUpperCase()}}</a></li>
  </ul>
</template>

<script>

export default {
  data: function() {
    return {}
  },
  computed: {
    langs() {
      return this.$store.getters['app/langs']
    }
  },
  methods: {
    changeLang(lang) {
      this.$store.commit('app/changeLang', lang)
    },
    isActive(lang) {
      return this.$store.getters['app/activeLang'] === lang
    }
  }
}
</script>

<style scoped>
li:hover > a.disabled {
  color: rgba(0,0,0,0.87) !important;
}
.disabled {
  color: #d0d0d0 !important;
}
</style>
