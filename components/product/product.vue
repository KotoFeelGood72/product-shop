<template>
  <div class="popup product-popup" v-if="isOpen">
    <div class="popup-bg" @click="closePopup"></div>
    <div class="products_main">
      <div class="close-popup">
        <button @click="closePopup" type="button"><img src="~/assets/img/close.svg" alt=""></button>
      </div>
      <div class="product-img">
        <img :src="img" alt="">
      </div>
      <div class="product-content">
        <div class="product-scroll global-scroll">
          <div class="product-top">
            <h1>Четыре сезона</h1>
            <span>25 см, традиционное тесто, 430 г</span>
            <div class="product-composition">
              <ul>
                <li v-for="(item, i) in params" :key="`params-${i}`">
                  <button>{{ item }}</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-body">
          <div class="params-pizza_w">
            <ul class="params-pizza">
              <v-switcher
              v-for="(item, idx) in inputDataSize"
              :title="item.title"
              :key="idx"
              :name="item.name"
              :id="item.name + idx"
              :isChecked="idx === 0 ? true : item.isChecked"
              :labelID="item.name + idx"
              :price="item.price"
              @price-change="handlePriceChange(item.price, 'size')"
              />
            </ul>
          </div>
          <div class="params-pizza_w flex-2">
            <ul class="params-pizza">
              <v-switcher
              v-for="(item, idx) in inputDataType"
              :title="item.title"
              :key="idx"
              :name="item.name"
              :id="item.name + idx"
              :isChecked="idx === 0 ? true : item.isChecked"
              :labelID="item.name + idx"
              :price="item.price"
              @price-change="handlePriceChange(item.price, 'type')"
              />
            </ul>
          </div>
            <div class="add-suplement">
              <h4>Добавить по вкусу</h4>
              <ul class="supplement_list">
                <add-check-basket
                  v-for="(item, idx) in baskets"
                  :key="idx"
                  :img="item.img"
                  :name="item.name"
                  :price="item.price"
                  :title="item.title"
                  @price-change-suppl="handlePriceChange"
                  :id="item.name + '_' + idx"
                />

              </ul>
            </div>
          </div>
        </div>
        <v-button name="Добавить в корзину за" className="btn-accent" :dinamic="total ? total : getTotalPrice()"></v-button>
      </div>
    </div>
  </div>
</template>

