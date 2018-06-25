<template>
  <div class="card">
    <div class="card-image">
      <img :src="img" class="materialboxed">
      <span class="card-title">{{title}}</span>
    </div>
    <div class="card-content">
      <flow-text style="margin:0">{{desc}}</flow-text>
    </div>
    <div class="card-action">
      <a v-for="(action, index) in actions" :key=index>{{action.desc}}</a>
    </div>
  </div>
</template>

<script>
import FlowText from './FlowText'

export default {
  props: ['UID'],
  data: function() {
    return {
      actions: [{
        desc: 'DO IT!'
      }]
    }
  },
  computed: {
    card() {
      return this.$store.getters.card(this.UID)
    },
    title() {
      return this.card.title
    },
    img() {
      return this.card.img
    },
    desc() {
      return this.card.desc
    }
  },
  components: {
    FlowText
  }
}
</script>

<style>

</style>
