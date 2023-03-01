<template>
  <div class="products_block block-standart">
    <div class="container">
      <products-title :title="blockTitle"/>
      <ul class="products-grid">
        <li class="products-item" v-for="(product, i) in products" :key="i">
          <v-card :title="product.title" :img="product.img" :txt="product.txt" :price="product.price"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import vCard from '@/components/products/v-card';
  import productsTitle from '@/components/products/products-title';
  export default {
    props: ['blockTitle'],
    components: {
      productsTitle,
      vCard,
    },
    data() {
      return {
        products: [
          {
            title: 'Пицца-сказка с игрушкой на коробке',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/bb57de86339b4ef0b629dfa381d4bfab_760x760.png',
            txt: 'Пикантная пепперони, цыпленок, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо',
            price: '409'
          },
          {
            title: 'Деревенская с бужениной',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/200ef6ddfb814852ad1a2456c5d7c62c_760x760.png',
            txt: 'Запеченная буженина из свинины, моцарелла, картофель из печи, маринованные огурчики, красный лук, чеснок, фирменный томатный соус, соус ранч',
            price: '409'
          },
          {
            title: 'Ветчина и сыр',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_233x233.png',
            txt: 'Ветчина, моцарелла, фирменный соус альфредо',
            price: '409'
          },
          {
            title: 'Пицца-сказка с игрушкой на коробке',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/bb57de86339b4ef0b629dfa381d4bfab_760x760.png',
            txt: 'Пикантная пепперони, цыпленок, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо',
            price: '409'
          },
          {
            title: 'Деревенская с бужениной',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/200ef6ddfb814852ad1a2456c5d7c62c_760x760.png',
            txt: 'Запеченная буженина из свинины, моцарелла, картофель из печи, маринованные огурчики, красный лук, чеснок, фирменный томатный соус, соус ранч',
            price: '409'
          },
          {
            title: 'Ветчина и сыр',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_233x233.png',
            txt: 'Ветчина, моцарелла, фирменный соус альфредо',
            price: '409'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>


@import "@/assets/scss/help";



.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 60px 40px;
}
</style>
