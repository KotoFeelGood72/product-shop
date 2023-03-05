<template>
  <li class="suppliment_item">
    <input type="checkbox"
    :name="name"
    :id="id"
    :value="price"
    v-model="isChecked"
    @change="handleChangeSuppl"
    >
    <label :for="id">
      <div class="supplement_img">
        <img :src="img" alt="">
      </div>
      <h3>{{ title }}</h3>
      <p>{{ price }}</p>
      <i class="selected-icon bi bi-check2-circle"></i>
    </label>
  </li>
</template>

<script>
  export default {
    props: ['title', 'price', 'name', 'img', 'id'],
    data() {
      return {
        isChecked: false
      };
    },
    methods: {
      handleChangeSuppl() {
        this.$emit('price-change-suppl', this.price, 'suppl', this.isChecked); // передаем состояние checkbox
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "~/assets/scss/help";

  .suppliment_item {
    height: 166px;

    input {
      display: none;
      &:checked + label {
        &:after {
          opacity: 1;
          visibility: visible;
        }
        .selected-icon {
          opacity: 1;
          visibility: visible;
          top: 5px;
        }
      }
    }

    label {
      padding: 8px;
      background-color: $white;
      box-shadow: rgba(6, 5, 50, 0.12) 0px 4px 20px;
      border: 1px solid $white;
      border-radius: 12px;
      text-align: center;
      display: block;
      position: relative;
      cursor: pointer;
      user-select: none;
      height: 100%;
      @include flex-space;
      flex-direction: column;
      &:after {
        border-radius: 12px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid $dark-orange;
        content: '';
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
      }
      h3 {
        font-size: 12px;
        font-weight: 500;
        // margin-bottom: 15px;
      }

      p {
        font-size: 16px;
        font-weight: 600;
        &:after {
          content: ' ₽';
        }
       }
      .supplement_img {
        height: 90px;
        img {
          width: 100%;
        }
      }
    }
  }

  .selected-icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 5px;
    font-size: 20px;
    border-radius: 100%;
    color: $dark-orange;
    transition: all .3s ease;
    opacity: 0;
    visibility: hidden;
  }
</style>
