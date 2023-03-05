<template>
  <div class="card-products" @click="openPopup">
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
        <v-button name="Выбрать" className="accent-plus"/>
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
    props: ['img', 'title', 'txt', 'price'],
    methods: {
      openPopup() {
        this.$root.$emit('open-popup', true);
      }
    }
  }
</script>

<style lang="scss" scoped>


@import "@/assets/scss/help";


.card_products--img {
  max-width: 277px;
  width: 100%;
  transition: all .3s ease;
  @include bp($point_2) {
    max-width: 110px;
    margin-right: 10px;
  }
  img {
    width: 100%;
  }
}

.card-products {
  height: 485px;
  @include bp($point_2) {
    height: auto;
  }
  a {
    color: $black;
    height: 100%;
    @include flex-space;
    flex-direction: column;
    @include bp($point_2) {
      height: auto;
      align-items: flex-start;
    }
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
  @include bp($point_2) {
    justify-content: flex-start;
  }

  .btn_w {
    @include bp($point_2) {
      margin-right: 40px;
    }
    :deep(button) {
      @include bp($point_2) {
        padding: 5px 20px;
        font-size: 14px;
      }
    }
  }

  .card_price {
    font-size: 20px;
    font-family: $font_1;
    font-weight: 600;
    @include bp($point_2) {
      order: 1;
      color: $dark-orange;
    }
    &:after {
      content: ' ₽';
    }
  }
}

.card_products--top {
  @include bp($point_2) {
    @include flex-start;
    margin-bottom: 5px;
  }
}
</style>
