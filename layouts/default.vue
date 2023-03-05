<template>
  <main class="app-wrapper">
    <v-header @open-cart="openCartPopup"/>
    <nuxt/>
    <v-footer/>
    <v-cart :is-open="isCartPopupOpen" @close="closeCartPopup"/>
  </main>
</template>

<script>
import vHeader from '../components/v-header/v-header';
import vFooter from '../components/v-footer/v-footer';
import vCart from '../components/v-cart/v-cart';

  export default {
    components: {
      vHeader,
      vFooter,
      vCart,
    },
    data() {
      return {
        isCartPopupOpen: false
      };
    },
    methods: {
      openCartPopup() {
        this.isCartPopupOpen = true
        console.log('Good')
      },
      closeCartPopup() {
        this.isCartPopupOpen = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/help";

  body {
    font-family: $font_1;
  }

  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

</style>
