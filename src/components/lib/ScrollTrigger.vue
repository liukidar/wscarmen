<template>
  <div class="cmp-scroll-trigger">
    <slot></slot>
  </div>
</template>

<script>
import { offsetTop } from 'lib/js/script.js'
import { debounce } from 'throttle-debounce'

export default {
  props: {
    watch: {
      default: 'window'
    },
    padding: {
      default: 0
    }
  },
  data: function() {
    return {
      offset: 0,
      height: 0
    }
  },
  mounted() {
    this.offset = offsetTop(this.$el, this.scrollwrap.el)
    window.addEventListener('resize', debounce(250, () => {
      this.offset = offsetTop(this.$el, this.scrollwrap.el)
      this.height = this.$el.clientHeight
    }), false)
  },
  computed: {
    visible: function() {
      return (this.offset - this.scrollwrap.scrollpx - this.padding < this.scrollwrap.viewheight) && (this.offset - this.scrollwrap.scrollpx + this.height + this.padding > 0)
    },
    scrollwrap: function() {
      return this.$store.getters['get_scroll']('window')
    }
  },
  watch: {
    visible: function() {
      if (this.visible) {
        this.$emit('scroll-in')
      } else {
        this.$emit('scroll-out')
      }
    }
  }
}
</script>

<style>

</style>
