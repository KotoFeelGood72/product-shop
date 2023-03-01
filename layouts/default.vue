<template>
  <div>
    <v-header/>
    <nuxt/>
    <v-footer/>
  </div>
</template>

<script>
import vHeader from '../components/v-header/v-header';
import vFooter from '../components/v-footer/v-footer';

  export default {
    components: {
      vHeader,
      vFooter
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/help";

  body {
    font-family: $font_1;
  }

</style>
