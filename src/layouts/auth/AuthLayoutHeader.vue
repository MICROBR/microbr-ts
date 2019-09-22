<template>
  <header
    class="navbar container mx-auto flex justify-between mt-10 items-center "
  >
    <div>
      <img class="h-6" src="@/assets/logo.svg" alt="MicroBrand Logo" />
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AuthLayoutNavigation extends Vue {}
</script>
