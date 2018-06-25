<template>
  <div>
    <div class="container">
      <div style="margin-top:40px;"></div>
      <img src="../assets/header.png" style="display:block; width:100%">
      <flow-text>
        {{$lang.home.intro}}
      </flow-text>
      <hr class="grey lighten-2" style="margin-top: 40px;">
    </div>
    <div id='highlights' class="container" v-if="mainCard" style="max-width:600px">
      <h2 class="center-align title">{{$lang.app.highlights}}</h2>
      <card :UID='mainCard'></card>
      <hr style="margin-top: 40px;">
    </div>
    <parallax :resource="'background.png'" :height="'200px'"></parallax>
    <div class="black" style="padding-top:20px;">
      <h2 id="news" class="white-text center-align title">{{$lang.app.news}}</h2>
      <div class="container">
        <hr class="grey" style="margin-bottom: 40px;">
        <card-grid :cards='[1,0,2]'>
        </card-grid>
        <hr class="grey" style="margin-top: 40px;">
        <div style='height:40px;'></div>
      </div>
    </div>
  </div>
</template>

<script>
import CardGrid from './components/misc/CardGrid'
import Card from './components/utility/Card'
import Parallax from './components/utility/Parallax'
import FlowText from './components/utility/FlowText'

export default {
  data: function() {
    return {}
  },
  computed: {
    mainCard() {
      return this.$store.state.mainCard
    }
  },
  components: {
    FlowText,
    CardGrid,
    Card,
    Parallax
  }
}
</script>
