<template>
  <li class="cart_item">
    <div class="remove_item">
      <button type="button"><i class="bi bi-x"></i></button>
    </div>
    <div class="cart_item--top">
      <div class="cart_itemImg">
        <img src="https://cdn.dodostatic.net/static/Img/Products/bb57de86339b4ef0b629dfa381d4bfab_760x760.png" alt="">
      </div>
      <div class="cart_itemTile">
        <h4>Пицца-сказка с игрушкой на коробке</h4>
        <p>Маленькая 25 см, традиционное тесто</p>
      </div>
    </div>
    <div class="cart_item-bottom">
      <div class="cart_itemPrice">409 ₽</div>
      <v-qty/>
    </div>
  </li>
</template>

<script>
import vQty from './v-qty'
  export default {
    components: {
      vQty,
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/help";


.cart_item {
  position: relative;
  padding: 12px 16px;
  background: rgb(255, 255, 255);
  &:not(:last-child) {
    margin-bottom: 8px;
  }
}

.cart_item--top {
  @include flex-start;
}
.cart_itemImg {
  max-width: 60px;
  margin-right: 16px;
  img {
    width: 100%;
  }
}
.cart_itemTile {
  h4 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    color: $dark;
  }
 }
 .cart_item--top {
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(226, 226, 233);
  margin-bottom: 12px;
 }
 .cart_item-bottom {
  @include flex-start;
 }
 .remove_item {
  position: absolute;
  top: 1%;
  right: 1%;
  font-size: 25px;
  line-height: 25px;
  button {
    color: $dark;
    font-weight: 700;
  }
 }
 .cart_itemPrice {
  font-weight: 600;
  flex: 1;
  font-family: $font_1;
}

</style>
