import Vue from 'vue'
import InstagramHTTP from '@/api/HTTP/InstagramHTTP'

Vue.mixin({
  methods: {
    instagram(url: string) {
      return new InstagramHTTP(url)
    }
  }
})
