<template>
  <transition name="fade">
    <div v-if="scroll > 0.1" @click="scrollUp" class="hide-on-small-only waves-effect waves-dark white z-depth-3" style="height:24px;width:24px;">
      <i class="material-icons">keyboard_arrow_up</i>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    scroll() { return this.$store.getters['get_scroll']('window').scroll }
  },
  methods: {
    scrollUp() {
      this.$store.getters['get_scroll']('window').scrollTo(0)
    }
  }
}
</script>

<style scoped>
div {
  position: fixed;
  bottom: 36px;
  left: 30px;
  border-radius: 100%;
  cursor: pointer;
  padding:7px;
  box-sizing:content-box;
  height:24px;
  width:24px;
}

.fade-enter-active, .fade-leave-active {
  transition: 0.75s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-40px) translateY(100px) scale(0.1);
}
</style>
