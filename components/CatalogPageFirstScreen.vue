<template>
  <div class="first-screen">
    <Header />
    <div class="first-screen__inner">
      <div class="first-screen__info container">
        <h2 class="first-screen__title">картины</h2>
        <h2 class="first-screen__name">бориса кустодиева</h2>
      </div>
      <div class="first-screen__pre-wrapper">
        <div class="first-screen__pictures-wrapper">
          <div class="first-screen__pictures">
            <div
              v-for="(picture, index) in pictures"
              :key="index"
              :style="{
                backgroundImage:
                  'url(' + require(`~/static/pictures/${picture.src}`) + ')',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <AffinageLink />
  </div>
</template>

<script>
import Header from '@/components/Header'
import AffinageLink from '@/components/AffinageLink'

export default {
  components: {
    Header,
    AffinageLink,
  },
  data() {
    return {
      pictures: [
        {
          src: 'slide1@1x.jpg',
        },
        {
          src: 'slide6@1x.jpg',
        },
        {
          src: 'slide7@1x.jpg',
        },
        {
          src: 'slide4@1x.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.first-screen {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: $dark;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  &__pre-wrapper {
    width: 100%;
  }

  &__pictures {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    font-size: 0;
    white-space: nowrap;

    div {
      display: inline-block;
      vertical-align: top;
      width: 25%;
      padding-bottom: 18%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 20px 0 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    color: $light;
    margin-bottom: 60px;
  }

  &__title {
    font-family: $yeseva;
    @include text(80px, 73px);
    margin: 0 45px 0 0;
  }

  &__name {
    max-width: 200px;
    @include text(40px, 50px, 300);
    margin: 10px 0 0;
  }

  @media (max-width: $mobile-width) {
    &__inner {
      justify-content: space-between;
      padding-bottom: 40px;
      padding-top: 40px;
    }

    &__info {
      flex-direction: column;
      margin-bottom: 40px;
    }

    &__title {
      @include text(40px, 44px);
      margin-bottom: 20px;
    }

    &__name {
      @include text(30px, 40px, 300);
    }

    &__pre-wrapper {
      width: 100%;
      overflow: hidden;
    }

    &__pictures-wrapper {
      width: 100%;
      padding: 0 0 20px;
      margin: 0 0 -20px;
      overflow: hidden;
      overflow-x: auto;
    }

    &__pictures {
      div {
        width: 57%;
        padding-bottom: 48%;
      }
    }
  }
}
</style>
