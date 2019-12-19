<template>
  <div class="tile-wrap" @click="active = !active && $slots['desc']">
    <div class="tile absolute-center-aligned" :class="{active: active}">
      <div class="background absolute-center-aligned" :style="{background: 'url(\'' + bkg + '\')'}"></div>
      <div class="information vertical-flex absolute-center-aligned waves-effect" v-if="$slots['title']">
        <div class="padding">
        </div>
        <div class="title">
          <a class="flow-text"><slot name="title"></slot></a>
          <i class="material-icons right hide-on-med-and-down" v-if="$slots['desc']">more_vert</i>
          <router-link class="hide-on-large-only right text-main-color" :to="to">
            <i class="material-icons" v-if="$slots['desc']">link</i>
          </router-link>
        </div>
        <div class="description flex-filler" v-if="$slots['desc']">
          <div class="flow-text flex-filler">
            <slot name="desc"></slot>
            <div class="link right hide-on-med-and-down">
              <router-link class="right btn-floating btn-large bkg-main-color waves-effect waves-light" :to="to">
                <i class="material-icons white-text">link</i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bkg: {},
    to: {
      default: '/!'
    }
  },
  data: function() {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
.tile-wrap {
  margin: 0;
  padding: 0;
  position: relative;
}
.tile {
  position: relative;
  overflow: hidden;
}
.tile > .background {
  transition: filter .5s;
  will-change: filter;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50% !important;
}

.information {
  background: rgba(0,0,0,0);
  transition: .5s;
  display: flex;
  flex-flow: column;
}
.information > .padding {
  flex:1;
  transition: .5s;
}
.tile.active > .information > .padding {
  flex:0;
}
.tile:hover > .background {
  filter: grayscale(100%);
}
.tile:hover > .information {
  background: rgba(0,0,0,0.5);
}
.tile.active > .information {
  background: rgba(255,255,255,1);
}

.title {
  color:#FFF;
  transition: .2s;
  text-align: left;
}
.tile.active .title {
  color:#000;
}

.link {
  margin-top: 1rem;
  transform: scale(0);
  transition: .5s;
}
.tile.active:hover .link {
  transform: scale(1);
}
.tile.active:hover .link:hover {
  transform: scale(1.2);
}

.title > .right {
  transform: translateY(240%);
  transition: .5s;
}
.tile:not(.active) .title > .right {
  color: #FFF !important;
}
.tile:hover .title > .right {
  transform: translateY(2px);
}
.tile.active .title > i.right {
  transform: translateY(4px) rotate(90deg);
}
.tile.active .title > .right {
  transform: translateY(0px) rotate(180deg);
}

.title > .flow-text {
  transform: translateX(-200%);
  transition: .5s;
}
.tile:hover .title > .flow-text, .tile.active .title > .flow-text {
  transform: translateX(0);
}

.description {
  max-height:0;
  opacity:0;
  transition: .5s;
  box-sizing: border-box;
}
.description > .flow-text {
  padding: 0 2rem;
  display: block;
}
.tile.active > .information > .description {
  opacity: 1;
  max-height: 100%;
}

.tile-wrap.important:not(.masonry-active){
  transition: z-index .5s;
}

.tile-wrap.important:not(.masonry-active) {
  position: relative;
  z-index:0;
  box-shadow: none;
}
.tile-wrap.important:not(.masonry-active) > .tile {
  box-shadow: none;
  transition: .5s;
}
.tile-wrap.important:hover:not(.masonry-active) {
  z-index: 10;
}
.tile-wrap.important:hover:not(.masonry-active) > .tile {
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.25);
  z-index: 10;
  transform: scale(1.1);
}

</style>
