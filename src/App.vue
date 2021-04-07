<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  setup() { }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>