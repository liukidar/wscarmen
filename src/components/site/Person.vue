<template>
  <div class="cmp-person">
    <div class="person z-depth-3" :class="border">
      <img :src="img"/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    img: {
      default: ''
    },
    border: {
      default: 'white'
    }
  }
}
</script>

<style scoped>
.cmp-person {
  margin: 0 auto;
  width: 20rem;
}
@media only screen and (max-width: 601px) {
  .cmp-person {
    width: 16rem;
  }
}

.person {
  width: 100%;
  padding-top: calc(100% - 8px);
  position: relative;
  border-radius: 100%;
  border: 4px solid transparent;
  overflow: hidden;
}
.person > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: all .5s;
}
</style>
