<template>
  <div class="section-title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="scss" scoped>
  .section-title {
    h2, h3, h4, h5, h6 {
      font-size: 36px;
      margin-bottom: 40px;
    }
  }

  @media(max-width: 1024px) {
    .section-title {
      h2, h3, h4, h5, h6 {
        font-size: 24px;
      }
  }
}
</style>
