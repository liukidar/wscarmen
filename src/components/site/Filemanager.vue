<template>
  <div class="file-manager white z-depth-3">
    <i class="close-btn material-icons grey-text white waves-effect square-halo-white z-depth-2 highlight-oh light" @click="close()">close</i>
    <div class="file-explorer vertical-flex row white">
      <div class="grey darken-3 white-text" style="padding: 2rem;">
        <p class="flow-text">
          <span class="title" style="font-family: Anders; letter-spacing: 4px;">File</span>{{selected}}<i class="material-icons right white grey-text text-darken-3 circle-halo-white z-depth-3 highlight-oh light waves-effect waves-dark" @click="remove()">delete</i>
        </p>
        <div class="horizontal-flex">
          <div class="input-field col flex-filler">
            <i class="material-icons prefix">search</i>
            <input type="text" id="autocomplete-input" class="white-text" v-model="filter">
            <label for="autocomplete-input">Search</label>
          </div>
        </div>
      </div>
      <div class="flex-filler hide-scrollbar">
        <div class="flex-filler">
          <transition-group name="grid" style="position: relative;" tag="div" class="rowd">
            <div v-for="img in files" :key="img.id" class="col s6 m4 l3r r1-1 no-padding no-margin" @click="select(img.id)" @wheel="(e) => e.stopPropagation()">
              <tile class="border" :bkg="img.preview">
                <template slot="title"><br></template>
              </tile>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <div class="file-uploader bkg-main-color white-text">
      <div class="vertical-flex center center-align" style="height:100%;" @dragover.prevent="status = 1" @dragleave.prevent="status = 0" @drop.prevent="upload($event)">
        <div style="position: relative; pointer-events: none;">
          <div v-if="status == 2" class="preloader-wrapper big active absolute-center-aligned">
            <div class="spinner-layer">
              <div class="circle-clipper left" style="border-color: white">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right" style="border-color: white">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <i class="material-icons" :style="{'transform': status > 0 ? 'scale(0.6)' : ''}" style="font-size: 64px; transition: .5s;">cloud_upload</i>
        </div>
        <br>
        <span class="text-important uppercase">{{info[status]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from './Tile'

export const module = {
  namespaced: true,
  state: {
    active: false,
    files: [],
    selected: null
  },
  mutations: {
    status(state, payload) {
      state.active = payload
    },
    add(state, payload) {
      if (payload.file) {
        let index = state.files.findIndex(el => el.id === payload.file.id)
        if (index === -1) state.files.unshift(payload.file)
      }
      if (payload.files) {
        for (let file of payload.files) {
          let index = state.files.findIndex(el => el.id === file.id)
          if (index === -1) state.files.unshift(file)
        }
      }
    },
    remove(state, payload) {
      if (payload.file) {
        let index = state.files.findIndex(el => el.id === payload.file)
        if (index !== -1) state.files.splice(index, 1)
        if (payload.file === state.selected) state.selected = null
      }

      if (payload.files) {
        for (let file of payload.files) {
          let index = state.files.findIndex(el => el.id === file)
          if (index !== -1) state.files.splice(index, 1)
          if (file === state.selected) state.selected = null
        }
      }
    },
    select(state, payload) {
      state.selected = state.files.find(el => el.id === payload)
      state.active.select()
    },
    clear(state) {
      state.selected = null
    }
  },
  actions: {
    open(context, target) {
      context.commit('status', target)
    },
    close(context) {
      context.commit('status', false)
      context.commit('clear')
    },
    load(context) {
      context.rootState.api.request('GET', 'cms', {}, (r) => {
        context.commit('add', {files: r.success})
      })
    },
    upload(context, payload) {
      let data = {
        'files': payload.files,
        'prefix': payload.prefix
      }
      context.rootState.api.request('POST', 'cms', data, (r) => {
        context.commit('add', {files: r.success})
        if (payload.callback) payload.callback(r)
      })
    },
    remove(context, payload) {
      let data = {
        'files': payload.files
      }
      context.rootState.api.request('DELETE', 'cms', data, (r) => {
        context.commit('remove', {files: r.success})
        context.commit('clear')
        if (payload.callback) payload.callback(r)
      })
    },
    select(context, payload) {
      context.commit('select', payload)
    }
  }
}

export default {
  props: ['prefix'],
  data: function() {
    return {
      info: ['drag & drop', 'ready', 'uploading...'],
      filter: '',
      status: 0
    }
  },
  created: function() {
    this.$store.dispatch('filemanager/load')
  },
  mounted: function() {
    // SmoothScroll(this.$el.getElementsByClassName('hide-scrollbar')[0].children[0], 240, 24)
  },
  computed: {
    files() {
      return this.$store.state['filemanager'].files.filter(s => s.id.includes(this.filter))
    },
    selected() {
      let file = this.$store.state['filemanager'].selected
      return file ? file.id : ''
    }
  },
  methods: {
    close() {
      this.$store.dispatch('filemanager/close')
    },
    select(file) {
      this.$store.dispatch('filemanager/select', file)
    },
    upload(e) {
      this.status = 2
      this.$store.dispatch('filemanager/upload', {
        prefix: this.prefix,
        files: e.dataTransfer.files,
        callback: (r) => {
          for (let img of r.success) {
            M.toast({html: 'File caricato correttamente: ' + img.id, classes: 'green'})
          }
          for (let img of r.error) {
            M.toast({html: 'Errore: ' + img, classes: 'red'})
          }
          this.status = 0
        }
      })
    },
    remove() {
      if (this.selected) {
        this.$store.dispatch('filemanager/remove', {files: [this.selected],
          callback: (r) => {
            for (let img of r.error) {
              M.toast({html: 'Errore: ' + img, classes: 'red'})
            }
          }
        })
      }
    }
  },
  components: {
    Tile
  }
}
</script>

<style scoped>
.file-manager {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 600px;
  max-width: calc(100vw - 18px - 56px);
  z-index: 900;
}
.close-btn {
  position: absolute;
  top: 0;
  right: 100%;
  margin: 8px;
  opacity: .6;
}
.close-btn:hover {
  opacity: 1;
}
.file-explorer {
  height: 75%;
}
.file-uploader {
    box-shadow: inset 0 10px 20px -10px rgba(0,0,0,.8);
    height: 25%;
    position: relative;
}
.file-explorer > * {
  padding: 1rem;
}

/* TRANSITIONS */

.grid-move {
  transition: 1s;
  pointer-events: none;
}
.grid-enter, .grid-leave-to{
  opacity: 0;
}
.grid-enter-active {
  transition: 1s linear;
}
.grid-leave-active {
  transition: .5s linear;
  position: absolute;
  top: 100vh;
  left: 100%;
}

.slide-from-right-enter, .slide-from-right-leave-to > .close-btn {
  transform: translateX(calc(100% + 16px));
}
</style>
