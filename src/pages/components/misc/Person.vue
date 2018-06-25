<template>
  <div class='center-align' style='position:relative;'>
    <div style='max-width:160px; margin: 0 auto;'>
      <div class='main-color person z-depth-3' style='margin-bottom:20px;'>
        <img src='../../../assets/sample-1.jpg'/>
        <a @click='toggle()' class='waves-effect waves-light'>
          <transition name='rotate'>
            <i v-if='!active' class='material-icons white-text' style='position:absolute;'>add</i>
          </transition>
          <transition name='rotate-anti'>
            <i v-if='active' class='material-icons white-text' style='position:absolute;'>remove</i>
          </transition>
        </a>
      </div>
    </div>
    <span style='font-size:140%;' @click='toggle()'>STEFANIA ANNOVAZZI</span>
    <br>-<br>
    <a style='display:inline-block'><i class='material-icons left'>email</i>myemail.true@gmail.com</a>
    <transition name="fade">
      <div v-if='active' class='waves-effect waves-light left-align person-ex card main-color white-text z-depth-4' @click='toggle()'>
        <i class='material-icons grey-text lighten-3' style='position:absolute;top:8px;right:7px;'>close</i>
        <flow-text>
          <div class='center-align'><b>DIRETTORE</b></div>
          <ul class='browser-default' style='margin:5px 0;'>
            <li>Architetto</li>
            <li>Socio Fondatore</li>
          </ul>
          <hr class='grey lighten-3' style='margin-bottom:20px;'>
          <a class='white-text'><i class='material-icons left'>book</i>Curriculum Vitae</a>
        </flow-text>
      </div>
    </transition>
  </div>
</template>

<script>
import FlowText from '../utility/FlowText'

export default {
  data: function() {
    return {
      active: null
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  },
  components: {
    FlowText
  }
}
</script>

<style>
.person {
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 100%;
}
.person > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: inline-block;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 100%;
  transition: all .5s;
}
.person > a {
  opacity: 0;
  background: rgba(0,0,0,0.5);
  transition: all .5s, opacity .5s .1s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.person:hover > * {
  width: 100%;
  height: 100%;
}
.person:hover > a {
  opacity: 1;
}
.person > a i {
  font-size:32px;
}

.person-ex {
  border-radius: 3px;
  position: absolute;
  min-width: 150px;
  width: 65%;
  right: 35%;
  top: -30%;
  opacity: 1;
  transition: opacity .5s;
  padding:0 1rem;
  border:solid 1px white
}

.fade-enter-active, .fade-leave-active {
  transition: 0.4s 0.2s;
}
.fade-enter, .fade-leave-to {
  right: -80vw;
  transform: scale(0.1);
}

.rotate-enter-active, .rotate-leave-active {
  transition: 0.5s;
}
.rotate-enter, .rotate-leave-to {
  transform: rotate(-90deg);
  opacity: 0;
}
.rotate-anti-enter-active, .rotate-anti-leave-active {
  transition: 0.5s;
}
.rotate-anti-enter, .rotate-anti-leave-to {
  transform: rotate(90deg);
  opacity: 0;
}
</style>
