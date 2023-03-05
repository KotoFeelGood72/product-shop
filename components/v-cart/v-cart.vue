<template>
  <div class="cart" v-if="isOpen">
    <div class="cart_bg" @click="$emit('close')"></div>
    <div class="cart_main_w">
      <div class="cart_main">
        <div class="cart_close" @click="$emit('close')">
          <button type="button"><img src="~/assets/img/close.svg" alt=""></button>
        </div>
        <v-cart-empty v-if="empty"/>
        <div class="cart_top">
          <h3 v-for="(item, idx) in info" :key="idx">{{ item.counter }} товар на {{ item.price }} ₽</h3>
          <p>До минимальной суммы на доставку — 190 ₽</p>
        </div>
        <div class="cart_body">
          <v-cart-product v-for="item in 10" :key="item"/>
        </div>
        <div class="cart-bottom">
          <ul class="cart_total--list">
            <li>
              <p>1 товар</p>
              <span>409 ₽</span>
            </li>
            <li>
              <p>Начислим додокоины</p>
              <span>+20 </span>
            </li>
            <li>
              <p>Доставка</p>
              <span>Бесплатно</span>
            </li>
          </ul>
          <div class="cart-total">
            <p>Сумма заказа</p>
            <span>409 ₽</span>
          </div>
          <v-button className="btn-accent" name="К оформлению заказа"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vCartEmpty from './v-cart-empty'
import vCartProduct from './v-cart-product'
import vButton from '~/components/v-btn/v-button'
  export default {
    components: {
      vCartEmpty,
      vCartProduct,
      vButton
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        empty: false,
        info: [
          {
            counter: 1,
            price: 409
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/help";

  .cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    @include z-index(popup);
    @include flex-end;
  }
  .cart_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: .7;
  }
  .cart_main_w {
    position: relative;
    max-width: 430px;
    width: 100%;
    height: 100%;
    @include flex-center;
    background-color: rgb(243, 243, 247);
  }

  .cart_close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15%;
    @include flex-center;
  }

  .cart_main {
    width: 100%;
    height: 100%;
  }


 .cart_top {
  padding: 20px 16px;

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
 }

 .cart_body {
  margin-bottom: 50px;
  max-height: 57%;
  overflow-y: auto;
  padding-right: 10px;
  &::-webkit-scrollbar-track
    {
      background-color: #F5F5F5;
      border-radius: 100px;
    }

    &::-webkit-scrollbar
    {
      width: 3px;
      background-color: #F5F5F5;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: $orange;
      // border: 2px solid #555555;
      border-radius: 100px;
    }
}
.cart-bottom {
  background-color: $white;
  box-shadow: rgb(6 5 50 / 10%) 0px -2px 4px;
  padding: 20px 16px;

  .btn_w {
    :deep(button) {
      width: 100%;
      padding: 13px 20px;
    }
  }
}
.cart_total--list {
  margin-bottom: 30px;
  li {
    @include flex-start;
    font-size: 14px;
    font-weight: 600;
    border-bottom: .1rem solid rgba(226, 226, 233, 0.651);
    padding-bottom: 10px;
    font-family: $font_1;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    p {
      flex: 1;
    }
  }
}
.cart-total {
  @include flex-start;
  font-size: 18px;
  font-weight: 600;
  font-family: $font_1;
  margin-bottom: 20px;
  p {
    flex: 1;
  }
}
</style>
