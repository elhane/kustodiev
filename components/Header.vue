<template>
  <header class="header">
    <div class="header__nav">
      <div class="header__search-wrapper">
        <form>
          <transition name="fade">
            <input v-show="isHidden" id="search" type="search" name="search" />
          </transition>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
            width="18"
            height="18"
            @click="isHidden = !isHidden"
          >
            <path
              fill="#f5f5f5"
              d="M14.7,13.7l-4.3-4.3c0.8-1,1.2-2.2,1.2-3.6C11.7,2.6,9.1,0,5.9,0C2.7,0,0.1,2.6,0.1,5.8c0,3.2,2.6,5.8,5.8,5.8c1.3,0,2.5-0.4,3.5-1.2l4.3,4.3c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C15,14.4,15,14,14.7,13.7z M1.6,5.8c0-2.4,1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3s-1.9,4.3-4.3,4.3S1.6,8.2,1.6,5.8z"
            />
          </svg>
        </form>
      </div>
      <MenuHeader />
    </div>
  </header>
</template>

<script>
import MenuHeader from '@/components/MenuHeader'

export default {
  components: {
    MenuHeader,
  },
  data() {
    return {
      isHidden: false,
    }
  },
}
</script>

<style scoped lang="scss">
.header {
  color: $light;
  width: 100%;
  padding: 38px 100px 0 40px;

  &__search-wrapper {
    position: relative;
    height: 30px;
    min-width: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
      height: 30px;
      width: 170px;
      padding-right: 30px;
      color: $light;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid $light;
      outline: none;
    }

    svg {
      position: relative;
      z-index: 50;
      left: -30px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: $mobile-width) {
    padding: 0;

    &__nav {
      min-height: 84px;
      padding: 0 30px 0 17px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  transform: scaleX(0);
}

.fade-enter-to {
  transform: scaleX(1);
}
</style>
