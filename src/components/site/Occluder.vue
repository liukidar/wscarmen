<template>
  <div class="occluder" :class="{open: !loading}">
    <div class="hole" :style="{bottom: bottom, right: right}"></div>
    <transition name="title-in-out">
      <h3 class="teal-text text-accent-2 no-margin hide-on-small-only" style="font-family:Anders;letter-spacing:4px;position:relative;" v-if="loading && status > 0">WSCARMEN</h3>
    </transition>
    <div class="preloader" :style="{bottom: bottom, right: right}">
      <div class="preloader-line-wrapper">
        <transition name="line-in">
          <div class="line" v-if="status > 0"></div>
        </transition>
      </div>
      <transition name="scale-out">
        <div v-if="loading">
          <div class="preloader-circle-wrapper">
            <div class="pulser">
              <div class="preloader-wrapper big" :class="{active: status == 2}">
                <div class="spinner-layer">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div><div class="gap-patch">
                    <div class="circle"></div>
                  </div><div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bottom: {
      default: '50%'
    },
    right: {
      default: '20%'
    },
    loading: {
      default: 0
    }
  },
  data: function() {
    return {
      status: 0
    }
  },
  mounted() {
    setTimeout(() => { this.status = 1 }, 200)
    setTimeout(() => { this.status = 2 }, 1110)
  }
}
</script>

<style scoped>
.occluder {
  width:100vw;
  height:100vh;
  overflow: hidden;
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  padding-left:10rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.occluder.open {
  pointer-events: none;
}
.preloader {
  top:-64px;
  position: absolute;
  display: flex;
  flex-flow: column;
  transform: translate(50%, 64px)
}
.preloader-line-wrapper {
  overflow:hidden;
  position:relative;
  flex:1 1;
  width:100%;
}
.line {
  position:absolute;
  left:0;
  right:0;
  width:100%;
  height: 60px;
  bottom: -60px;
  border-right:3px solid #009688;
}
.preloader-circle-wrapper {
  position:relative;
  height:64px;
  transform: translateY(-50%) rotate(68deg);
}
.pulser {
  animation-name: pulse;
  animation-duration: 1.332s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0.76s;
  transform: scale(1);
}
@keyframes pulse {
  0% { transform: scale(1); }
  30% { transform: scale(1); }
  40% { transform: scale(1.3); }
  50% { transform: scale(1); }
  60% { transform: scale(1.0); }
  70% { transform: scale(1.2); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }
}
@media (min-aspect-ratio: 1/1) {
  .hole {
    position: absolute;
    transform: translate(50%, 50%);
    width: 0;
    height: 0;
    border-radius: 100%;
    box-shadow: 0 0 0 140vw rgba(0, 0, 0, 1);
    transition: width 3s .25s, height 3s .25s;
  }
  .open > .hole {
    width: 283vw;
    height: 283vw;
  }
}
@media (max-aspect-ratio: 1/1) {
  .hole {
    position: absolute;
    transform: translate(50%, 50%);
    width: 0;
    height: 0;
    border-radius: 100%;
    box-shadow: 0 0 0 140vh rgba(0, 0, 0, 1);
    transition: width 3s .25s, height 3s .25s;
  }
  .open > .hole {
    width: 283vh;
    height: 283vh;
  }
}

/* Transitions */
.line-in-enter-active {
  transition: 1s ease-in;
}
.line-in-enter {
  bottom: 100%;
  height: 40px;
}
.scale-out-leave-active {
  transition: 0.75s ease-in;
}
.scale-out-leave-to {
  transform: scale(0);
  opacity: 0;
}
.title-in-out-enter-active, .title-in-out-leave-active {
  transition: 1s ease;
}
.title-in-out-enter {
  transform: translate(-10rem, 10rem);
  opacity: 0;
}
.title-in-out-leave-to {
  opacity: 0;
}
</style>
