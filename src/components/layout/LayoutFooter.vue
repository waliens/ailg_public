<template>
  <footer class="footer">
    <div class="columns">
      <div class="column">
        <h3 class="subtitle">{{$t("footer.contact")}}</h3>
        <p>
          AILg, {{$t('contact.university')}}<br/>
          {{$t('contact.building')}} B37, {{$t('contact.institute')}}<br/>
          Quartier Polytech, 1<br/>
          Allée de la découverte, 12<br/>
          4000 Liège, {{$t('contact.belgium')}}
        </p><br>
        <p>
          <em>{{$t('contact.phone')}}</em>: +324/366.94.52<br/>
          <em>{{$t('contact.fax')}}</em>: +324/242.77.96<br/>
        </p>
      </div>
      <div class="column">
        <h3 class="subtitle">{{$t("footer.usefullinks")}}</h3>
        <ul>
          <li>
            <p>
              <i class="fab fa-facebook-square"></i>
              <a href="https://www.facebook.com/AILg-Association-des-Ing%C3%A9nieurs-dipl%C3%B4m%C3%A9s-de-lULg-501489223196928/">Facebook</a></p>
          </li>
          <li>
            <p>
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/company/ailg/">LinkedIn</a>
            </p>
          </li>
          <li>
            <p>
              <i class="fab fa-twitter-square"></i>
              <a href="https://twitter.com/ailg_ulg">Twitter</a>
            </p>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3 class="subtitle">{{$t("footer.sponsors")}}</h3>
        <b-carousel icon-pack="fas" :indicator="false">
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <a :href="carousel.href">
              <figure class="image is-128x128">
                <img class="sponsor_logo_image" :src="carousel.image"/>
              </figure>
            </a>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
    <div class="content has-text-centered">
      <p>
        <i class="far fa-copyright"></i>AILg {{copyrightDates}}. Made with <a href="https://vuejs.org/">Vue</a>, <a href="https://bulma.io/">Bulma</a> and <a href="https://buefy.org/">Buefy</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import BCarousel from "buefy/src/components/carousel/Carousel";
import BCarouselItem from "buefy/src/components/carousel/CarouselItem";
import moment from 'moment';

export default {
  name: "LayoutFooter",
  components: {BCarouselItem, BCarousel},
  data() {
    return {
      // TODO fetch this from somewhere
      carousels: [
        {"src": "https://www.fnherstal.com/", "image": "http://www.ailg.be/uploads/images/FN2015_HORIZONTAL_PANTONE.JPG"},
        {"src": "https://www.intradel.be/", "image": "http://www.ailg.be/uploads/images/INTRADEL.JPG"},
        {"src": "https://www.libertyliegedudelange.be/", "image": "http://www.ailg.be/uploads/images/Liberty_2019_Landscape_RGB_Blue (002).jpg"},
        {"src": "http://www.belemaire.be/", "image": "http://www.ailg.be/uploads/images/LOGO BEL TEXTE FOND BLANC.JPG"},
        {"src": "http://www.ailg.be/uploads/images/logo%20ISSeP.jpg", "image": "http://www.ailg.be/uploads/images/logo ISSeP.jpg"},
        {"src": "http://www.sodraep.be/", "image": "http://www.ailg.be/uploads/images/Logo Sodraep (002).jpg"},
        {"src": "http://www.traitex.be/", "image": "http://www.ailg.be/uploads/images/LogoTraitex-01 (002).jpg"},
        {"src": "https://www.cometgroup.be/", "image": "http://www.ailg.be/uploads/images/Logo_comet_traitements_CMYK (002).jpg"},
        {"src": "https://www.safran-group.com/fr", "image": "http://www.ailg.be/uploads/images/LOGO_SAFRAN_rvb (002).jpg"},
        {"src": "https://www.plm.automation.siemens.com/global/en/", "image": "http://www.ailg.be/uploads/images/SIEMENS Logo.jpg"},
        {"src": "https://www.sonaca.com/", "image": "http://www.ailg.be/uploads/images/Sonaca_Logotype_RGB_(+).jpg"}
      ]
    }
  },
  computed: {
    copyrightDates() {
      let current = moment().year();
      if (current > 2020) {
        return '2020-' + current;
      } else {
        return '2020'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/colors.scss";

.footer {
  background-color: $grey-lightest;
}

.sponsor_logo_image {
  max-height: 128px;
  max-width: 128px;
}

figure {
  align-items: center;
  display: flex;
  margin: auto;
}

i {
  margin-right: 5px;
}
</style>