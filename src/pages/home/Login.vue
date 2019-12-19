<template>
  <div class="cmp-login main-bkg z-depth-3">
    <div class="white z-depth-2">
      <div class="flow-text text-important">login</div>
      <br><br>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">person</i>
          <input v-model="mail" id="username" type="text">
          <label for="username">Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">lock</i>
          <input v-model="password" id="password" type="password">
          <label for="password">Password</label>
        </div>
      </div>
    </div>
    <div class="row">
      <button @click="requestAuthToken" class="right btn btn-hm waves-effect waves-light text-important">INVIA <i class="right material-icons">send</i></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      mail: null,
      password: null
    }
  },
  computed: {
    ...mapState(['api', 'accessFlag'])
  },
  mounted() {
    if (this.accessFlag) {
      this.$router.push('articles/!')
    }
  },
  methods: {
    requestAuthToken() {
      this.api.request('POST', 'login', { action: 'login', mail: this.mail, password: this.password },
        (j) => {
          if (j.r === true) {
            this.$store.state.accessFlag = '-A-'
            this.$router.push('articles/!')
          } else {
            M.toast({html: 'Credenziali non valide', classes: 'red'})
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.cmp-login {
  width: 600px;
  max-width: 46vw;
  border-radius: 32px;
  overflow: hidden;
}
.cmp-login > div {
  padding: 1rem 2rem;
}
.cmp-login > div:first-child {
  border-radius: 32px;
  padding: 2rem 4rem;
}
</style>
