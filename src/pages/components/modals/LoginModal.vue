<template>
  <div id="login-modal" class="modal" style="max-width:600px;">
    <div class="modal-content">
      <h4>{{$lang.login.title}}</h4>
      <flow-text>{{$lang.login.intro}}</flow-text>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input id="login-username" type="text" class="validate" required>
          <label for="login-username">{{$lang.login.username}}</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">lock</i>
          <input id="login-password" type="text" class="validate" required>
          <label for="login-password">{{$lang.login.password}}</label>
        </div>
      </div>
    </div>
    <div class="modal-footer row">
      <a class="col"><button class="btn btn-large left waves-effect waves-light main-color">{{$lang.login.login}} <i class="material-icons right">send</i></button></a>
      <a class="grey lighten-5 modal-close btn-large left waves-effect waves-dark btn-flat">{{$lang.login.cancel}}</a>
    </div>
  </div>
</template>

<script>
import FlowText from './../utility/FlowText'

export default {
  components: {
    FlowText
  }
}
</script>

<style>

</style>
