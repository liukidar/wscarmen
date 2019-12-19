<template>
  <div class="page-header white-text text-important">
    <div class="container">
      <tr-slide-in class="ch-tr1" stagger="400">
        <h2 v-if="loaded" :key="0" data-index="2" data-from="-100vw, 0">{{openTitleChar}}</h2>
        <h1 v-if="loaded" :key="1" data-index="0" data-from="0, -80vh" style="position: relative; display:inline-block; margin: 0 auto;">
          <h5 class="grey-text text-lighten-1 left-align no-margin" style="position: absolute; bottom: 100%; left: 4px;">
            Architetti
          </h5>
          <slot name="title"></slot>
        </h1>
        <h4 v-if="loaded" :key="2" data-index="1" data-from="0, 80vh" class="grey-text text-lighten-1">
          <slot name="subtitle"></slot>
        </h4>
        <h2 v-if="loaded" :key="3" data-index="2" data-from="100vw, 0">{{closeTitleChar}}</h2>
      </tr-slide-in>
    </div>
    <tr-slide-in stagger="500" :settings="{from : '-100vw, 0'}" class="ch-tr1 container">
      <div @click="scroll()" v-if="loaded" :key="1" data-index="1" data-from="0, 50vh" class="learn-more btn-hm waves-effect">
        LEARN MORE
      </div>
      <div v-if="loaded" :key="0" data-index="1" class="flow-text" style="margin:2rem 0;">
        <small>
          <slot name="description"></slot>
        </small>
      </div>
    </tr-slide-in>
  </div>
</template>

<script>
import { TrSlideIn } from 'cmps/lib'

export default {
  props: {
    openTitleChar: {
      default: '<'
    },
    closeTitleChar: {
      default: '>'
    },
    loaded: {
      default: true
    }
  },
  methods: {
    scroll: function() {
      this.$store.getters['get_scroll']('window').scrollTo(window.innerHeight - 64)
    }
  },
  components: {
    TrSlideIn
  }
}
</script>

<style scoped>
.page-header {
  padding-top: 4rem;
}

.learn-more {
  border: 1px solid #fff;
  padding: 1rem;
  font-size: 1.2rem;
  pointer-events: auto;
  margin: 1rem 0 1rem 0;
}
</style>
