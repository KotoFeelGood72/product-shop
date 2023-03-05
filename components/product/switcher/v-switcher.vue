<template>
  <li class="switch-item">
    <input
        type="radio"
        :name="name"
        :id="id"
        :checked="isChecked"
        :value="price"
        @change="handleChange"
        >
    <label :for="labelID" class="variant-target">{{title}}</label>
  </li>
</template>

<script>
  export default {
    props: ['name', 'id', 'title', 'isChecked', 'labelID', 'price'],
    methods: {
      handleChange(event) {
        if (event.target.checked) {
          this.$emit('price-change', this.price);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/help";

  .switch-item {
    height: 32px;
    width: 33%;
    font-size: 12px;
    font-weight: 600;
      label {
        @include flex-center;
        cursor: pointer;
        height: 100%;
        z-index: 2;
        position: relative;
        width: 100%;
      }
      input {
        display: none;
      }
  }


  .switch-item {
    padding: 2px;
    label {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%) translateX(-50px);
        width: 100%;
        height: 100%;
        background-color: $white;
        border-radius: 9999px;
        box-shadow: rgb(6 5 50 / 19%) 0px 6px 20px;
        z-index: -1;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity .4s ease;
      }
    }

    input {
      &:checked + label {
        &:after {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(0px);
        }
      }
    }
  }
</style>
