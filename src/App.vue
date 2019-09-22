<template>
  <div id="app">
    <component v-if="currentLayout" :is="currentLayout" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppLayout from './layouts/app.vue'
import AuthLayout from './layouts/auth.vue'
import { routes, Route } from './router/routes'

@Component({
  components: { AppLayout, AuthLayout }
})
export default class App extends Vue {
  get currentLayout() {
    const routeName = this.$route['name']
    const route = routes.find((route: Route) => route.name === routeName)
    return route ? route.layout : 'AuthLayout'
  }
}
</script>
<style lang="scss">
@import 'assets/scss/app.scss';
</style>
