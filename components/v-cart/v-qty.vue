<template>
  <div class="cart-qty">
    <div class="cart_qtyBtn">
      <button type="button"><i class="bi bi-dash"></i></button>
    </div>
    <div class="cart_qtyInput">
      <input type="number" value="1">
    </div>
    <div class="cart_qtyBtn">
      <button type="button"><i class="bi bi-plus"></i></button>
    </div>
  </div>
</template>

<script>
  import 'bootstrap-icons/font/bootstrap-icons.css';

  export default {

  }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/help";
.cart-qty {
  @include flex-center;
  max-width: 96px;
  width: 100%;
  background-color: rgb(243, 243, 247);
  border-radius: 50px;
}
.cart_qtyBtn {
  width: 30%;
  height: 33px;
  button {
    width: 100%;
    height: 100%;
    @include flex-center;
    font-size: 20px;
  }
}

.cart_qtyInput {
  width: 30%;
  input {
    border: none;
    width: 100%;
    @include flex-center;
    text-align: center;
    background: transparent;
    color: $dark;
    font-weight: 600;
    &:focus {
      outline: none;
    }
  }
}

</style>
