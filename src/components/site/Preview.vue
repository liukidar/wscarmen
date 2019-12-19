<template>
  <div class="cmp-cmp-event-card col s12 m6 l4">
    <layer class="cmp-card z-depth-2">
      <div slot-scope="layer" class="cmp-body white" :style="{ 'background-image': 'url(\'' + image + '\')'}">
        <div class=" flex-fill white-text waves-effect waves-light" @click="(e) => layer.set(e, 'description', 'white')">
          <h4>{{title}}</h4>
          <i class="material-icons">link</i>
        </div>
      </div>
      <div class="cmp-description white card-padding waves-effect left-align" slot="description" slot-scope="layer" @click="(e) => layer.set(e, '', 'white')">
        <h4>{{subtitle}}</h4>
        <p class="flow-text">{{description}}</p>
        <div class="cmp-learnmore center-align">
          <router-link :to="'/article/' + article + '/!'" class="btn-hm accent waves-effect">
            LEARN MORE
          </router-link>
        </div>
      </div>
    </layer>
  </div>
</template>

<script>
import { Layer } from 'cmps/lib'
export default {
  props: ['article', 'title', 'subtitle', 'description', 'image'],
  components: { Layer }
}
</script>

<style scoped>

.cmp-card {
  margin: 16px;
  border-radius: 24px;
  overflow: hidden;
  transition: .35s;
}
.cmp-card:hover {
  box-shadow: 0 12px 40px 0 rgba(0,0,0,0.8);
  z-index: 1;
}

.cmp-body {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50% !important;
  padding-top: 100%;
}

.cmp-body > div {
  width: 100%;
  padding: 12px 16px;
  background: rgba(0,0,0,0.4);
  transition: .5s;
}
.cmp-body > div:hover {
  background: rgba(0,0,0,0.6);
}

.cmp-description {
  position: relative;
}
.cmp-learnmore {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5rem 1rem 1rem 1rem;
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.95), rgba(255,255,255,1.0));
}

</style>
