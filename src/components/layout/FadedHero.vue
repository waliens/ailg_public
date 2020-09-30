<template>
  <section class="hero has-background is-medium" :style="backgroundImageStyle">
    <div class="hero-body" :style="backgroundFadeStyle">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FadedHero',
  props: {
    background_image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    top_color: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundImageStyle () {
      return "background: url('" + require(`@/assets/images/${this.background_image}`) + " ') center; background-size: cover;"
    },
    backgroundFadeStyle () {
      return 'background: linear-gradient(' + this.top_color + ' 0%, rgba(0, 0, 0, 0.25) 15%)'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.hero-body .title, .hero-body .subtitle {
  color: $dark-secondary-invert;
}

.section .title {
  color: $dark-secondary;
}

.hero {
  background: url('~@/assets/images/banner.png') center;
  background-size: cover;
}
</style>
