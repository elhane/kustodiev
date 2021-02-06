<template>
  <nav class="nav">
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
    flex-direction: column;
  }
}
</style>
