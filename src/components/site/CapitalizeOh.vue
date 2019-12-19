<template>
  <div class="capitalize-oh flow-text right-align">
    <div class="word white-text text-important">
      <router-link :to="to">
        <span class="first-letter"><span class="text-main-color text-accent-3">{{firstLetter.toUpperCase()}}</span><br>{{firstLetter.toLowerCase()}}</span>
        <span style="vertical-align:top;margin-left:-4px;">{{tail}}</span>
      </router-link>
    </div>
    <bull class="absolute-center-aligned" style="right:-2.4rem;left:auto;"></bull>
  </div>
</template>

<script>
import Bull from './Bull'

export default {
  props: ['word', 'to'],
  computed: {
    firstLetter() {
      return this.word.substr(0, 1)
    },
    tail() {
      return this.word.substr(1)
    }
  },
  components: {
    Bull
  }
}
</script>

<style>
.capitalize-oh {
  position: relative;
  padding: 20px 0;
  margin-right: 1.9rem;
  overflow: visible !important;
  display: block;
}
.capitalize-oh .word {
  position: relative;
  overflow: hidden;
  height: 1.2em;
}
.capitalize-oh .word .first-letter {
  transform: translateY(-50%);
  transition: transform .5s;
  display: inline-block;
  padding-bottom: 1px;
  margin-right: -4px;
}
.capitalize-oh:hover .word .first-letter {
  transform: translateY(0);
}
</style>
