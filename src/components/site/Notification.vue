<template>
  <div class="ag-cmp-notification-wrap">
    <div v-for="(el) in notifications" :key="el.id" @click="el.active = !el.active"
      :class="{ active: el.active }" class="ag-cmp-notification"
      :style="{ animation: el.id + ' alternate cubic-bezier(.43,.13,.59,.92) ' + el.duration + 's infinite' }">
      <div class="ag-cmp-content flow-text black-text white z-depth-2">
        <i class="material-icons inline red-text">delete</i> Lorem ipsum dolor sit amet consectetur.
      </div>
      <div class="ag-cmp-icon red white-text vertical-flex center" :style="{ animation: 'notification-pulse-error 2s infinite' }">
        <i class="material-icons">warning</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 200
    }
  },
  data: function() {
    return {
      notifications: [],
      speed: 30
    }
  },
  mounted() {
    for (let i = 0; i < 4; ++i) {
      this.notifications.push(this.generateAnimation())
    }
  },
  methods: {
    generateAnimation() {
      let style = document.createElement('style')
      let id = '_' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16)
      let duration = Math.floor(Math.random() * 10) + 10
      let keyframe = '@keyframes ' + id + ' {'

      let i = 0
      let x = -Math.floor(Math.random() * this.size) * 0.6
      let y = Math.floor(Math.random() * this.size) * 0.8
      do {
        let s = i + '% { transform: translate(' + x + 'px,' + y + 'px) }\n'
        keyframe += s
        i += Math.floor(Math.random() * 5) + 10
        x += (Math.floor(Math.random() * this.speed) - this.speed * 0.5)
        y += (Math.floor(Math.random() * this.speed) - this.speed * 0.5)
      } while (i < 100)
      i = 100
      keyframe += i + '% { transform: translate(' + x + 'px,' + y + 'px) }\n'

      style.innerHTML = keyframe
      this.$el.appendChild(style)

      return { id, duration, active: false }
    }
  }
}
</script>

<style scoped>

.ag-cmp-notification-wrap {
  position: fixed;
  top: 20px;
  right: 20px;
  pointer-events: none;
}

.ag-cmp-notification {
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
  cursor: pointer;
  transition: .3s;
  pointer-events: all;
}
.ag-cmp-content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
  max-width: 0;
  height: 48px;
  line-height: 48px;
  border-radius: 24px;
  padding: 0 48px 0 0;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  transition: max-width .3s, padding .3s, opacity .3s;
}
.ag-cmp-icon {
  position: relative;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  text-align: center;
  transition: .3s;
}
.ag-cmp-notification:hover {
  top: -4px;
  right: -4px;
}
.ag-cmp-notification.active {
  top: 256px;
  right: -16px;
  animation-play-state: paused !important;
}
.ag-cmp-notification:hover > .ag-cmp-icon {
  width: 48px;
  height: 48px;
}
 .ag-cmp-notification.active > .ag-cmp-icon {
  width: 50px;
  height: 50px;
 }
.ag-cmp-notification.active > .ag-cmp-content {
  opacity: 1;
  max-width: 512px;
  padding: 0 calc(1rem + 48px) 0 1rem;
  transition: max-width .6s .1s, padding .6s .1s;
}

</style>
<style>
@keyframes notification-pulse-warning {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes notification-pulse-error {
  0% {
    -moz-box-shadow: 0 0 0 0 rgb(231, 76, 60, 1);
    box-shadow: 0 0 0 0 rgb(231, 76, 60, 1);
  }
  70% {
      -moz-box-shadow: 0 0 0 12px rgb(231, 76, 60, 0);
      box-shadow: 0 0 0 12px rgb(231, 76, 60, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgb(231, 76, 60, 0);
      box-shadow: 0 0 0 0 rgb(231, 76, 60, 0);
  }
}
@keyframes notification-pulse-success {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(37, 203, 153, 0.4);
    box-shadow: 0 0 0 0 rgba(37, 203, 153, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(37, 203, 153, 0);
      box-shadow: 0 0 0 10px rgba(37, 203, 153, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(37, 203, 153, 0);
      box-shadow: 0 0 0 0 rgba(37, 203, 153, 0);
  }
}
@keyframes notification-pulse-info {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
</style>
