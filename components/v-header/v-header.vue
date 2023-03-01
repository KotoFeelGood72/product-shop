<template>
  <header>
    <div class="container">
      <div class="header_main">
        <div class="header_main--top">
          <div class="header_col_left">
            <div class="header_logo">
              <img src="@/assets/img/logo.svg" alt="">
            </div>
            <div class="header_delivery">
              <p>Доставка пиццы <span>Краснодар</span></p>
              <div class="header_delivery_time">31 мин <span>4.8 </span><i class="bi bi-star-fill"></i></div>
            </div>
          </div>
          <v-button type="button" id="login" name="Войти"/>
        </div>
        <div class="header_main--bottom">
          <v-nav/>
          <v-button type="button" id="cart-link" name="Корзина" className="btn-accent"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

import vNav from './v-nav'
import vButton from '../v-btn/v-button.vue';
  export default {
    vNav,
    vButton
  }
</script>

<style lang="scss">
  @import '~@/assets/scss/help.scss';


  .header_main--top {
    padding: 24px 0 16px 0;
  }
  .header_main--top, .header_col_left {
    @include flex-start;
    width: 100%;
    align-items: flex-start;
  }

  .header_logo {
    max-width: 250px;
    width: 100%;
    margin-right: 40px;
  }

  .header_delivery {
    p {
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;

      span {
        color: $orange;
      }
    }
  }
  .header_delivery_time {
    font-size: 15px;
    position: relative;
    padding-right: 20px;
    display: inline-flex;
    font-weight: 600;

    span {
      &:before {
        padding: 0 5px;
        content: '•';
      }
    }

    i {
      font-size: 14px;
      color: $yellow;
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      right: 0;
    }
  }

  .header_main--bottom {
    @include flex-space;
  }
</style>
