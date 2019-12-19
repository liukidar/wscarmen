<template>
  <div class="cmp-scroll-wrap">
    <div class="cmp-wrap" :class="{ mobile: p_mobile }">
      <div class="cmp-placeholder" :class="{ mobile: p_mobile }">
        <div class="cmp-el">
          <slot></slot>
        </div>
        <div class="cmp-overlay">
          <slot name="overlay"></slot>
        </div>
        <div @click="(e) => p_scrollBy(e)" class="cmp-scrollbar">
          <div @mousedown="p_startDrag"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { captureMouse, offsetTop, render, getScrollbarWidth, throttle } from 'lib/js/script.js'
import { mapActions } from 'vuex'
import Vue from 'vue'
import { debounce } from 'throttle-debounce'

export const module = {
  state: {
    scroll: {}
  },
  getters: {
    get_scroll(_state) {
      return (_id) => { return _state.scroll[_id] ? _state.scroll[_id] : 0 }
    }
  },
  mutations: {
    set(_state, _payload) {
      Vue.set(_state.scroll, _payload.id, _payload.el)
    },
    unset(_state, _payload) {
      Vue.delete(_state.scroll, _payload)
    }
  },
  actions: {
    register_scroll(_ctx, _payload) {
      _ctx.commit('set', _payload)
    },
    unregister_scroll(_ctx, _payload) {
      _ctx.commit('unset', _payload)
    }
  }
}

export default {
  props: {
    v: {
      default: 0.06
    },
    name: {
      default: null
    }
  },
  data: function() {
    return {
      // private
      p_mobile: false,
      p_onresize: null,
      p_onscroll: null,
      p_onwhell: null,
      p_wrap: null,
      p_placeholder: null,
      p_scrollbar: null,
      p_dragOffset: 0,
      p_isDrag: false,
      p_isScroll: false,
      p_resizeinterval: 0,
      // public
      el: null,
      height: 0,
      viewheight: 0,
      scroll: 0,
      scrollpx: 0
    }
  },
  created() {
    if (this.name) {
      this.register_scroll({ id: this.name, el: this })
    }
  },
  mounted() {
    this.p_wrap = this.$el.children[0]
    this.p_placeholder = this.p_wrap.children[0]
    this.p_scrollbar = this.p_placeholder.children[2].children[0]
    this.el = this.p_placeholder.children[0]
    if (getScrollbarWidth()) {
      let sy = 0
      let dy = 0
      let scroll = 0
      let frame = render(
        () => {
          if (!this.p_mobile) {
            dy = (1 - this.v) * dy + this.v * sy
            scroll = dy / (this.height - this.viewheight)
            this.el.style.top = -Math.floor(dy) + 'px'
            this.p_scrollbar.style.transform = 'translateY(' + Math.floor(scroll * (this.viewheight - this.p_scrollbar.height)) + 'px)'
          }
        },
        () => {
          if (Math.abs(dy - sy) < 0.5) {
            this.p_isScroll = false
          }
          return !this.p_isScroll
        },
        { i: 10, fn: () => { this.scroll = scroll; this.scrollpx = dy } }
      )
      this.p_onscroll = () => {
        sy = this.p_wrap.scrollTop
        if (!this.p_isScroll) {
          this.p_isScroll = true
          frame()
        }
      }
      this.p_onwhell = (e) => {
        this.p_wrap.scrollTop += 100 * Math.sign(e.deltaY)
        e.stopPropagation()
      }

      this.el.addEventListener('wheel', this.p_onwhell, false)
    } else {
      this.p_mobile = true
      this.p_onscroll = throttle(() => {
        this.scrollpx = this.p_wrap.scrollTop
        this.scroll = this.scrollpx / (this.height - this.viewheight)
      }, 100)
    }

    this.p_onresize = debounce(250, () => {
      this.height = this.el.clientHeight
      this.viewheight = this.p_wrap.clientHeight
      if (!this.p_mobile) {
        this.p_placeholder.style.height = this.height + 'px'
        this.p_scrollbar.height = Math.floor(this.viewheight * this.viewheight / this.height)
        this.p_scrollbar.style.height = this.p_scrollbar.height + 'px'
      }
    })
    this.p_resizeinterval = setInterval(this.p_onresize, 10000)
    window.addEventListener('resize', this.p_onresize, false)
    this.p_wrap.addEventListener('scroll', this.p_onscroll, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.p_onresize)
    clearInterval(this.p_resizeinterval)
    if (this.name) {
      this.unregister_scroll(this.name)
    }
  },
  methods: {
    // private
    ...mapActions(['register_scroll', 'unregister_scroll']),
    p_startDrag(_e) {
      this.p_scrollbar.from = this.p_scrollbar.parentNode.getBoundingClientRect().top
      this.p_dragOffset = this.p_scrollbar.getBoundingClientRect().top - _e.clientY
      this.p_isDrag = true
      captureMouse(this.p_drag, this.p_endDrag)
    },
    p_endDrag(e) {
      setTimeout(() => { this.p_isDrag = false }, 64)
    },
    p_drag(_e) {
      if (this.p_isDrag) {
        this.p_wrap.scrollTop = (_e.clientY - this.p_scrollbar.from + this.p_dragOffset) * this.height / this.viewheight
      }
    },
    p_scrollBy(_e) {
      if (!this.isDrag) {
        let rect = this.p_wrap.children[0].children[1].getBoundingClientRect()
        let offsetY = ((_e.clientY - rect.top) - this.scroll * (this.viewheight - this.p_scrollbar.height) - this.p_scrollbar.height * 0.5).clamp(-this.p_scrollbar.height, this.p_scrollbar.height)
        this.p_wrap.scrollTop += Math.floor(offsetY * this.height / this.viewheight)
      }
    },
    // public
    scrollToEl(_el, _offset) {
      let offset = offsetTop(document.getElementById(_el), this.el)
      this.p_wrap.scrollTop = offset + _offset
    },
    scrollTo(_p) {
      this.p_wrap.scrollTop = _p
    }
  }
}
</script>

<style scoped>

.cmp-scroll-wrap {
  overflow: hidden;
  position: relative;
}
.cmp-wrap {
  height: 100%;
  overflow: auto;
}
.cmp-wrap.mobile {
  scroll-behavior: smooth;
}

.cmp-placeholder:not(.mobile) > .cmp-el {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  will-change: top;
}

.cmp-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 999;
}

.cmp-scrollbar {
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
  width: 10px;
  z-index: 1000;
}
.cmp-placeholder.mobile > .cmp-scrollbar.mobile {
  display: none;
}
.cmp-scrollbar > div {
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
  width: 5px;
  background: rgba(170, 170, 170, 0.75);
  transition: width .5s, background .5s, height .5s;
}
.cmp-scrollbar:hover > div {
  width: 10px;
  background: rgba(170, 170, 170, 0.95);
}
.cmp-scrollbar > div:active {
  width: 10px;
  background: var(--var-color-main);
}
</style>
<style>

.cmp-overlay > * {
  pointer-events: all;
}

</style>
