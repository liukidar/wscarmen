<template>
  <div class="materialboxed">
    <div :style="{ 'background-image': 'url(\'' + img + '\')' }"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      default: 'sample-1.jpg'
    }
  },
  mounted() {
    M.Materialbox.init(this.$el, {})
  }
}
</script>

<style scoped>
.materialboxed {
  position: relative;
}
.materialboxed > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: no-repeat center center;
  background-size: cover;
}
.materialboxed.reveal > div {
  background-size: auto;
}
</style>
