<template>
  <div>
    <AuthLayoutHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthLayoutHeader from '@/layouts/auth/AuthLayoutHeader.vue'

@Component({ components: { AuthLayoutHeader } })
export default class AuthLayout extends Vue {}
</script>
