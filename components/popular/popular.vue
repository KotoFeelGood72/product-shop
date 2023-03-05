<template>
  <section class="popular block-standart">
    <div class="container">
      <h2>Часто заказывают</h2>
      <div class="popular-slider swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(products, index) in popular" :key="index">
            <div class="popular-slide">
              <NuxtLink to="/">
                <div class="popular_slide--img">
                  <img :src="products.img" alt="popular">
                </div>
                <div class="popular_slide--content">
                  <h3>{{ products.title }}</h3>
                  <span>{{ products.price }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
data() {
  return {
    popular: [
      {
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/b549211e80a74f27858af0f61129708a_183x183.png',
        title: 'Пепперони фреш',
        price: 'от 289'
      },
      {
        img: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/9c7c77167ef64d10a6c7a235d133f293_292x292.png',
        title: '3 пиццы',
        price: '1 199'
      },
    ],
    swiper: null
  }
},
mounted() {
  this.swiper = new Swiper('.popular-slider', {
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: '2',
      },
      768: {
        slidesPerView: '2.7',
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: '4.5',
        spaceBetween: 15,
      },
    }
  });

},
beforeDestroy() {
  if (this.swiper) {
    this.swiper.destroy(true, true);
    this.swiper = null;
  }
}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/help";


.popular {
  h2 {
    margin-bottom: 30px;
  }
  padding-bottom: 0;
}

.popular-slider {
  padding: 30px!important;
  margin: -30px!important;
  // margin: -20px;
  // .swiper-wrapper {
  //   padding: 20px;
  // }
}

.popular-slide {
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 16px;
  box-shadow: rgb(6 5 50 / 15%) 0px 4px 22px -6px;
  transition: all .3s ease;
  &:hover {
    box-shadow: rgb(6 5 50 / 15%) 0px 0px 12px -4px
  }
  a {
    @include flex-start;
    color: $black;

    h3 {
      font-size: 16px;
      @include bp($point_2) {
        font-size: 14px;
        font-family: $font_1;
      }
    }
  }
}

.popular_slide--img {
  max-width: 80px;
  max-height: 80px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
