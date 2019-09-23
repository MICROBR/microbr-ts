import Vue from 'vue'
import InstagramHTTP from '@/api/InstagramHTTP'
import { AxiosApi } from '@/api/axiosApi'
import { FetchApi } from '@/api/fetchApi'

// Switch http provider here, f.e. to fetch api
const provider = AxiosApi

Vue.mixin({
  methods: {
    instagram() {
      return new InstagramHTTP()
    },
    api(collection: string) {
      return new provider(collection)
    }
  }
})
