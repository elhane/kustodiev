<template>
  <div class="intro">
    <p class="intro__date">1878-1927</p>
    <h2 class="intro__title">борис кустодиев</h2>
    <p class="intro__text">
      Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены
      русских будней и праздников. Обладал редким безграничным талантом,
      которому, в первую очередь, было присуще особое чувство и восприятие
      родной природы.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  height: 100%;
  color: $light;
  padding-left: 90px;

  &__date,
  &__title {
    font-family: $yeseva;
  }

  &__date {
    position: absolute;
    @include text(64px, 59px, 400);
    transform: translate3d(-70%, 0, 0) rotate(-90deg);
  }

  &__title {
    max-width: 460px;
    @include text(80px, 80px, 400);
  }

  &__text {
    max-width: 520px;
  }
}
</style>
