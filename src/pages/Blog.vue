<template>
  <div>
    <div id="events" class="black">
      <calendar-modal></calendar-modal>
      <div style='height:40px;'></div>
      <div class="container" style="position:relative">
        <h2 class="center-align white-text" style="padding:20px; margin-top:0; font-family:'Poiret ONe';">EVENTI</h2>
        <a href='' data-target="calendar-modal" class="hide-on-large-only btn btn-large modal-trigger white black-text flow-text waves-effect waves-dark" style="position:absolute;top:20px;right:0"><i class="material-icons">calendar_today</i></a>
        <a href='' data-target="calendar-modal" class="hide-on-med-and-down btn btn-large modal-trigger white black-text flow-text waves-effect waves-dark" style="position:absolute;top:20px;right:0"><i class="material-icons left">calendar_today</i>Agenda</a>
        <card-grid :cards='[1,0,2,1]'></card-grid>
        <div style='height:40px;'></div>
      </div>
    </div>
    <parallax :resource="'background.png'" :height="'300px'"></parallax>
    <div id="projects" class="container">
      <h2 class="center-align" style="padding:20px; margin-top:0; font-family:'Poiret ONe';">PROGETTI</h2>
    </div>
    <logo></logo>
  </div>
</template>

<script>
import CardGrid from './components/misc/CardGrid'
import Card from './components/utility/Card'
import CalendarModal from './components/modals/CalendarModal'
import Parallax from './components/utility/Parallax'
import Logo from './components/utility/Logo'

export default {
  components: {
    Card, CardGrid, CalendarModal, Parallax, Logo
  }
}
</script>

<style>

</style>
