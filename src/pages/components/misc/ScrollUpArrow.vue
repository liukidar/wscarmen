<template>
  <transition name="fade">
    <div v-if="active" id="scroll-up-arrow" class="waves-effect waves-dark white z-depth-3" style="height:24px;width:24px;" @click="scrollTop()">
      <i class="material-icons">keyboard_arrow_up</i>
    </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {
      active: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function(e) {
      this.active = window.pageYOffset > window.innerWidth / 4
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
#scroll-up-arrow {
  position: fixed;
  bottom:30px;
  left:30px;
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
