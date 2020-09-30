<template>
  <router-link :to="{ path }" class="card">
    <div class="card-content">
      <h2 class="title">{{title}}</h2>
      <p class="content">{{description}}</p>
    </div>
    <div class="card-footer">
      <a class="card-footer-item"><p>{{$t("knowmore")}}</p><i class="fas fa-arrow-right"></i></a>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BeneficiaryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/colors.scss";

p.content, h2.title, a {
  color: $secondary-invert;
}

.card, .card-footer, .card-content {
  background-color: $secondary;
}

.card-footer p {
  margin-right: 10px;
}

</style>
