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
              <div class="footer_logo"><img src="@/assets/img/logo-txt.svg" alt=""></div>
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

.footer {
  background-color: rgb(24, 24, 24);
}

</style>
