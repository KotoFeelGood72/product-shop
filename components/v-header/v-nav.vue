<template>
  <nav class="navigation-page">
    <div class="nav-logo">
      <img src="~/assets/img/favicon.png" alt="">
    </div>
    <ul>
      <li v-for="(item, i) in menu" :key="'menu' + i"><NuxtLink :to="item.link">{{item.name}}</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>



  export default {
    data() {
      return {
        menu: [
          {
            link: '/',
            name: 'Пицца'
          },
          {
            link: '/',
            name: 'Комбо'
          },
          {
            link: '/',
            name: 'Закуски'
          },
          {
            link: '/',
            name: 'Десерты'
          },
          {
            link: '/',
            name: 'Напитки'
          },
          {
            link: '/',
            name: 'Другие товары'
          },
          {
            link: '/',
            name: 'Акции'
          },
          {
            link: '/',
            name: 'Контакты'
          },
          {
            link: '/',
            name: 'О нас'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '@/assets/scss/help';

.header_main--bottom {
  nav {
    ul {
      @include flex-start;
      margin: -10px -30px 0 0;
      li {
        padding: 10px 30px 0 0;
        a {
          font-size: 14px;
          color: $black;
          font-size: 14px;
          font-family: $font_1;
          font-weight: 600;
          &:hover {
            color: $orange;
          }
        }
      }
    }
  }
}

.nav-logo {
  width: 36px;
  height: 36px;
  @include flex-center;
  margin-right: 16px;
}

.navigation-page {
  @include flex-start;
  margin-left: -50px;
  transition: all .3s ease;
}

</style>
