<template>
  <div class="intro">
    <p class="intro__date">1878-1927</p>
    <h1 class="intro__title">борис кустодиев</h1>
    <p class="intro__text">
      Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены
      русских будней и праздников. Обладал редким безграничным талантом,
      которому, в первую очередь, было присуще особое чувство и восприятие
      родной природы.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-left: 140px;
  padding-top: 0;
  color: $light;

  &__date,
  &__title {
    font-family: $yeseva;
  }

  &__date {
    @include text(64px, 59px);

    @media (min-width: $desktop-width) {
      position: absolute;
      transform: translate3d(-66%, 0, 0) rotate(-90deg);
    }
  }

  &__title {
    max-width: 460px;
    @include text(80px, 80px);
    margin: 7px 0 33px 41px;
  }

  &__text {
    max-width: 561px;
    @include text(16px, 29px, 300);
    margin: 0 0 0 41px;
  }

  @media (max-width: $mobile-width) {
    justify-content: flex-start;
    padding: 17px 20px 0;

    &__date {
      @include text(20px, 18px);
      margin-bottom: 17px;
    }
    &__title {
      @include text(40px, 44px);
      margin: 0;
      margin: 0 0 19px 0;
    }

    &__text {
      margin: 0;
    }
  }
}
</style>
