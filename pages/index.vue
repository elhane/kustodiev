<template>
  <div>
    <MainPageFirstScreen />
    <Biography />
    <Gallery />
    <Artwork />
    <Museums />
  </div>
</template>

<script>
import MainPageFirstScreen from '@/components/MainPageFirstScreen'
import Biography from '@/components/Biography'
import Gallery from '@/components/Gallery'
import Artwork from '@/components/Artwork'
import Museums from '@/components/Museums'

export default {
  components: {
    MainPageFirstScreen,
    Biography,
    Gallery,
    Artwork,
    Museums,
  },
  layout: 'default',
}
</script>
