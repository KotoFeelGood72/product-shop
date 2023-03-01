<template>
  <div class="card-products">
    <NuxtLink to="/">
      <div class="card_products--top">
        <div class="card_products--img">
          <img :src="img" alt="Products" title="Products">
        </div>
        <div class="card_products--content">
          <h3>{{ title }}</h3>
          <p>{{ txt }}</p>
        </div>
      </div>
      <div class="card_products--bottom">
        <div class="card_price">{{ price }}</div>
        <v-button name="В корзину" className="accent-plus"/>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import vButton from '../v-btn/v-button';

  export default {
    components: {
      vButton,
    },
    props: ['img', 'title', 'txt', 'price']
  }
</script>

<style lang="scss" scoped>


@import "@/assets/scss/help";


.card_products--img {
  max-width: 277px;
  widows: 100%;
  transition: all .3s ease;
  img {
    width: 100%;
  }
}

.card-products {
  height: 485px;
  a {
    color: $black;
    height: 100%;
    @include flex-space;
    flex-direction: column;
    &:hover {
      .card_products--img {
        transform: translateY(5px);
      }
    }
  }
}
.card_products--content {
  margin-bottom: 30px;
  h3 {
      font-size: 20px;
      font-family: $font_1;
      font-weight: 600;
      margin: 8px 0;
    }

    p {
      font-size: 14px;
      font-family: $font_1;
      color: $dark;
    }
}
.card_products--bottom {
  @include flex-space;
  width: 100%;

  .card_price {
    font-size: 20px;
    font-family: $font_1;
    font-weight: 600;
    &:after {
      content: ' ₽';
    }
  }
}
</style>
