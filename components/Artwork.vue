<template>
  <section id="artwork" class="container artwork section">
    <div class="artwork__top section__top">
      <h2 class="artwork__title section__title">творчество</h2>
      <p class="artwork__description">
        Трудно найти другого живописца, настолько горячо влюбленного в
        провинциальную Россию: самобытную, яркую, удивляющую.
      </p>
    </div>
    <div class="artwork__inner artwork__inner--top">
      <p class="artwork__feature">
        Как и большинство работ автора, пейзажные полотна Кустодиева отличаются
        особой выразительностью, яркостью и насыщенностью цветовых планов. На
        картинах Кустодиева природа всегда представляет собой нечто гораздо
        большее, чем просто пейзажное изображение.
      </p>
      <!-- <img
        src="~static/pictures/artwork1.jpg"
        alt=""
        width="240"
        height="173"
      /> -->
      <picture>
        <source
          media="(max-width: 1023px)"
          srcset="
            ~static/pictures/artwork1-mobile@1x.jpg 1x,
            ~static/pictures/artwork1-mobile@2x.jpg 2x
          "
        />
        <img
          src="~static/pictures/artwork1-desktop@1x.jpg"
          srcset="~static/pictures/artwork1-desktop@2x.jpg 2x"
          width="240"
          height="173"
          loading="lazy"
          alt=""
        />
      </picture>
    </div>

    <!-- <img
      src="~static/pictures/artwork-main.jpg"
      alt=""
      width="920"
      height="667"
    /> -->
    <picture>
      <source
        media="(max-width: 1023px)"
        srcset="
          ~static/pictures/artwork2-mobile@1x.jpg 1x,
          ~static/pictures/artwork2-mobile@2x.jpg 2x
        "
      />
      <img
        src="~static/pictures/artwork2-desktop@1x.jpg"
        srcset="~static/pictures/artwork2-desktop@2x.jpg 2x"
        width="920"
        height="667"
        loading="lazy"
        alt=""
      />
    </picture>
    <div class="artwork__inner artwork__inner--bottom">
      <p class="artwork__feature">
        Особенности творчества художника Бориса Кустодиева: любил жанр
        портрета-картины, когда характер героя раскрывается через окружающий его
        пейзаж, интерьер или даже служащую фоном жанровую сцену; не жалел для
        бытовых сцен декоративности и зрелищности; с большой симпатией писал
        жизнь провинции.
      </p>
      <p class="artwork__feature">
        Даже в самые беспросветные времена полотна Кустодиева лучились
        здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся под
        солнцем купола. Полыхающие арбузы и красавицы, не уступающие арбузам ни
        интенсивностью румянца, ни гладкой округлостью форм.
      </p>
    </div>

    <div class="artwork__bottom section__bottom">
      <Socials />
      <a class="artwork__button section__button" href="">
        <span>читать больше</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="15">
          <path
            fill="#202020"
            d="M120.7,7.3l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7H0v2h117.6l-4.7,4.7c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.4-6.4C121.1,8.3,121.1,7.7,120.7,7.3z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import Socials from '@/components/Socials'

export default {
  components: {
    Socials,
  },
}
</script>

<style scoped lang="scss">
.artwork {
  border-bottom: 1px solid $gray-light-border;

  &__top {
    justify-content: flex-start;
    border-bottom: 1px solid $gray-light-border;
    padding-bottom: 16px;
  }

  &__title {
    margin-right: 44px;
  }

  &__description {
    max-width: 490px;
    @include text(20px, 30px);
    color: $gray-light;
    margin-top: 0;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;

    &--top {
      padding: 40px 80px;
    }
  }

  &__feature {
    max-width: 440px;
    @include text(16px, 26px);
    color: $gray-dark;
    margin: 0;
  }

  &__bottom {
    justify-content: flex-start;
  }

  &__button {
    margin-left: 191px;
  }

  @media (max-width: $mobile-width) {
    img {
      width: 100%;
      height: auto;
    }

    &__description {
      max-width: none;
    }

    &__title {
      margin-right: 0;
    }

    &__inner {
      flex-direction: column;
      padding-bottom: 20px;

      &--top {
        // padding-left: 0;
        // padding-right: 0;
        margin: 0 -20px;
        padding: 40px 20px 20px;

        img {
          margin-top: 20px;
        }
      }
    }

    &__feature {
      margin-bottom: 20px;
      max-width: none;
    }

    &__button {
      margin-left: 0;
    }
  }
}
</style>
