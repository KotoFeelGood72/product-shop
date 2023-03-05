<template>
  <div class="footer_wrapper">
    <pre-footer/>
    <footer class="footer">
      <div class="container">
        <div class="footer_top">
          <div class="footer_nav_w">
            <ul>
              <li v-for="(navItem, i) in navigation">
                <p>{{ navItem.name }}</p>
                <ul>
                  <li v-for="item in navItem.nav">
                    <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="footer_app">
            <ul class="footer_app_list">
              <li>
                <a href="/" target="_blank"><img src="@/assets/img/iphone-app.svg" alt=""></a>
              </li>
              <li>
                <a href="/" target="_blank"><img src="@/assets/img/android-app.svg" alt=""></a>
              </li>
              <li>
                <a href="/" target="_blank"><img src="@/assets/img/huawei-app.svg" alt=""></a>
              </li>
            </ul>
            <div class="footer_app_contacts">
              <a class="footer_phone" href="tel:88003020060">8 800 302-00-60</a>
              <span>Звонок бесплатный</span>
              <a href="mailto:feedback@dodopizza.com" class="footer_email">feedback@dodopizza.com</a>
            </div>
          </div>
        </div>
        <div class="footer_static">
          <ul>
            <li>
              <p>4 262 934 732 ₽</p>
              <span>Выручка российской сети в этом месяце. В прошлом — 5 113 344 096 ₽</span>
            </li>
            <li>
              <p>894 пиццерии</p>
              <span>Вв 17 странах, от Великобритании до Нигерии</span>
            </li>
          </ul>
        </div>
        <div class="footer_bottom">
          <div class="footer_info">
            <div class="footer_infoList_w">
              <div class="footer_logo"><img src="@/assets/img/logo-txt-white.svg" alt=""></div>
              <p>© 2023</p>
              <ul class="footer_info_list">
                <li><NuxtLink to="/">Правовая информация</NuxtLink></li>
                <li><NuxtLink to="/">Калорийность и состав</NuxtLink></li>
                <li><NuxtLink to="/">Помощь</NuxtLink></li>
              </ul>
            </div>
            <ul class="footer_social">
              <li>
                <a target="_blank" href="/"><i class="bi bi-instagram"></i></a>
              </li>
              <li>
                <a target="_blank" href="/"><i class="bi bi-tiktok"></i></a>
              </li>
              <li>
                <a target="_blank" href="/"><i class="bi bi-youtube"></i></a>
              </li>
            </ul>
          </div>
          <ul>
            <li>© 2023 ООО “Додо Франчайзинг”</li>
            <li>ОГРН 1131101001844, ИНН 1101140415</li>
            <li>167001, Республика Коми, г. Сыктывкар, Октябрьский проспект, д. 16</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import preFooter from './pre-footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
  export default {
    components: {
      preFooter,
    },

    data() {
      return {
        navigation: [
          {
            name: 'Додо Пицца',
            nav: [
              {
                title: 'О нас',
                link: '/'
              },
              {
                title: 'Додо-книга',
                link: '/'
              },
              {
                title: 'Блог «Сила ума»',
                link: '/'
              },
              {
                title: 'Додо ИС',
                link: '/'
              },

            ]
          },
          {
            name: 'Работа',
            nav: [
              {
                title: 'В пиццерии',
                link: '/'
              }
            ]
          },
          {
            name: 'Партнерам',
            nav: [
              {
                title: 'Франшиза',
                link: '/'
              },
              {
                title: 'Инвестиции',
                link: '/'
              },
              {
                title: 'Поставщикам',
                link: '/'
              },
              {
                title: 'Предложить помещение',
                link: '/'
              },

            ]
          },
          {
            name: 'Это интересно',
            nav: [
              {
                title: 'Почему мы готовим без перчаток?',
                link: '/'
              },
              {
                title: 'Экскурсии и мастер-классы',
                link: '/'
              },
              {
                title: 'Корпоративные заказы',
                link: '/'
              },
            ]
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/help";

.footer {
  background-color: rgb(24, 24, 24);
  color: $white;
  padding: 30px 0;
  a {
    color: inherit;
  }
}

.footer_top {
  @include flex-space;
  flex-wrap: wrap;
  align-items: flex-start;
  @include bp($point_2) {
    flex-direction: column;
  }
}

.footer_nav_w {
  margin-right: 20px;
  @include bp($point_2) {
    margin: 0 0 30px 0;
    width: 100%;
  }
  &>ul {
    margin: -50px -60px 0 0;
    @include flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    @include bp($point_2) {
      flex-direction: column;
      margin: 0;
    }
    &>li {
      padding: 50px 60px 0 0;
      @include bp($point_2) {
        padding: 0;
      }
      &:not(:last-child) {
        @include bp($point_2) {
          margin-bottom: 20px;
        }
      }
      p {
        font-weight: 600;
        margin-bottom: 10px;
      }
      li {
        a {
          opacity: .5;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
.footer_app {
  @include flex-end;
  flex-direction: column;
  align-items: flex-end;
  max-width: 371px;
  @include bp($point_2) {
    max-width: 100%;
    align-items: flex-start;
    margin-bottom: 20px;
  }
}
.footer_app_list {
  @include flex-end;
  flex-wrap: wrap;
  margin: -10px -10px 0 0;
  @include bp($point_2) {
    margin: -5px -5px 0 0;
    justify-content: flex-start;
  }
  &>li {
    padding: 10px 10px 0 0;
    @include bp($point_2) {
      padding: 5px 5px 0 0;
    }
  }
}

.footer_app_contacts {
  @include flex-end;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0 0 0;
  @include bp($point_2) {
    align-items: flex-start;
  }

  .footer_phone {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-size: 15px;
    opacity: .5;
    display: block;
    margin-bottom: 15px;
  }

  .footer_email {
    opacity: .5;
    &:hover {
      opacity: 1;
    }
  }
}

.footer_static {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 25px;
  @include bp($point_2) {
    display: none;
  }
  ul {
    @include flex-start;
    flex-wrap: wrap;
    margin: -50px -50px 0 0;
    align-items: flex-start;
    &>li {
      padding: 50px 50px 0 0;
      max-width: 350px;

      p {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 10px;
      }
      span {
        display: block;
        opacity: .5;
      }
    }
  }
}

.footer_info {
  @include flex-space;
  margin-bottom: 20px;
  @include bp($point_2) {
    flex-direction: column;
    align-items: flex-start
  }
}

.footer_social {
  @include flex-start;
  margin: -8px -8px 0 0;
  li {
    padding: 8px 8px 0 0;
    a {
      width: 32px;
      height: 32px;
      @include flex-center;
      background-color: rgba(196, 196, 196, 0.2);
      border-radius: 4px;
      &:hover {
        color: $orange;
        background-color: $white;
      }
    }
  }
}

.footer_infoList_w, .footer_info_list {
  @include flex-start;
  @include bp($point_2) {
    flex-direction: column;
    align-items: flex-start;
    order: 1;
  }
}

.footer_infoList_w {
  @include bp($point_2) {
    margin-top: 20px;
    width: 100%;
  }
  &>p {
    margin-right: 16px;
    opacity: .5;
    @include bp($point_2) {
      display: none;
    }
  }
}

.footer_info_list {
  margin: -16px -16px 0 0;
  @include bp($point_2) {
    margin: -5px -5px 0 0;
  }
  li {
    padding: 16px 16px 0 0;
    @include bp($point_2) {
      padding: 5px 5px 0 0;
    }
    a {
      opacity: .5;
      &:hover {
        opacity: 1;
      }
    }
  }
}


.footer_logo {
  width: 110px;
  @include flex-center;
  margin-right: 8px;
  opacity: .5;
  @include bp($point_2) {
    margin: 10px 0;
  }
}

.footer_bottom {
  &>ul {
    li {
      font-size: 11px;
      opacity: .2;
      &:not(:last-child) {
        margin-bottom: 2px;
      }
    }
  }
}
</style>
