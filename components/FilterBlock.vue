<template>
  <div>
    <button class="filters__btn" @click="blockHidden = !blockHidden">
      <span>{{ data.title }}</span>
      <span class="filters__btn-sign">{{ blockHidden ? '+' : '&#8211;' }}</span>
    </button>
    <div v-if="!blockHidden" class="filters__wrapper">
      <input
        v-if="data.inputSearchShown"
        class="filters__search-input"
        type="text"
        placeholder="Быстрый поиск"
        @input="$emit('inputSearchChange', data, $event.target.value)"
      />
      <div
        v-for="(item, index) in foldedItems"
        :key="index"
        class="filters__field"
      >
        <input
          :id="item.value"
          v-model="item.isChecked"
          class="filters__checkbox"
          :data="data"
          :value="item.value"
          type="checkbox"
          @input="$emit('inputChange', item, data)"
        />
        <label class="filters__label" :for="item.value">
          {{ item.name }}
          <span v-if="item.hasOwnProperty('workAmount')">
            {{ item.workAmount }}
          </span>
        </label>
      </div>
    </div>
    <div v-if="isTooManyItems && !blockHidden">
      <button
        class="filters__btn filters__btn--fold"
        @click="itemsFolded = !itemsFolded"
      >
        <span class="filters__btn-sign filters__btn-sign--fold">
          {{ itemsFolded ? '+' : '&#8211;' }}
        </span>
        <span class="filters__btn-fold-text">
          {{ itemsFolded ? 'Все ' + data.unfoldBtn : 'Свернуть' }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      blockHidden: false,
      itemsFolded: true,
    }
  },
  computed: {
    isTooManyItems() {
      return this.data.types.length > 7
    },
    foldedItems() {
      return this.itemsFolded
        ? this.data.types.slice(0, 7)
        : this.data.types.slice(0, this.data.types.length)
    },
  },
}
</script>
