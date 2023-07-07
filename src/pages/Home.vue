/* eslint-disable */
<template>
  <div>
    <div class="full-screen vertical-flex" style="overflow: hidden;">
      <img v-for="el in slider" :key="el" :src="'static/imgs/' + el"
        style="position:absolute; width: 0px; height: 0px;" />
      <slider :indicators="false" class="flex-filler" style="pointer-events:none;">
        <tile v-for="el in slider" :key="el" class="flex-filler" :bkg="'static/imgs/' + el">
        </tile>
      </slider>
      <div id="header" class="absolute-center-aligned vertical-flex center">
        <page-header :loaded="loaded" open-title-char='/' close-title-char='/' to="about"
          class="white-text text-important center-align">
          <template slot="title"><span v-html="text.title"></span></template>
          <template slot="subtitle">{{ text.subtitle }}</template>
          <template slot="description">{{ text.description }}</template>
        </page-header>
        <copyright class="white-text hide-on-small-only"></copyright>
        <div id="header-sidebar" class="hide-on-small-only flex-filler">
          <div class="vr white flex-filler"></div>
          <div class="flex-fixed hide-on-small-only">
            <capitalize-oh word="Progetti" to="articles/!" class="waves-effect waves-light"></capitalize-oh>
          </div>
          <div class="vr white flex-filler"></div>
          <div style="padding: 1rem; align-self:flex-end; transform: translateX(50%); z-index: 1"><i
              @click="login = !login" class="material-icons btn-hm waves-effect">person</i></div>
        </div>
      </div>
      <transition name="login">
        <login v-if="login"></login>
      </transition>
    </div>
    <layer id="about" class="section">
      <div class="section" slot-scope="layer" style="margin-bottom: 0;">
        <div class="container center-align">
          <h2 class="grey-text text-darken-3 title text-important">{{ text.sections.about.title }}</h2>
        </div>
        <div class="white center-align container">
          <div class="flow-text" v-html="text.sections.about.description"></div>
        </div>
        <div class="row section">
          <div class="col col-margin s12 m4 center-align">
            <span class="btn-hm dark text-important" @click="(e) => layer.set(e, 'design', 'white')">PROGETTAZIONE</span>
          </div>
          <div class="col col-margin s12 m4 center-align">
            <span class="btn-hm dark text-important"
              @click="(e) => layer.set(e, 'renovation', 'white')">RISTRUTTURAZIONE</span>
          </div>
          <div class="col col-margin s12 m4 center-align">
            <span class="btn-hm dark text-important" @click="(e) => layer.set(e, 'building', 'white')">CANTIERE</span>
          </div>
        </div>
      </div>
      <div class="center-align vertical-flex" slot="design" slot-scope="layer">
        <div class="card-padding flex-filler background-contain">
          <!-- :style="'background-image: url(static/imgs/project1.png);'" -->
          <div class="section">
            <h4 class="text-important">Progettazione</h4>
            <div class="grey" style="display: inline-block; width: 28px; height: 3px; margin:4px auto 16px auto;"></div>
            <div class="flow-text">
              Si parte da un desiderio, da un’emozione, da un’esigenza, da una voglia di spazio, e si sviluppa un’idea.
            </div>
          </div>
          <div style="margin: 0 auto;">
            <i class="material-icons close-arrow btn-hm dark waves-effect waves-light"
              @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
          </div>
        </div>
      </div>
      <div class="center-align vertical-flex" slot="renovation" slot-scope="layer">
        <div class="card-padding flex-filler background-contain">
          <div class="section">
            <h4 class="text-important">Ristrutturazione</h4>
            <div class="grey" style="display: inline-block; width: 28px; height: 3px; margin:4px 0 16px 0;"></div>
            <div class="flow-text">
              Demolire e ricostruire, mantenere e conservare, rivedere e cambiare, l’idea sviluppata che si concretizza,
              che segue il progetto in ogni sua fase, fino alla fine.
            </div>
          </div>
          <div style="margin: 0 auto;">
            <i class="material-icons close-arrow btn-hm dark waves-effect waves-light"
              @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
          </div>
        </div>
      </div>
      <div class="center-align vertical-flex" slot="building" slot-scope="layer">
        <div class="card-padding flex-filler background-contain">
          <div class="section">
            <h4 class="text-important">Cantiere</h4>
            <div class="grey" style="display: inline-block; width: 28px; height: 3px; margin:4px 0 16px 0;"></div>
            <div class="flow-text">
              Mattone e gesso, cemento e sabbia, ferro e legno, materiali in armonia tra loro, che si uniscono e crescono,
              fino alla fine dell’opera.
            </div>
          </div>
          <div style="margin: 0 auto;">
            <i class="material-icons close-arrow btn-hm dark waves-effect waves-light"
              @click="(e) => layer.set(e, null, 'white')">arrow_back</i>
          </div>
        </div>
      </div>
    </layer>
    <paper-container id='presentation' class="section grey lighten-4">
      <template slot="paper-before">
        <paper class="grey darken-4 rt" :deg='45' style="left: 25%;"></paper>
      </template>
      <div class="row horizontal-flex stretch">
        <div class="col l3 hide-on-med-and-down background-cover"
          style="background-image: url('static/imgs/IMG_6262.jpg'); box-shadow: inset -10px 10px 20px -10px rgba(0,0,0,1);">
        </div>
        <div class="section col s12 m12 l9" style="padding-top: 4rem;">
          <div class="container section" v-for="(person, index) in text.sections.about.people" :key="person.name">
            <div class="row">
              <card-person class="col s12 m11 l10" :img="'static/imgs/' + person.img" :title="person.name"
                :subtitle="person.type" :class="{ 'right-side': index % 2, 'offset-m1 offset-l2': !(index % 2) }">
                <template slot="content">
                  <div class="flow-text" v-for="(el, index) in person.content" :key="index">
                    {{ el }}
                    <br><br>
                  </div>
                </template>
                <template slot="info">
                  <div class="flow-text left-align" v-for="(el, index) in person.info" :key="index">{{ el }}<br><br></div>
                </template>
                <template slot="more">
                  <div class="flow-text left-align" v-for="(el, index) in person.more" :key="index">{{ el }}<br><br></div>
                </template>
                <template slot="contacts">
                  <p class="flow-text" v-for="(el, index) in person.contacts" :key="index">
                    <i class="material-icons inline middle">{{ el[0] }}</i> {{ el[1] }}<br><br>
                  </p>
                </template>
              </card-person>
            </div>
          </div>
        </div>
      </div>
      <div class="center-align grey darken-4 quote">
        <div class="container white-text flow-text text-important">{{ text.quotes[0] }}</div>
      </div>
      <template slot="paper-after">
        <paper class="main-bkg lt" :deg='-12' style="right:60%;"></paper>
        <div class="inset-shadow top"></div>
        <paper class="white rt" :deg='3'></paper>
      </template>
    </paper-container>
    <paper-container id="news" class="white" style="padding-top: 20px;">
      <template slot="paper-before">
        <paper class="main-bkg accent-4 rt" :deg='10' style="left:70%;"></paper>
        <div class="inset-shadow top"></div>
        <paper class="white lt" :deg='-3'></paper>
      </template>
      <div class="container section center-align">
        <h2 class="black-text title text-important no-margin">{{ text.sections.news.title }}</h2>
        <div class="row">
          <preview v-for="el in articles" :key="el.ID" :article="el.ID" :title="el.title" :subtitle="el.subtitle"
            :description="el.description" :image="el.img"></preview>
        </div>
      </div>
    </paper-container>
    <div class="black" id="infos" style="overflow:auto">
      <div class="section">
        <div class="container center-align">
          <h2 class="white-text title text-important">{{ text.sections.infos.title }}</h2>
        </div>
        <div class="row">
          <google-map class="col s12 l7 no-margin" :center="{ lat: 45.547823, lng: 10.220669 }"
            :marker="{ lat: 45.549923, lng: 10.223849 }" style="height: 520px;"></google-map>
          <div class="col s12 l5 no-margin grey darken-4 grey-text text-lighten-2 center-align vertical-flex center"
            style="height: 520px;">
            <div class="vertical-flex center no-wrap" style="margin: 0 auto;">
              <h4 class="text-important">CONTATTI</h4><br>
              <div class="left-align">
                <p>
                  <i class="left material-icons circle-halo-white">location_on</i>
                  <span class="flow-text">{{ infos.location }}<br><b>{{ infos.city }}</b></span>
                </p>
                <p>
                  <i class="left material-icons circle-halo-white">phone</i>
                  <span class="flow-text">{{ infos.phone }}<br><span class="slash"></span>{{ infos.mobile }}</span>
                </p>
                <p>
                  <i class="left material-icons circle-halo-white">email</i>
                  <span class="flow-text">{{ infos.pec }}<br><span class="slash"></span>{{ infos.mail }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="white-text">
        <h2 class="center-align title text-important">{{ text.sections.contacts.title }}</h2>
        <div class="container" style="max-width: 800px;">
          <div class="row">
            <p class="flow-text col s12 white-text center-align text-important">
              <big>{{ text.sections.contacts.subtitle }}</big>
            </p>
          </div>
          <div class="section row">
            <p class="flow-text col s12" style="border-left: 3px solid main-bkg;">
              {{ text.sections.contacts.rows[0].description }}
            </p>
            <div class="input-field col s6">
              <i class="material-icons prefix">person</i>
              <input v-model="requestName" id="first_name" type="text" class="white-text">
              <label for="first_name">{{ text.sections.contacts.rows[0].labels[0] }}</label>
            </div>
            <div class="input-field col s6">
              <input v-model="requestSurname" id="last_name" type="text" class="white-text">
              <label for="last_name">{{ text.sections.contacts.rows[0].labels[1] }}</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">mail</i>
              <input v-model="requestMail" id="email" type="email" class="white-text">
              <label for="email">{{ text.sections.contacts.rows[0].labels[2] }}</label>
            </div>
          </div>
        </div>
        <paper-container class="grey darken-4 z-depth-3 grey-text text-lighten-2">
          <template slot="paper-before">
            <paper class="rt black" deg="8"></paper>
          </template>
          <div class="row container" style="max-width: 800px; position: relative;">
            <p class="flow-text col s12" style="border-left: 3px solid main-bkg;">
              {{ text.sections.contacts.rows[1].description }}
            </p>
            <div class="input-field col s12">
              <i class="material-icons prefix">message</i>
              <textarea v-model="requestMsg" id="textarea1" class="materialize-textarea white-text"
                style="height:108px;"></textarea>
            </div>
          </div>
        </paper-container>
        <div class="row grey darken-2">
          <div class="container">
            <p class="right-align col s12">
              <a @click="sendRequest" class="btn btn-hm waves-effect waves-light">{{
                text.sections.contacts.rows[1].labels[0] }} <i class="right material-icons">send</i></a>
            </p>
          </div>
        </div>
      </form>
    </div>
    <paper-container class="black" style="height:400px;">
      <parallax img='static/imgs/IMG_4747.jpg' height="400px" opacity="0.8"></parallax>
      <template slot="paper-after">
        <paper class="main-bkg accent-4 rb" :deg='-10'></paper>
        <paper class="grey darken-2 rb" :deg='-6'></paper>
        <paper class="grey darken-4 lb" :deg='4'></paper>
        <div class="inset-shadow top"></div>
      </template>
    </paper-container>
    <div class="fixed-action-btn hide-on-med-and-up">
      <router-link to="/articles/!" class="btn-floating btn-large main-bkg">
        <i class="large material-icons">dashboard</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Layer, Map as GoogleMap, Masonry, Parallax, Slider, Paper, PaperContainer, TrSlideIn } from 'cmps/lib'
