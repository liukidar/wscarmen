/* eslint-disable */
<template>
  <div class="flex-filler grey darken-4" style="position: relative; overflow: hidden;">
    <h1 id="articles" class="white-text title text-important center-align"><br>PROGETTI e LAVORI</h1>
    <div class="right pushpin">
      <nav class="grey darken-3 z-depth-5" :class="{ active: isSearching }">
        <div class="nav-wrapper">
          <form>
            <div @click="isSearching = true" class="input-field">
              <input v-model="articlesFilter" class="white-text" id="search" type="search" placeholder="Search">
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i @click.stop="isSearching = false;" class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div v-if="accessFlag.indexOf('-A-') !== -1" @click="addArticle()" style="display:inline-block;"><i
          class="material-icons grey-text white waves-effect circle-halo-white z-depth-2 highlight-oh light">add</i>
      </div>
    </div>
    <div>
      <masonry class="row" ref="masonry" style="padding-bottom: 8rem;">
        <sourced-style :onclose="() => updateArticleMetadata(article.ID)" :prototype="style" :value.sync="article"
          v-for="article in selected" :key="article.ID" class="border no-padding" :class="article.style">
          <tile slot-scope="{value}" class="z-depth-2" :bkg="value.img" :to="'/article/' + value.ID + '/!'">
            <div slot="title">{{ value.title }}</div>
            <div slot="desc">
              <blockquote class="hide-on-med-and-down truncate" style="margin-top: 0;">{{ value.subtitle }}
              </blockquote>
              <div v-for="(tag, index) in value.tags" :key="index" class="chip z-depth-1">
                {{ tag }}
              </div>
              <div v-if="accessFlag.indexOf('-A-') !== -1" class="delete-article">
                <br><i class="material-icons circle-halo-white white z-depth-3 waves-effect waves-dark"
                  @click.stop="removeArticle(value.ID)">delete</i>
              </div>
              <div v-if="accessFlag.indexOf('-A-') !== -1" class="highlight-article">
                <br><i class="material-icons circle-halo-white z-depth-3 waves-effect waves-dark"
                  :class="{ 'red': (value.highlight == '1'), 'white': (value.highlight == '0') }"
                  @click.stop="highlightArticle(value.ID)">highlight</i>
              </div>
            </div>
          </tile>
        </sourced-style>
      </masonry>
    </div>
  </div>
</template>

<script>
import { Layer, SourcedStyle, Masonry, TrSlideIn } from 'cmps/lib'
import { Tile } from 'cmps/site'
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      isSearching: false,
      articlesFilter: null,
      style: {
        size: {
          big: 'col s12 m6 l4', small: 'col s6 m3 l2', default: 'col s6 m4 l3'
        },
        ratio: {
          default: 'r1-1', 'r1-2': 'r1-2', 'r2-1': 'r2-1', 'r4-3': 'r4-3'
        }
      }
    }
  },
  computed: {
    ...mapState(['api', 'title', 'accessFlag']),
    text() {
      return this.$store.getters['pages/articles/text']
    },
    articles() {
      let r = this.$store.getters['pages/articles/list']

      return r
    },
    sorted() {
      return Object.values(this.articles).sort((a, b) => { return ('' + a.subtitle).localeCompare(b.subtitle) * -1 })
    },
    selected() {
      return this.sorted.filter(el => {
        return this.articlesFilter !== null ? el.title.toLowerCase().indexOf(this.articlesFilter.toLowerCase()) !== -1 : true
      }).sort((a, b) => a.subtitle > b.subtitle)
    }
  },
  methods: {
    setPushpin() {
      M.Pushpin.init(document.querySelectorAll('.pushpin'), { top: 0, bottom: Math.max(264, document.getElementById('page-footer').offsetTop - 132), offset: 132 })
    },
    addArticle() {
      return this.$store.dispatch('pages/articles/add')
    },
    highlightArticle(ID) {
      // eslint-disable-next-line
      this.articles[ID].highlight = this.articles[ID].highlight == '1' ? 0 : 1
      console.log(ID + ' ' + this.articles[ID].highlight)

      let payload = {
        id: ID,
        value: this.articles[ID].highlight
      }
      return this.$store.dispatch('pages/articles/highlight', payload)
    },
    removeArticle(ID) {
      let payload = {
        ID: ID
      }
      this.$store.dispatch('pages/articles/remove', payload)
    },
    updateArticleMetadata(ID) {
      let payload = {
        id: ID,
        style: this.articles[ID].style
      }
      this.$store.dispatch('pages/articles/updateMetadata', payload)
      this.$nextTick(() => {
        this.$refs.masonry.masonry()
      })
    }
  },
  mounted() {
    this.setPushpin()
    this.$refs.masonry.addCallback('pushpin', this.setPushpin)
    this.$store.dispatch('pages/articles/list')
  },
  components: {
    Tile, Masonry, Layer, TrSlideIn, SourcedStyle
  },
  watch: {
    selected: function() {
      this.$nextTick(() => {
        this.$refs.masonry.masonry()
      })
    }
  }
}
</script>

<style scoped>
.pushpin {
  position: absolute;
  z-index: 3;
}

nav.active {
  width: 600px;
  margin-left: 2rem;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}

nav {
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  transition: border-radius 1s, width 1s, margin 1s;
  overflow: hidden;
  margin-right: 0;
  display: inline-block;
  width: 160px;
  max-width: calc(100vw - 8rem);
}

.s3 blockquote,
.m3 blockquote,
.l3 blockquote {
  display: none;
}

nav input {
  transition: 1s color;
}

nav input:focus {
  color: #565656 !important;
}

.delete-article {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.highlight-article {
  position: absolute;
  bottom: 1rem;
  right: 6rem;
}
</style>
