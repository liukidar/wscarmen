<template>
  <div class="cmp-card-person no-padding z-depth-3 white" style="position: relative;">
    <layer>
      <div slot-scope="layer">
        <div style="display:none;"><person img="static/imgs/profile.jpg"></person></div>
        <div class="card-person">
          <div class="card-padding">
            <h3 class="text-important">{{title}}</h3>
            <h5 class="text-important">{{subtitle}}</h5>
            <div>
              <span class="grey darken-1" style="display: inline-block; width: 28px; height: 3px; margin: 8px 0 16px 0;"></span>
            </div>
            <slot name="content"></slot>
            <div class="left-align">
              <span class="flow-text" style="padding: 1rem;" @click="(e) => layer.set(e, 'info', 'bkg-main-color')"><span class="slash"></span><i style="cursor:pointer;" class="text-important text-grey text-darken-4">info</i></span>
              <span class="flow-text" style="padding: 1rem;" @click="(e) => layer.set(e, 'contacts', 'bkg-main-color-dark')"><span class="slash"></span><i style="cursor:pointer;" class="text-important text-grey text-darken-4">contacts</i></span>
            </div>
          </div>
        </div>
      </div>
      <paper-container class="text-important card-padding white-text" style="height:100%;" slot="contacts" slot-scope="layer">
        <template slot="paper-before">
          <paper class="bkg-main-color accent-4 lb" :deg='32' style="right:20%;"></paper>
          <paper class="bkg-main-color-light lb" :deg='24' style="right:40%;"></paper>
        </template>
        <div style="position: relative;">
          <h4>#contacts</h4>
          <div class="grey lighten-4" style="display: inline-block; width: 28px; height: 3px; margin: 4px 0 16px 0;"></div>
          <div>
            <slot name="contacts"></slot>
          </div>
        </div>
        <i class="material-icons close-arrow btn-hm waves-effect" @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
      </paper-container>
      <div class="white-text card-padding" slot="info" slot-scope="layer">
        <div class="position: relative">
          <h4>#info</h4>
          <div class="grey lighten-4" style="display: inline-block; width: 28px; height: 3px; margin: 4px 0 16px 0;"></div>
          <slot name="info"></slot>
          <div class="flow-text left-align grey-text text-lighten-2"><span class="slash"></span><i style="cursor:pointer;" @click="(e) => layer.set(e, 'more', 'bkg-main-color-dark')">more</i></div>
        </div>
        <i class="material-icons close-arrow btn-hm waves-effect" @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
      </div>
      <div class="white-text card-padding" slot="more" slot-scope="layer">
        <div class="position: relative">
          <h4>#info</h4>
          <div class="grey lighten-4" style="display: inline-block; width: 28px; height: 3px; margin: 4px 0 16px 0;"></div>
          <slot name="more"></slot>
          <div class="flow-text left-align grey-text text-lighten-2"><span class="slash"></span><i style="cursor:pointer;" @click="(e) => layer.set(e, 'info', 'bkg-main-color')">back</i></div>
        </div>
        <i class="material-icons close-arrow btn-hm waves-effect" @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
      </div>
    </layer>
  </div>
</template>

<script>
import { Layer, PaperContainer, Paper } from 'cmps/lib'
import Person from './Person'

export default {
  props: {
    img: {
      default: ''
    },
    title: {
      default: 'Title'
    },
    subtitle: {
      default: 'subtitle'
    },
    paragraphs: {
      default: () => []
    }
  },
  data: () => {
    return {
      szOccluder: 0,
      topOccluder: 0,
      leftOccluder: 0
    }
  },
  components: {
    Person, Layer, Paper, PaperContainer
  }
}
</script>

<style scoped>
.cmp-card-person {
  text-align: right;
}
.card-person {
  position: relative;
  overflow: hidden;
}

.cmp-person {
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-30%, -55%);
}

.cmp-card-person.right-side {
  text-align: left;
}

.cmp-card-person.right-side .cmp-person {
  left: auto;
  right: 0;
  top: 0;
  transform: translate(30%, -55%);
}

@media only screen and (max-width: 601px) {
  .cmp-card-person, .cmp-card-person.right-side {
    text-align: center;
  }
  .card-padding {
    padding-top: 4rem !important;
  }
  .cmp-card-person.right-side .cmp-person, .cmp-person {
     left: 0;
     right: 0;
     margin: auto;
     transform: translate(0, -65%);
  }
}

.information {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.close-arrow {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  overflow: visible;
}
</style>
