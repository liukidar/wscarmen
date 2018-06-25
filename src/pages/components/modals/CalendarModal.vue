<template>
  <div id="calendar-modal" class="modal" style="max-width:640px;">
    <div class="modal-content">
      <h4 style="padding-bottom:10px;">Agenda</h4>
      <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=igplombardia@gmail.com&amp;color=%232F6309&amp;ctz=Europe%2FRome" style="border-width:0; width:100%; height:340px;" frameborder="0" scrolling="no"></iframe>
    </div>
    <div class="modal-footer row">
      <a class="grey lighten-5 modal-close btn-large left waves-effect waves-teal btn-flat">Chiudi</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style>

</style>
