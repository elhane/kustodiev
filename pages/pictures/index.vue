<template>
  <div>
    <CatalogPageFirstScreen />
    <Catalog />
  </div>
</template>

<script>
import CatalogPageFirstScreen from '@/components/CatalogPageFirstScreen'
import Catalog from '@/components/Catalog'

export default {
  components: {
    CatalogPageFirstScreen,
    Catalog,
  },
  // layout: 'default',
}
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
  overflow: hidden;
}
</style>