import { Card, Tile, Person, CardPerson, PageHeader, Copyright, CapitalizeOh, Preview } from 'cmps/site'

import Login from './home/Login'
import { mapState } from 'vuex'

export default {
  props: {
    loaded: {
      default: false
    }
  },
  data: function() {
    return {
      requestName: null,
      requestSurname: null,
      requestMail: null,
      requestMsg: null,
      slider: [
        'bkg5.jpg',
        'bkg2.jpg',
        'bkg4.jpg',
        'bkg1.jpg'
      ],
      people: [
        {
          name: 'Maria Tesè',
          id: 'maria_tese'
        },
        {
          name: 'Sara Pinchetti',
          id: 'sara_pinchetti'
        }
      ],
      login: false
    }
  },
  methods: {
    sendRequest() {
      this.api.request('POST', 'info', { action: 'request-infos', mail: this.requestMail, msg: this.requestMsg, name: this.requestName, surname: this.requestSurname },
        (j) => {
          if (j.r === true) {
            M.toast({ html: 'La tua richiesta è stata inviata' })
            this.requestMsg = null
          }
        }
      )
    }
  },
  computed: {
    ...mapState(['api', 'title', 'accessFlag']),
    ...mapState('app', ['infos']),
    text() {
      return this.$store.getters['pages/home/text']
    },
    articles() {
      return this.$store.getters['pages/articles/listHighlights']
    }
  },
  mounted() {
    this.$store.dispatch('pages/articles/list')
    this.$store.dispatch('pages/articles/highlights')
  },
  components: {
    PageHeader,
    Masonry,
    Card,
    Parallax,
    Paper,
    Person,
    CardPerson,
    Slider,
    PaperContainer,
    CapitalizeOh,
    Copyright,
    Tile,
    GoogleMap,
    Layer,
    TrSlideIn,
    Login,
    Preview
  }
}
</script>

<style scoped>
.quote {
  padding: 80px 0;
  box-shadow: inset 0px 30px 40px -30px rgba(0, 0, 0, 1), inset 0px -30px 40px -30px rgba(0, 0, 0, 1);
}

#header {
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  padding-bottom: 4rem;
}

#header-sidebar {
  height: 100%;
  position: absolute;
  top: 0;
  right: 42px;
}

#header-sidebar>.vr {
  align-self: flex-end;
}

.cmp-login {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
}

.login-leave-active,
.login-enter-active {
  transition: .75s;
}

.login-enter,
.login-leave-to {
  transform: scale(0);
  top: 100%;
  left: 100%;
  opacity: 0;
}
</style>
