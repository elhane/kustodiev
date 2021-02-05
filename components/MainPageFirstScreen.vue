<template>
  <div class="first-screen">
    <div class="first-screen__image-wrapper"></div>
    <div class="first-screen__inner">
      <Header />
      <Intro />
      <AffinageLink />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import AffinageLink from '@/components/AffinageLink'

export default {
  components: {
    Header,
    Intro,
    AffinageLink,
  },
}
</script>

<style scoped lang="scss">
.first-screen {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: $dark;

  &__image-wrapper {
    width: 32%;
    height: 100%;
    background-image: url('~static/pictures/main-picture@1x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
      background-image: url('~static/pictures/main-picture@2x.jpg');
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 68%;
    padding: 0;
  }

  @media (max-width: $mobile-width) {
    flex-direction: column-reverse;

    &__image-wrapper {
      width: 100%;
      height: 18%;
      min-height: 125px;
      background-image: url('~static/pictures/main-picture-mobile@1x.jpg');

      @media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
        background-image: url('~static/pictures/main-picture-mobile@2x.jpg');
      }
    }

    &__inner {
      width: 100%;
      padding: 0;
    }
  }

  @media (min-width: 360px) and (max-width: $mobile-width) {
    &__image-wrapper {
      height: 30%;
      max-height: 500px;
    }
  }
}
</style>
