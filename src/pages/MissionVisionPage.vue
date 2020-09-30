<template>
<div>
  <faded-hero
      background_image="banner.png"
      top_color="#0A0A0A"
      :title="$t('missionvision.title')"
      subtitle="">
  </faded-hero>
</div>
</template>

<script>
import FadedHero from '@/components/layout/FadedHero'
export default {
  name: 'MissionVisionPage',
  components: { FadedHero }
}
</script>

<style scoped>

</style>
