<template>
  <div>
    <faded-hero
        background_image="banner.png"
        top_color="#0A0A0A"
        :title="$t('engineer.advantages')"
        :subtitle="$t('engineer.as_an_engineer')">
    </faded-hero>
  </div>
</template>

<script>
import FadedHero from "@/components/layout/FadedHero";
export default {
  name: "EngineerPage",
  components: {FadedHero}
}
</script>

<style scoped>

</style>