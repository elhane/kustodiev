<template>
  <section id="biography" class="container biography section">
    <div class="biography__top section__top">
      <h2 class="biography__title section__title">биография</h2>
      <p class="biography__description">
        Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца,
        преподавателя духовной семинарии, не стало, когда мальчику было чуть
        больше года. Мать осталась вдовой в 25 лет и содержала четверых детей
      </p>
    </div>
    <div class="biography__facts-list">
      <div class="biography__fact">
        <span class="biography__fact-year">1887</span>
        <p class="biography__fact-text">
          Борис сначала учился в церковно-приходской школе, потом в гимназии.
          Когда ему было девять лет, в город привезли выставку
          художников-передвижников. Мальчика настолько впечатлила живопись, что
          он твердо решил научиться рисовать так же искусно. Мать нашла деньги,
          чтобы Борис смог брать уроки у известного в Астрахани художника Павла
          Власова.
        </p>
      </div>
      <div class="biography__fact">
        <span class="biography__fact-year">1896</span>
        <p class="biography__fact-text">
          Окончив семинарию, в 1896 году Кустодиев отправился учиться в Москву,
          но в художественную школу его не приняли: Борису уже исполнилось 18 и
          он был слишком взрослым. Тогда Кустодиев поехал в Петербург, где подал
          документы в Высшее художественное училище при Академии художеств.
        </p>
      </div>
      <div v-if="readMore">
        <div v-for="fact in facts" :key="fact.id" class="biography__fact">
          <span class="biography__fact-year">{{ fact.year }}</span>
          <p class="biography__fact-text">{{ fact.text }}</p>
        </div>
      </div>
    </div>
    <div class="biography__bottom section__bottom">
      <Socials />
      <button class="section__button" @click="readMore = !readMore">
        <span>{{ btnText }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="121" height="15">
          <path
            fill="#202020"
            d="M120.7,7.3l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7H0v2h117.6l-4.7,4.7c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.4-6.4C121.1,8.3,121.1,7.7,120.7,7.3z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import Socials from '@/components/Socials'

export default {
  components: {
    Socials,
  },
  data() {
    return {
      facts: {},
      readMore: false,
    }
  },
  computed: {
    btnText() {
      if (this.readMore) {
        return 'cкрыть'
      }

      return 'читать больше'
    },
  },
  mounted() {
    fetch('https://api.npoint.io/89f2d4712a74200e70b4')
      .then((response) => response.json())
      .then((json) => {
        this.facts = json
      })
  },
}
</script>

<style scoped lang="scss">
.biography {
  &__description,
  &__fact-text {
    max-width: 520px;
    margin: 0;
  }

  &__description,
  &__facts-list {
    @include text(16px, 26px);
  }

  &__facts-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: auto;
  }

  &__fact {
    display: flex;
    margin: 22px 0 0 0;
  }

  &__fact-year {
    @include text(20px, 40px, 700);
    color: $gray-light;
    margin-right: 30px;
    display: block;
  }

  @media (max-width: $mobile-width) {
    &__fact {
      flex-direction: column;
    }

    &__facts-list {
      align-items: flex-start;
    }

    &__description,
    &__fact-text {
      max-width: none;
    }
  }
}
</style>
