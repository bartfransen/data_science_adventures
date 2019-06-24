<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  body {
        overflow: hidden;
        overflow-y: auto;
  }
</style>