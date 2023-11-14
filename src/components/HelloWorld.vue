<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.text }}</h1>
    <h1>{{ $store.getters.mensaje }}</h1>
    <h1>{{ amigo }}</h1>
    <button @click="changeText">cambio texto</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  msg!: string;
  $store!: any;
  amigo!: string;

  data() {
    return {
      amigo: "hola amigo",
    };
  }
  changeText(this: HelloWorld, event: Event): void {
    this.$store.dispatch("actionChangeText");
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
