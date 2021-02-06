<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li
        v-for="page in pagesAmount"
        :id="page"
        :key="page"
        :class="{ 'pagination__item--active': currentPage === page }"
        class="pagination__item"
        @click="$emit('paginationChange', $event.target.id)"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    currentPage: {
      type: Number,
      default() {
        return 0
      },
    },
    perPage: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  computed: {
    pagesAmount() {
      return Math.ceil(this.data.length / this.perPage) === 1
        ? null
        : Math.ceil(this.data.length / this.perPage)
    },
  },
}
</script>

<style lang="scss">
.pagination {
  margin: auto auto 0;

  &__list {
    @include list-reset();
    @include text(18px, 20px);
    display: flex;
    color: $gray-light;
  }

  &__item {
    padding: 0 8px;
    cursor: pointer;

    &--active {
      color: $dark;
    }

    &:hover {
      color: $hover;
    }

    &:active {
      opacity: 0.6;
    }
  }
}
</style>
