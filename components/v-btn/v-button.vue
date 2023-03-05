<template>
    <div class="btn_w">
      <button :type="type" class="btn btn-standart" :class="className" :id="id" v-on="$listeners">
        {{ name }}
        <span v-if="dinamic" >{{dinamic}} ₽</span>
      </button>
    </div>
</template>

<script>
  export default {
    props: ['type', 'id', 'name', 'className', 'dinamic'],
  }
</script>

<style lang="scss">
  @import "~@/assets/scss/variables";

  .btn_w {
    .btn {
      padding: 8px 16px;
      font-size: 14px;
      background-color: $grey-light;
      color: $dark;
      border-radius: 100px;
      font-family: $font_1;
      font-weight: 600;
      &:hover {
        color: $black;
      }
    }

    .btn-accent {
      padding: 8px 20px;
      font-size: 16px;
      font-family: $font_1;
      font-weight: 600;
      color: $white;
      background-color: $orange;
      &:hover {
        background-color: $dark-orange;
        color: $white;
      }
    }

    .accent-plus {
      padding: 8px 20px;
      font-size: 16px;
      font-family: $font_1;
      font-weight: 500;
      color: rgb(209, 87, 0);
      background-color: rgb(255, 240, 230);
      &:hover {
        background-color: rgb(255, 210, 179);
        color: rgb(209, 87, 0);
      }
    }
    .accent-white {
      padding: 8px 20px;
      font-size: 16px;
      font-family: $font_1;
      font-weight: 500;
      color: rgb(209, 87, 0);
      background-color: rgb(255, 240, 230);
      &:hover {
        background-color: rgb(255, 210, 179);
        color: rgb(209, 87, 0);
      }
    }
  }
</style>
