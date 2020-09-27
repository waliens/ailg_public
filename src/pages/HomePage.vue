<template>
  <div>
    <faded-hero
      background_image="banner.png"
      top_color="#0A0A0A"
      :title="$t('ailg.full')"
      subtitle="Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus">
    </faded-hero>


    <section class="section presidentandevents">
      <div class="columns">
        <div class="column presidentword">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">

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
import FadedHero from "@/components/layout/FadedHero";

export default {
  name: 'HomePage',
  components: { BeneficiaryCard, PartnersGrid, FadedHero }
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.beneficiaries {
  background-color: $grey-lighter;
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
