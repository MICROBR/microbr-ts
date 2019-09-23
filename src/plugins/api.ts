import Vue from 'vue'
import InstagramHTTP from '@/api/InstagramHTTP'

Vue.mixin({
  methods: {
    instagram(url: string) {
      return new InstagramHTTP(url)
    }
  }
})
