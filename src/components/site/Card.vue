<template>
  <div class="card-wrap">
    <div class="card no-margin no-padding absolute-center-aligned">
      <div class="card-image">
        <material-box :img="img">
          <span class="card-title title" v-if="this.$slots['title']">
            <slot name="title"></slot>
          </span>
        </material-box>
      </div>
      <div class="card-content" v-if="this.$slots['description']">
        <div class="flow-text" style="margin:0"><slot name="description"></slot></div>
      </div>
      <div class="card-action" v-if="this.$slots['action']">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { MaterialBox } from 'cmps/lib'

export default {
  props: {
    img: {
      default: 'sample-1.jpg'
    }
  },
  components: {
    MaterialBox
  }
}
</script>

<style scoped>
.card-wrap {
  position: relative;
}
.card-image {
  height: 100%;
}
.card-flat > .card {
  box-shadow: none;
  text-align: center;
}
.card-flat > .card > .card-image {
  border: 1px solid #ccc;
}
.card-flat .card-title {
  bottom: auto;
  right: 0;
  top: 100%;
  padding: 12px;
  color: inherit !important;
}
.card-flat, .card-content {
  padding-bottom: 48px;
}
.card-flat .card-action {
  text-align: left;
  border: none;
}
.card-title {
  padding-bottom: 18px !important;
}
</style>
