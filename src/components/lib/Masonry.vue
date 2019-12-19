<template>
  <transition-group name="masonry" class="grid" tag="div">
    <div key="coloumn-width" class="coloumn-width" style="width:8.3333333333%"></div>
    <slot></slot>
  </transition-group>
</template>

<script>

export default {
  props: {
    fit: {
      default: false
    }
  },
  data: function() {
    return {
      list: null,
      callbacks: []
    }
  },
  methods: {
    masonry: function(callback) {
      let removed = this.$el.getElementsByClassName('masonry-leave-active')
      if (removed.length) this.list.remove(removed)
      let items = this.$el.getElementsByClassName('masonry-enter-active')
      if (items.length) this.list.prepended(items)
      this.list.layout()
    },
    addCallback(id, callback) {
      this.callbacks[id] = callback
    },
    removeCallback(id) {
      this.callbacks[id] = null
    }
  },
  mounted: function() {
    this.$el.addEventListener('transitionend', (e) => {
      if (e.target === this.$el && e.propertyName === 'height') {
        for (let c in this.callbacks) {
          this.callbacks[c]()
        }
        let event = new CustomEvent('resize')
        window.dispatchEvent(event)
      }
    })

    this.list = new Masonry(this.$el, {
      columnWidth: '.coloumn-width',
      itemSelector: '.col',
      stagger: 30,
      fitWidth: this.fit
    })
    imagesLoaded(this.$el, () => {
      this.$nextTick(() => {
        this.list.layout()
      })
    })
  }
}
</script>

<style>
.grid {
  position: relative;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  transition: height 1s;
}
.grid > * {
  float: left;
}

.masonry-move {
  transition: 1s;
  pointer-events: none;
}
.masonry-enter, .masonry-leave-to{
  opacity: 0;
}
.masonry-enter-active {
  transition: 1s linear;
}
.masonry-leave-active {
  transition: .5s linear;
}

</style>
