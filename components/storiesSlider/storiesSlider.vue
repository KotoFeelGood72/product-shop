<template>
    <section class="stories">
      <div class="container">
        <div class="stories_slider_w">
          <div class="swiper-container stories_slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(story, index) in stories" :key="index" @click="openGallery(index)">
                <img :src="story.image" alt="story" />
              </div>
            </div>
          </div>
          <div class="story_navigation">
            <div class="prev_slide"><i class="bi bi-chevron-left"></i></div>
            <div class="next_slide"><i class="bi bi-chevron-right"></i></div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  data() {
    return {
      stories: [
        {image: 'https://cdn.inappstory.com/story/lfs/y2k/xov/hfffhhv4t3qyiphqi7agqj5/custom_cover/logo-350x440.jpg?v=1677057469'},
        {image: 'https://cdn.inappstory.com/story/hcc/wzd/ryo/y8d86pxnden7zijfn5latge/custom_cover/logo-350x440.jpg?v=1676872078' },
        {image: 'https://cdn.inappstory.com/story/r0b/mek/bbm/vliyoyth1lclhfx3kihub96/custom_cover/logo-350x440.jpg?v=1677050087' },
        {image: 'https://cdn.inappstory.com/story/0av/qcd/tj4/o3jpdltyiyofqrgekofmk95/custom_cover/logo-350x440.jpg?v=1676448002'},
        {image: 'https://cdn.inappstory.com/story/fbd/wgw/2il/kag0yscc5jyfo3716agds3r/custom_cover/logo-350x440.jpg?v=1675931874'},
        {image: 'https://cdn.inappstory.com/story/chv/j3f/364/wlcjmq17mg7zlmdqiygzf1x/custom_cover/logo-350x440.jpg?v=1675367764'},
        {image: 'https://cdn.inappstory.com/story/nvh/frh/i9z/rzi7y8dzrdccq99qkugemll/custom_cover/logo-350x440.jpg?v=1675153066'},
        {image: 'https://cdn.inappstory.com/story/psu/msa/o7n/z78d9rdmjuglsip8sycfkku/custom_cover/logo-350x440.jpg?v=1674814162'},
        {image: 'https://cdn.inappstory.com/story/3bb/1bl/u8g/fwx6qgcmrtpyx4t84uk10tk/custom_cover/logo-350x440.jpg?v=1662013835'},
        {image: 'https://cdn.inappstory.com/story/kek/i3m/bxs/gohegpjdnn0urpzt8xupg7x/custom_cover/logo-350x440.jpg?v=1675927554'},
      ],
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.stories_slider', {
      speed: 600,
      navigation: {
        nextEl: '.next_slide',
        prevEl: '.prev_slide'
      },
      breakpoints: {
        320: {
          slidesPerView: '2',
        },
        768: {
          slidesPerView: '4',
        },
        1200: {
          slidesPerView: '6',
          spaceBetween: 20,
        },
      }
    });

  },
  methods: {
    openGallery(index) {
      // Your logic to open gallery for the selected slide
      console.log('Open gallery for slide', index);
    }
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/help";
.story_navigation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100%  + 100px);
  @include flex-space;
  font-size: 30px;
  font-family: $font_1;
  font-weight: 700;
  color: $orange;
  pointer-events: none;
  div {
    cursor: pointer;
    pointer-events: all;
    z-index: 11;
  }
}
.stories_slider_w {
  margin-top: 20px;
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 100%;
  padding: 0!important;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.swiper-button-disabled {
  opacity: .6;
  pointer-events: none;
}
</style>
