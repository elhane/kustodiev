<template>
  <section id="museums" class="museums">
    <h2 class="museums__title section__title">музеи</h2>
    <div class="museums__map-wrapper">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A92906c2f81c15e567e29dba4a39b4f22d402036a8f804a78dbcfba8a7a33ce3a&amp;source=constructor"
        width="100%"
        height="514"
        frameborder="0"
      ></iframe>
    </div>

    <div class="container">
      <ul class="museums__list">
        <li
          v-for="museum in museums"
          :key="museum.id"
          class="museums__list-item"
        >
          <div class="museums__list-item-top">
            <span>
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.9997 0C5.346 0 2.3732 2.9728 2.3732 6.6269c0 .953.195 1.8631.5795 2.705 1.6568 3.6255 4.8334 7.4532 5.7677 8.5399a.369.369 0 00.559 0c.9339-1.0865 4.1104-4.9141 5.7678-8.54.3846-.8418.5795-1.7518.5795-2.705C15.6264 2.9729 12.6535 0 8.9997 0zm0 10.0689c-1.898 0-3.4422-1.5443-3.4422-3.4422 0-1.8981 1.5442-3.4424 3.4422-3.4424 1.8979 0 3.4422 1.5443 3.4422 3.4424.0002 1.898-1.5441 3.4422-3.4422 3.4422z"
                  fill="#202020"
                />
              </svg>
            </span>
            <h3>{{ museum.name }}</h3>
          </div>
          <p>{{ museum.addres }}</p>
          <a :href="museum.phoneLink">{{ museum.phone }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      museums: [
        {
          id: 1,
          name: 'Русский музей',
          addres: '191186, Санкт-Петербург, Инженерная ул, 4',
          phone: '+7 (812) 595-42-40',
          phoneLink: 'tel:+78125954240',
        },
        {
          id: 2,
          name: 'Третьяковская галерея',
          addres: '119017, Москва, Лаврушинский переулок,10',
          phone: '+7 (495) 957-07-27',
          phoneLink: 'tel:+74959570727',
        },
        {
          id: 3,
          name: 'Мультимедиа Арт Музей',
          addres: '105064, Москва, Гороховский переулок, 7',
          phone: '+7 (495) 632–16–81',
          phoneLink: 'tel:+74956321681',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.museums {
  padding-bottom: 57px;

  &__title {
    text-align: center;
    margin: 40px auto;
  }

  &__map-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__list {
    @include list-reset;
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
  }

  &__list-item-top {
    display: flex;
  }

  &__list-item {
    width: 30.3%;
    padding-bottom: 45px;

    @media (min-width: $desktop-width) {
      &:not(:nth-child(3n - 2)) {
        border-left: 1px solid $gray-light-border;
        padding-left: 41px;
        margin-right: 41px;
      }
    }

    span {
      margin-right: 10px;
      margin-top: 4px;
    }

    h3 {
      @include text(16px, 26px, 700);
      color: $dark;
      margin-top: 0;
      margin-bottom: 7px;
    }

    p {
      @include text(14px, 24px);
      color: $gray-light;
      max-width: 195px;
      margin-bottom: 2px;
    }

    a {
      @include text(14px, 24px);
      color: $gray-light;
    }
  }

  @media (max-width: $mobile-width) {
    &__list {
      padding: 0;
      margin-left: -20px;
      margin-right: -20px;
      flex-direction: column;
    }

    &__list-item {
      width: 100%;
      padding: 40px 20px;
      border-bottom: 1px solid $gray-light-border;
    }
  }
}
</style>
