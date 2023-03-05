<template>
  <div class="cart-empty">
    <div class="cart-emptyImg">
      <img src="~/assets/img/dog.svg" alt="">
    </div>
    <div class="cart_emptyContent">
      <h3>Ой, пусто!</h3>
      <p>Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар. Мы доставим ваш заказ от 599 ₽</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/help";
.cart-empty {
  padding: 30px;
  @include flex-center;
  flex-direction: column;
  text-align: center;
}
.cart_emptyContent {
  h3 {
    padding: 20px 0 10px 0;
    font-size: 22px;
  }

  p {
    color: $dark;
  }
}

</style>
