<template>
  <div>
    <faded-hero
        background_image="banner.png"
        top_color="#0A0A0A"
        :title="$t('engineer.advantages')"
        :subtitle="$t('student.as_a_student')">
    </faded-hero>
  </div>
</template>

<script>
import FadedHero from '@/components/layout/FadedHero'
export default {
  name: 'StudentPage',
  components: { FadedHero }
}
</script>

<style scoped>

</style>