<script>
import vButton from '~/components/v-btn/v-button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import vSwitcher from './switcher/v-switcher';
import addCheckBasket from './switcher/add-check-basket'

  export default {
    props: ['img'],
    data() {
      return {
        isOpen: false,
        totalSize: 0,
        totalType: 0,
        totalSuppl: 0,
        total: 0,
        selectedSize: [],
        selectedType: [],
        params: ['Увеличенная порция моцареллы, ветчина', 'пикантная пепперони', 'кубики брынзы', 'томаты', 'шампиньоны', 'итальянские травы', 'фирменный томатный соус'],
        inputDataType: [
          { title: 'Тонкое', name: 'typePizza', price:'700', group: 'type', isChecked: true, },
          { title: 'Традиционное', name: 'typePizza', price:'300', group: 'type'},
        ],
        inputDataSize: [
          { title: 'Маленькая', name: 'sizePizza', price:'500', group: 'size', isChecked: true, },
          { title: 'Средняя', name: 'sizePizza', price:'100', group: 'size' },
          { title: 'Большая', name: 'sizePizza', price:'600', group: 'size' },
        ],
        baskets: [
          {title: 'Сырный бортик', price: '189', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/bd896a42a5b44169ae9dfdc2573c34f2.png', name: 'supplimentsCheck'},
          {title: 'Сливочная моцарелла', price: '99', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png', name: 'supplimentsCheck'},
          {title: 'Чеддер и пармезан', price: '99', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796', name: 'supplimentsCheck'},
          {title: 'Острый халапеньо', price: '79', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/46889eeb335b4bf18d7a565f4fbc9588.png', name: 'supplimentsCheck'},
          {title: 'Нежный цыпленок', price: '99', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A', name: ''},
          {title: 'Пикантная пепперони', price: '99', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3', name: 'supplimentsCheck'},
          {title: 'Ветчина', price: '99', img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61', name: 'supplimentsCheck'},
        ],
      }
    },

    components: {
      vButton,
      vSwitcher,
      addCheckBasket
    },
    methods: {
      handlePriceChange(price, group, isChecked) {
        if (group === "size") {
          this.totalSize = parseInt(price);
        } else if (group === "type") {
          this.totalType = parseInt(price);
        } else if (group === 'suppl') {
          if (isChecked) {
            this.totalSuppl += parseInt(price);
          } else {
            this.totalSuppl -= parseInt(price);
          }
          }
         let totalPrice = parseInt(this.totalSize) + parseInt(this.totalType) + parseInt(this.totalSuppl);
         this.total = totalPrice;
      },
      getTotalPrice() {
        let totalPrice = 0;
        const selectedSize = this.inputDataSize.filter(item => item.isChecked).map(item => item.price);
        const selectedType = this.inputDataType.filter(item => item.isChecked).map(item => item.price);
        const selectedItems = [...selectedSize, ...selectedType];
        selectedItems.forEach(item => {
          totalPrice += parseInt(item);
        });

        this.total = totalPrice;
      },
      closePopup() {
        this.isOpen = false;
        this.$emit('close-popup', false);
      },
    },
    mounted() {
      this.$root.$on('open-popup', () => {
        this.isOpen = true;
        console.log(this.isOpen, 'Good')
      });
    },

  }
</script>

<style lang="scss" scoped>

@import "~/assets/scss/help";

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include z-index(popup);
    @include flex-center;
  }

  .popup-bg {
    opacity: .7;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
  }

  .close-popup {
    position: absolute;
    top: 1%;
    right: -6%;

  }
  .products_main {
    position: relative;
    background-color: $white;
    @include flex-start;
    max-width: 950px;
    width: 100%;
    border-radius: 20px;
  }
  .product-content {
    padding: 30px;
    flex: 1;

    .btn_w {
      button {
        width: 100%;
      }
    }
  }

  .product-img {
    max-width: 530px;
    width: 100%;
    @include flex-center;
    img {
      object-fit: contain;
      width: 100%;
      max-width: 450px;
    }
  }
  .add-suplement {
    padding: 20px 0;
    h4 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
    }
  }

  .supplement_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27%, 1fr));
    grid-gap: 8px;
  }

  .product-top {
    h1 {
      font-size: 24px;
      font-weight: 600;
    }

    span {
      font-size: 14px;
      color: rgb(92, 99, 112);
      display: block;
      margin-bottom: 5px;
    }
  }

  .product-composition {
    margin-bottom: 15px;
    ul {
      @include flex-start;
      flex-wrap: wrap;
      margin: -1px -5px 0 0;
      li {
        padding: 1px 10px 0 0;
        button {
          position: relative;
          display: inline-flex;
          font-size: 14px;
          border-bottom: 1px dashed $dark;
          line-height: 17px;
        }
      }
    }
  }


  .params-pizza {
    @include flex-center;
    border-radius: 30px;
    margin: 8px 0;
    padding: 3px;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background-color: rgb(243, 243, 247);
      border-radius: 30px;
      pointer-events: none;
    }
  }

  .params-pizza_w {
    position: relative;
    &.flex-2 {
    li {
      width: 50%;
    }
  }
  }

  .product-scroll {
    max-height: 520px;
    overflow-y: auto;
    overflow-x: hidden!important;
    padding: 0 20px;
    margin-bottom: 20px;
    &::-webkit-scrollbar-track
    {
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
      width: 4px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: $orange;
      // border: 2px solid #555555;
    }
  }

  .product-content {
    .btn_w {
      padding-left: 20px!important;
      :deep(button) {
        width: 100%!important;
        padding: 15px 30px;
      }
    }
  }



</style>
