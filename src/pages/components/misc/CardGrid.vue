<template>
  <div class="grid">
    <div class="grid-sizer"></div>
    <slot></slot>
    <div v-for="(id,index) in cards" :key="index" class="grid-item col">
      <card :UID='id'></card>
    </div>
  </div>
</template>

<script>
import Card from '../utility/Card.vue'

export default {
  props: ['cards'],
  data: function() {
    return {
      list: null
    }
  },
  mounted: function() {
    imagesLoaded(this.$el, () => {
      this.list = new Masonry(this.$el, {
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        gutter: 20,
        stagger: 0,
        fitWidth: true
      })
    })
  },
  components: {
    Card
  }
}
</script>

<style>
.grid {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.grid-item {
  width: 300px;
  max-width: 100%;
}

.grid-sizer {
  width: 300px;
  max-width: 100%;
}
</style>
