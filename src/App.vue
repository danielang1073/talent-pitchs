<template>
  <div id="app">
    <HomeView />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HomeView from "@/views/HomeView.vue";
@Component({
  components: {
    HomeView,
  },
})
export default class App extends Vue {}
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
