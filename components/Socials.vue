<template>
  <div>
    <YandexShare
      class="social-black"
      data-curtain
      data-size="l"
      data-color-scheme="whiteblack"
      :services="['vkontakte', 'twitter', 'facebook']"
    />
  </div>
</template>

<script>
import YandexShare from '@cookieseater/vue-yandex-share'

export default {
  components: {
    YandexShare,
  },
}
</script>
