<template>
  <div id="app">
    <component v-if="currentLayout" :is="currentLayout" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppLayout from './layouts/app.vue'
import { routes, Route } from './router/routes'

@Component({
  components: { AppLayout }
})
export default class App extends Vue {
  get currentLayout() {
    const routeName = this.$route['name']
    const route = routes.find((route: Route) => route.name === routeName)
    return route ? route.layout : 'AuthLayout'
  }
}
</script>
