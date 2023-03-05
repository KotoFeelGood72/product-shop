<template>
  <main>
    <stories-slider />
    <popular/>
    <v-grid blockTitle="Пицца"/>
    <v-grid blockTitle="Комбо"/>
    <v-grid blockTitle="Закуски"/>
    <v-grid blockTitle="Десерты"/>
    <v-grid blockTitle="Напитки"/>
    <v-grid blockTitle="Другие товары"/>
    <mini-delivery/>
    <product :isOpen="isOpen" @close-popup="isOpen = false" img="https://dodopizza-a.akamaihd.net/static/Img/Products/9b0c599124a8414f89fd59967f3baa3d_760x760.png"/>
  </main>
</template>

<script>
import storiesSlider from '../components/storiesSlider/storiesSlider';
import popular from '../components/popular/popular';
import vGrid from '@/components/products/v-grid';
import miniDelivery from '../components/delivery/mini-delivery';
import product from '../components/product/product';

export default {
  components: {
    storiesSlider,
    popular,
    vGrid,
    miniDelivery,
    product
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.$root.$on('open-popup', (value) => {
      this.isOpen = value;
    });
  },
}
</script>

<style lang="scss">


</style>
