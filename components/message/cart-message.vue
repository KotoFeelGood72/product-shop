<template>
  <div class="message-add" v-if="isActive">
    <span>Добавлено:</span>
    <span>{{ message }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
      isActive: false,
    }
  }
</script>

<style lang="scss" scoped>
  .message-add {
    position: absolute;
    top: calc(100% + 10px);
    right: 15%;
    z-index: 101;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 14px;
    min-width: 300px;
    max-width: 300px;
    background: rgba(53, 53, 53, 0.877);
    backdrop-filter: blur(20px);
    color: white;
    font-weight: 500;
    span {
      display: block;
    }
  }
</style>
