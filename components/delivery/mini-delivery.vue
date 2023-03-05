<template>
  <section class="delivery block-standart">
    <div class="container">
      <div class="delivery_main">
        <products-title title="Доставка и оплата"/>
        <ul class="delivery_info">
          <li>
            <h5>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h5>
            <div class="delivery_txt">
              <p>Если мы не успеем доставить продукты в течение 60 минут, курьер подарит вам сертификат или промокод на большую пиццу 35 см на традиционном тесте.</p>
            </div>
          </li>
          <li>
            <h5>ДОДО ПИЦЦА — СЕТЬ ПИЦЦЕРИЙ № 1 В РОССИИ</h5>
            <div class="delivery_txt">
              <p>по доставке пиццы по данным из отчета Euromonitor International на май 2017 года.</p>
              <p>Все цены в меню указаны без учета скидок.</p>
            </div>
          </li>
          <li>
            <h6>549 ₽</h6>
            <div class="delivery_txt">
              <p>Минимальная сумма доставки</p>
            </div>
            <h6>7 000 ₽</h6>
            <div class="delivery_txt">
              <p>Максимальная сумма при оплате наличными</p>
              <p>Изображения продуктов могут отличаться от продуктов в заказе.</p>
            </div>
          </li>
          <li>
            <h5>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h5>
            <div class="delivery_img">
              <img src="~@/assets/img/map.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import productsTitle from '../products/products-title';
  export default {
    components: {
      productsTitle
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/help';
  .delivery_info {
    @include flex-start;
    align-items: flex-start;
    margin: -60px -60px 0 0;

    h5, h6 {
      font-size: 18px;
      color: $orange;
      margin-bottom: 10px;
    }
    li {
      padding: 60px 60px 0 0;
      // max-width: 281px;
      width: 100%;
    }
  }

  .delivery_img {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .delivery_txt {
    margin-bottom: 20px;

    p, span, ul, li, h2, h3, h4, h5, h6 {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  .delivery {
    @include bp($point_2) {
      display: none;
    }
  }
</style>
