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
          <v-button type="button" id="login" name="Войти" />
          <div class="burger_btn"><i class="bi bi-list"></i> <i class="bi bi-x"></i></div>
        </div>
        <div class="header_main--bottom">
          <div class="container">
            <v-nav/>
            <v-button
            type="button"
            id="cart-link"
            name="Корзина"
            className="btn-accent"
            @click="$emit('open-cart')"
            />
          </div>
          <cart-message/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';

import vNav from './v-nav'
import vButton from '@/components/v-btn/v-button';
import cartMessage from '../message/cart-message';
  export default {
    components: {
      vNav,
      vButton,
      cartMessage
    },
  }
</script>

<style lang="scss">
  @import '~@/assets/scss/help.scss';


  .header_main--top {
    padding: 24px 0 16px 0;

    .btn_w {
      @include bp($point_2) {
        display: none;
      }
    }
  }
  .header_main--top, .header_col_left {
    @include flex-start;
    width: 100%;
    align-items: flex-start;
    @include bp($point_2) {
      align-items: center;
    }
  }

  .header_logo {
    max-width: 250px;
    width: 100%;
    margin-right: 40px;
  }

  .header_delivery {
    @include bp($point_2) {
      display: none;
    }
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
    width: 100%;
    position: relative;

    @include bp($point_2) {
      display: none
    }


    &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(6 5 50 / 10%) 0px 4px 30px;
        @include z-index(el);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
      }
    &.position-fixed {
      top: 0;
      left: 0;
      width: 100%;
      padding: 8px 0;
      background-color: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      @include z-index(header);
      &:before {
        opacity: 1;
        visibility: visible;
      }

      .navigation-page {
        margin-left: 0;
      }
    }
  }
  .header_main--bottom .container {
    @include flex-space;
    padding: 0;
    position: relative;
    overflow: hidden;

  }

  .burger_btn {
    width: 30px;
    height: 30px;
    position: relative;
    display: none;
    @include bp($point_2) {
      display: block;
    }
    .bi {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      font-family: $font_1;
      font-weight: 600;
      &-x {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

</style>
