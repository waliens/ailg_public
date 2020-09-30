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
            <div class="media-content">
              <h4 class="subtitle">{{$t('home.presidentword.title')}}</h4>
              <p class="content">
                Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus. Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus. Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. Praesent vestibu lum molestie lacus. Aenean nonummy hendrerit maurishasellus
              </p>
            </div>
          </article>
        </div>
        <div class="column">
          <h4 class="subtitle">Prochains événements</h4>
          <event-list :events="events"></event-list>
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
import BeneficiaryCard from '@/components/home/BeneficiaryCard'
import PartnersGrid from '@/components/home/PartnersGrid'
import FadedHero from '@/components/layout/FadedHero'
import EventList from '@/components/home/EventList'
import Event from '@/utils/api/Event'

export default {
  name: 'HomePage',
  components: { EventList, BeneficiaryCard, PartnersGrid, FadedHero },
  computed: {
    async events () {
      return (await (new Event()).getFutureEvents()).map(e => { return {name: e.title, datetime: e.start} })
    }
  }
}
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

.presidentword, .presidentword .subtitle {
  background-color: $primary;
  color: $primary-invert;
}

.presidentword .media-content {
  min-height: 180px; /* for image not to overflow */
}

</style>
