<template>
  <div>
    <section class="hero has-background is-medium">
      <!--<img alt="hero" class="hero-background is-transparent" src="@/assets/images/banner.png" />-->
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$t("ailg.full")}}
          </h1>
          <h2 class="subtitle">
            Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">{{$t("home.presidentword.title")}}</p>
            </header>
            <div class="card-content">
              <p class="content">Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus</p>
            </div>
          </div>
        </div>
        <div class="column">
          <p>Prochains événements</p>
          <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus</p>
        </div>
      </div>
    </section>

    <section class="section beneficiaries">
      <div class="columns">
        <div class="column">
          <beneficiary-card
              :title="$t('navbar.engineer')"
              :description="$t('home.beneficiary.engineer.description')"
              :path="'/engineer'">
          </beneficiary-card>
        </div>
        <div class="column">
          <beneficiary-card
              :title="$t('navbar.company')"
              :description="$t('home.beneficiary.company.description')"
              :path="'/company'">
          </beneficiary-card>
        </div>
        <div class="column">
          <beneficiary-card
              :title="$t('navbar.student')"
              :description="$t('home.beneficiary.student.description')"
              :path="'/student'">
          </beneficiary-card>
        </div>
      </div>
    </section>

    <section class="section partners">
      <h2 class="title">{{$t('home.partners.ours')}}</h2>
      <partners-grid></partners-grid>
    </section>

  </div>
</template>

<script>
import BeneficiaryCard from "@/components/home/BeneficiaryCard";
import PartnersGrid from "@/components/home/PartnersGrid";

export default {
  name: 'HomePage',
  components: { BeneficiaryCard, PartnersGrid }
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

/*.hero.has-background {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}

.hero-background.is-transparent {
  opacity: 0.75;
}*/

.beneficiaries {
  background-color: $grey-lighter;
}

.hero-body .title, .hero-body .subtitle {
  color: $dark-secondary-invert;
}

.section .title {
  color: $dark-secondary;
}

.hero {
  background-color: $dark-secondary;
}

</style>
