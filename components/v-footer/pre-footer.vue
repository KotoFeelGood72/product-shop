<template>
  <div class="prefooter">
    <div class="container">
      <div class="prefooter_feedback">
          <div class="prefooter_feedback_left">
            <div class="prefooter_feedback_icon">
              <img src="~@/assets/img/anonim.svg" alt="">
            </div>
            <h6>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</h6>
          </div>
          <v-button name="Заполнить анкету" className="accent-white"/>
      </div>
    </div>
  </div>
</template>

<script>
  import vButton from '@/components/v-btn/v-button';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  export default {
    components: {
      vButton,
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/help";

  .prefooter {
    background-color: $orange;
    padding: 10px 0;
  }
  .prefooter_feedback {
    @include flex-space;
    :deep(button) {
      @include bp($point_2) {
        font-size: 14px;
        padding: 5px 10px;
      }
    }
  }
  .prefooter_feedback_left {
    @include flex-start;

    h6 {
      color: $white;
      font-size: 18px;
      @include bp($point_2) {
        font-size: 14px;
      }
    }
  }
  .prefooter_feedback_icon {
    margin-right: 20px;
    max-width: 48px;
    width: 100%;
  }

</style>
