<template>
  <v-toolbar
    color="primary"
    dark
    fixed
    app
    >
    <v-toolbar-title>Provisional Quote:<br>
      <transition name="fade" mode="out-in">
        <div :key="price.amount">
          {{ price.amount }}&nbsp;{{ price.currency }}
        </div>
      </transition>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'PriceDisplay',
  props: ['price']
}
</script>

<style scoped>
.fade-enter-active {
  transition: all .8s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.v-toolbar__title {
  margin: 0 auto;
  text-align: center;
}
</style>