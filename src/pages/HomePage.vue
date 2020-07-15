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

    <section class="section presidentandevents">
      <div class="columns">
        <div class="column presidentword">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img src="@/assets/images/raymondpropson.jpg" />
              </p>
            </figure>
            <div class="media-content">
              <p class="content">
                <strong>{{$t('home.presidentword.title')}}</strong> <br/>
                Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus. Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus. Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus
              </p>
            </div>
          </article>
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

.partners title {
  margin-bottom: 10px;
}

.presidentandevents {
  padding: 0;
}

.presidentandevents .columns {
  margin: 0;
}

.presidentword, .presidentword strong {
  background-color: $primary;
  color: $primary-invert;
}

.presidentword .media-content {
  min-height: 180px; /* for image not to overflow */
}

</style>
