<template>
  <div>
    <faded-hero
        background_image="banner.png"
        top_color="#0A0A0A"
        :title="$t('engineer.advantages')"
        :subtitle="$t('company.as_a_company')">
    </faded-hero>
  </div>
</template>

<script>
import FadedHero from '@/components/layout/FadedHero'
export default {
  name: 'CompanyPage',
  components: { FadedHero }
}
</script>

<style scoped>

</style>
