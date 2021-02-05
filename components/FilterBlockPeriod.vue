<template>
  <div>
    <button class="filters__btn" @click="blockHidden = !blockHidden">
      <span>{{ data.title }}</span>
      <span class="filters__btn-sign">{{ blockHidden ? '+' : '&#8211;' }}</span>
    </button>
    <div v-if="!blockHidden" class="filters__wrapper">
      <input
        class="filters__search-input filters__search-input--periods"
        type="number"
        placeholder="c "
        @input="$emit('fromYearInputChange', $event.target.value)"
      />
      <input
        class="filters__search-input filters__search-input--periods"
        type="number"
        placeholder="по"
        @input="$emit('toYearInputChange', $event.target.value)"
      />
      <div
        v-for="(item, index) in data.range"
        :key="index"
        class="filters__field"
      >
        <input
          :id="item.id"
          v-model="item.isChecked"
          :data="data"
          :value="item.id"
          type="checkbox"
          class="filters__checkbox"
          @input="$emit('inputChange', item, data)"
        />
        <label class="filters__label" :for="item.id">
          {{ item.name }}
        </label>
      </div>
    </div>
    <!-- <p>выбрано - {{ data.selectedTypes }}</p> -->
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
    }
  },
}
</script>
