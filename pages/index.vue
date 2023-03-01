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
  </main>
</template>

<script>
import storiesSlider from '../components/storiesSlider/storiesSlider';
import popular from '../components/popular/popular';
import vGrid from '@/components/products/v-grid';
import miniDelivery from '../components/delivery/mini-delivery';

export default {
  components: {
    storiesSlider,
    popular,
    vGrid,
    miniDelivery
  }
}
</script>

<style lang="scss">


</style>
