<template>
  <div class="moving-bkg" :style="{ 'background-image': 'url(\'' + img + '\')' }">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    active: {
      default: true
    },
    img: {
      default: ''
    },
    amount: {
      default: 0.05
    }
  },
  mounted() {
    let x, y
    x = 0
    y = 0
    let _this = this
    let background = this.$el
    background.onmousemove = (e) => {
      let h = background.clientHeight / 2
      let w = background.clientWidth / 2
      let rect = background.getBoundingClientRect()
      let offsetX = e.clientX - rect.left
      let offsetY = e.clientY - rect.top

      x = (offsetX - w) / w * 100 * this.amount
      y = (offsetY - h) / h * 100 * this.amount
    }
    window.requestAnimationFrame(function animation() {
      if (_this.active) {
        background.style.backgroundPositionX = 50 + x + '%'
        background.style.backgroundPositionY = 50 + y + '%'
      }
      window.requestAnimationFrame(animation)
    })
  }
}
</script>

<style scoped>
.moving-bkg {
  height: 100%;
  width: 100%;
  background-attachment: local;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: background-position 1s ease-out;
}
</style>
