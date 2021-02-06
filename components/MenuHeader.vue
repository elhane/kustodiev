<template>
  <nav class="nav">
    <div class="nav__toggle menu-toggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul class="nav__menu menu">
        <li class="menu__item">
          <nuxt-link class="menu__link" to="/#biography">биография</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link class="menu__link" to="/#artwork">творчество</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link class="menu__link" to="/pictures">картины</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link class="menu__link" to="/#museums">музеи</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__toggle {
    input {
      display: none;
    }
  }
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @include list-reset;
  width: 306px;

  &__item {
    margin-bottom: 15px;
  }

  &__link {
    display: block;
    font-family: $helvetica;
    @include text(14px, 16px, 400);
    text-decoration: none;
    color: $light;

    &:hover {
      color: $hover;
      box-shadow: 0 1px 0 0 $hover;
    }

    &:focus {
      outline: dashed 2px rgba(255, 166, 0, 0.5);
      outline-offset: 5px;
    }

    &:active {
      opacity: 0.7;
    }
  }
}

@media (max-width: $mobile-width) {
  .menu {
    position: absolute;
    right: -31px;
    top: -32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 200px;
    height: 100vh;
    padding: 80px 30px;
    background: #ededed;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    &__item {
      margin-bottom: 25px;
    }

    &__link {
      color: $dark;
      @include text(22px, 24px);
    }
  }

  .menu-toggle {
    display: block;
    position: relative;
    z-index: 1;
    top: 0;
    right: 0;

    input {
      position: absolute;
      z-index: 2;
      top: -7px;
      left: -5px;
      display: block;
      width: 30px;
      height: 30px;
      opacity: 0;
      cursor: pointer;
    }

    span {
      position: relative;
      z-index: 1;
      display: block;
      width: 24px;
      height: 2px;
      margin-bottom: 5px;
      border: 1px solid $light;
      background: $light;
      border-radius: 2px;
      transform-origin: 8px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    input:checked ~ span:nth-last-child(2) {
      opacity: 0;
    }

    input:checked ~ span:nth-last-child(3) {
      background-color: $dark;
      border-color: $dark;
      transform: rotate(-45deg) translate(0, -1px);
    }

    input:checked ~ span:nth-last-child(4) {
      background-color: $dark;
      border-color: $dark;
      transform: rotate(45deg) translate(1px, -1px);
    }
    input:checked ~ ul {
      transform: none;
    }
  }
}
</style>
