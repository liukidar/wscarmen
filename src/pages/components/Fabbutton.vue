<template>
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large" :style="{background: color}">
      <i class="large material-icons">link</i>
    </a>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.href + '/!'" class="btn-floating tooltipped" data-position="left" data-delay="20" :data-tooltip="$lang.app[link.id]" :class="link.color"><i class="material-icons">{{link.icon}}</i></router-link>
      </li>
      <li>
        <router-link :to="'/!'" class="btn-floating white">
          <i class="large material-icons black-text">home</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('mApp', {
      color: state => state.style.color.main,
      links: state => state.pages
    })
  },
  mounted() {
    var elems = document.querySelector('.fixed-action-btn')
    M.FloatingActionButton.init(elems, {})
  }
}
</script>

<style>

</style>
