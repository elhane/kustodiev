<template>
  <section class="gallery">
    <div class="gallery__slider">
      <!--pre-wrapper -->
      <!-- миниатюры -->
      <div ref="slider1" class="gallery__slider-mobile">
        <!-- .wrapper  -->
        <div ref="slider" class="gallery__thumbnails">
          <!-- .post-wrapper  -->
          <div
            v-for="(picture, index) in pictures"
            :key="index"
            :class="{ active: activePicture == index }"
            :style="{
              'background-image': 'url(' + picture.src + ')',
            }"
            @click="changePicture(index)"
          ></div>
        </div>
      </div>

      <!-- название и номер -->
      <!-- <p>Версия {{ isMobile }}</p> -->
      <p class="gallery__pictute-name">{{ pictures[activePicture].name }}</p>
      <p class="gallery__pictute-number">
        <span>{{ pictures.indexOf(pictures[activePicture]) + 1 }}</span> / 505
      </p>

      <!-- кнопки -->
      <button
        type="button"
        aria-label="Предыдущий слайд"
        class="gallery__btn gallery__btn--prev"
        @click="previousPicture()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="12">
          <path
            fill="#bfbfbf"
            d="M41 5.2H2.8l3.5-3.5c.3-.3.3-.8 0-1.1C6 .4 5.5.4 5.2.7L.5 5.5c-.3.3-.3.8 0 1.1l4.8 4.8c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L2.8 6.8H41V5.2z"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Следующий слайд"
        class="gallery__btn gallery__btn--next"
        @click="nextPicture()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="12">
          <path
            fill="#bfbfbf"
            d="M41 5.2H2.8l3.5-3.5c.3-.3.3-.8 0-1.1C6 .4 5.5.4 5.2.7L.5 5.5c-.3.3-.3.8 0 1.1l4.8 4.8c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L2.8 6.8H41V5.2z"
          />
        </svg>
      </button>

      <!-- <nuxt-link class="gallery__link" to="/pictures"
          >все картины
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="7">
            <path fill="#bfbfbf" d="M1 7l-.8-.9 2.5-2.6L.2 1 1 .1l3.4 3.4z" />
          </svg>
        </nuxt-link> -->
      <nuxt-link class="gallery__link" to="/pictures"
        >все картины
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="7">
          <path fill="#bfbfbf" d="M1 7l-.8-.9 2.5-2.6L.2 1 1 .1l3.4 3.4z" />
        </svg>
      </nuxt-link>

      <!-- активный слайд -->
      <div
        class="gallery__activePicture"
        :style="{
          'background-image': 'url(' + pictures[activePicture].src + ')',
        }"
      >
        <!-- <img :src="pictures[activePicture].src" alt="" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activePicture: 0,
      windowWidth: 1024,
      startX: null,
      pictures: [
        {
          name: 'Купчиха за чаем',
          src: require('~/static/pictures/slide1@1x.jpg'),
        },
        {
          name: 'Купчихи',
          src: require('~/static/pictures/slide2@1x.jpg'),
        },
        {
          name: 'Осенний сельский праздник',
          src: require('~/static/pictures/slide3@1x.jpg'),
        },
        {
          name: 'Масленица',
          src: require('~/static/pictures/slide4@1x.jpg'),
        },
        {
          name: 'Осень в провинции. Чаепитие',
          src: require('~/static/pictures/slide5@1x.jpg'),
        },
      ],
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 1023
    },
  },
  mounted() {
    this.changePicture(0)
    document.addEventListener('keydown', (evt) => {
      if (evt.code === 'ArrowLeft') this.previousPicture()
      if (evt.code === 'ArrowRight') this.nextPicture()
    })
    window.addEventListener('resize', (evt) => {
      this.windowWidth = window.innerWidth
    })
    this.$refs.slider.addEventListener('touchstart', (evt) => {
      this.startX = (evt.touches || evt.originalEvent.touches)[0].clientX
    })
    this.$refs.slider.addEventListener('touchmove', (evt) => {
      if (!this.startX) return
      const xDelta =
        this.startX - (evt.touches || evt.originalEvent.touches)[0].clientX

      if (xDelta > 30) {
        if (this.activePicture + 1 < this.pictures.length) {
          this.changePicture(this.activePicture + 1)
        }
        this.startX = null
      } else if (xDelta < -30) {
        if (this.activePicture - 1 >= 0) {
          this.changePicture(this.activePicture - 1)
        }
        this.startX = null
      }
    })
  },
  methods: {
    changePicture(index) {
      this.activePicture = index
    },
    nextPicture() {
      this.changePicture(
        this.activePicture + 1 < this.pictures.length
          ? this.activePicture + 1
          : 0
      )

      if (this.windowWidth < 1023) {
        console.log('меньше 1023')
      }
    },
    previousPicture() {
      this.changePicture(
        this.activePicture - 1 >= 0
          ? this.activePicture - 1
          : this.pictures.length - 1
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  background-color: $dark;
  padding: 0 0 20px 0;

  &__slider {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 920px;
    padding-bottom: 80px;
    margin: 0 auto;
  }

  &__slider-mobile {
    width: 85%;
  }

  &__link {
    display: flex;
    align-items: center;
    margin-left: auto;
    @include text(14px, 20px);
    color: $gray-light;

    svg {
      margin-left: 10px;
    }
  }

  &__activePicture {
    position: relative;
    width: 100%;
    padding-bottom: 65%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    img {
      width: 100%;
      height: auto;
    }
  }

  &__pictute-name {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    // margin: 0 auto;
    text-align: center;
    @include text(14px, 20px, 300);
    color: $light;
    margin: 0;
  }

  &__pictute-number {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    text-align: center;
    @include text(14px, 13px);
    color: #848484;
    margin: 0;

    span {
      color: $light;
    }
  }

  &__btn {
    position: absolute;
    bottom: 36px;
    border: none;
    background-color: transparent;
    font-size: 32px;
    color: #fff;
    opacity: 1;
    outline: none;
    height: 30px;

    &:hover {
      opacity: 1;
    }

    &--prev {
      left: 0;
      padding: 0;
    }
    &--next {
      right: 0;
      padding: 0;

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &__thumbnails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    // width: 85%;
    padding: 40px 0;

    div {
      width: 120px;
      height: 90px;
      cursor: pointer;
      // padding-bottom: 65%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.6;

      &:hover {
        opacity: 0.8;
      }

      &.active {
        opacity: 1;
      }
    }
  }

  @media (max-width: $mobile-width) {
    padding-top: 60px;
    padding-bottom: 70px;

    &__slider {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      overflow: hidden;
      padding-bottom: 0;
    }

    &__slider-mobile {
      overflow: hidden;
      width: 100%;
      padding: 0 0 0;
      margin: 0 0 -60px;
    }

    &__thumbnails {
      position: relative;
      display: inline-block;
      vertical-align: top;
      font-size: 0;
      white-space: nowrap;
      width: 100%;
      overflow: auto;
      padding: 40px 0 90px;

      div {
        display: inline-block;
        vertical-align: top;
        width: 59%;
        padding-bottom: 46%;
        background: none no-repeat 50% 50%;
        background-size: cover;
        margin: 0 20px 0 0;
        opacity: 1;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__activePicture,
    &__btn {
      display: none;
    }

    &__link {
      margin-left: unset;
      justify-content: center;
      align-self: flex-end;
    }

    &__pictute-name {
      top: 0;
      max-height: 30px;
    }

    &__pictute-number {
      bottom: 30px;
    }
  }
}
</style>
