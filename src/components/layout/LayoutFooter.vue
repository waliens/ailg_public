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
    </div>
    <div class="content has-text-centered">
      <p>
        <i class="far fa-copyright"></i>AILg {{copyrightDates}}. Made with <a href="https://vuejs.org/">Vue</a>, <a href="https://bulma.io/">Bulma</a> and <a href="https://buefy.org/">Buefy</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import moment from 'moment';

export default {
  name: "LayoutFooter",
  components: {},
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