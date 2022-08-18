<template>
  <v-container> 
    <v-row>
      {{ title }} 
    </v-row>
    <v-row>
        <v-btn class="mr-1 mb-1" v-for="chap in chapters" :key="chap" @click="playChapter(chap)"> {{ chap+offset }} </v-btn>
    </v-row>
    <v-row>
        <youtube
            ref="youtube"
            :video-id="videoId"
            :player-vars="playerVars"
            :resize="true"
            :fit-parent="true"
            @ready="onReady"
        />
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

export default {
  data() {
    return {
      title: '',
      book: {},
      chapters: [],
      offset: 0,
      videoId: '',
      playerVars: {
        autoplay: 1,
        controls: 1,
        fs: 1,
        iv_load_policy: 3, // not working
        loop: 1, // not working
        modestbranding: 1, // no effect
        rel: 1,
        showinfo: 1
      },
    }
  },
  beforeRouteUpdate (to, from, next) {
    // console.warn(to, from)
    this.title = to.query.title
    this.videoId = to.query.vid
    this.book.time = to.query.time
    this.chapters = []
    this.offset = to.query.offset ? to.query.offset : 0
    console.warn(this.offset)
    for (let i = 0; i < to.query.chapter; i++) {
      this.chapters.push(i+1)
    }
    next();
  },
  mounted() {
    // console.log(this.$route.query)
    // console.log(this.$route.params)
    this.title = this.$route.query.title
    this.book = this.$route.query
    this.videoId = this.$route.query.vid
    if (this.videoId === 'bXSqhL5yfeM') {
      this.offset = this.$route.query.offset
      console.warn(this.offset)
    }
    for (let i = 0; i < this.book.chapter; i++) {
      this.chapters.push(i+1)
    }
  },
  methods: {
    onReady (obj) {
      this.videoId = this.$route.query.vid
    },
    playChapter(chap) {
      const i = Number(chap) - 1
    //   console.log(this.book.time[i])
      const tmp = this.book.time[i].split(':')
      const start = Number(tmp[0])*3600 + Number(tmp[1])*60 + Number(tmp[2])
      this.$refs.youtube.player.seekTo(start, true)
      this.$refs.youtube.player.playVideo()
    }
  }
}
</script>