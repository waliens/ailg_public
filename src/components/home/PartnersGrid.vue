<template>
  <div class="columns is-multiline">
    <div class="column is-narrow" v-for="partner in partners" v-bind:key="partner.name">
      <b-tooltip :label="partner.name">
        <a :href="partner.href">
          <figure class="image is-128x128">
           <img class="logo is-centered" :src="partner.image" />
          </figure>
        </a>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import BTooltip from 'buefy/src/components/tooltip/Tooltip'
export default {
  name: 'PartnersGrid',
  components: { BTooltip },
  data () {
    return {
      // TODO fetch this from somewhere
      partners: [
        { name: 'FN Herstal', href: 'https://www.fnherstal.com/', image: 'http://www.ailg.be/uploads/images/FN2015_HORIZONTAL_PANTONE.JPG' },
        { name: 'Intradel', href: 'https://www.intradel.be/', image: 'http://www.ailg.be/uploads/images/INTRADEL.JPG' },
        { name: 'Liberty', href: 'https://www.libertyliegedudelange.be/', image: 'http://www.ailg.be/uploads/images/Liberty_2019_Landscape_RGB_Blue (002).jpg' },
        { name: 'BEL', href: 'http://www.belemaire.be/', image: 'http://www.ailg.be/uploads/images/LOGO BEL TEXTE FOND BLANC.JPG' },
        { name: 'ISSeP', href: 'http://www.ailg.be/uploads/images/logo%20ISSeP.jpg', image: 'http://www.ailg.be/uploads/images/logo ISSeP.jpg' },
        { name: 'Sodraep', href: 'http://www.sodraep.be/', image: 'http://www.ailg.be/uploads/images/Logo Sodraep (002).jpg' },
        { name: 'Traitex', href: 'http://www.traitex.be/', image: 'http://www.ailg.be/uploads/images/LogoTraitex-01 (002).jpg' },
        { name: 'Comet Group', href: 'https://www.cometgroup.be/', image: 'http://www.ailg.be/uploads/images/Logo_comet_traitements_CMYK (002).jpg' },
        { name: 'Safran Group', href: 'https://www.safran-group.com/fr', image: 'http://www.ailg.be/uploads/images/LOGO_SAFRAN_rvb (002).jpg' },
        { name: 'Siemens', href: 'https://www.plm.automation.siemens.com/global/en/', image: 'http://www.ailg.be/uploads/images/SIEMENS Logo.jpg' },
        { name: 'Sonaca', href: 'https://www.sonaca.com/', image: 'http://www.ailg.be/uploads/images/Sonaca_Logotype_RGB_(+).jpg' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  margin-top: auto;
  margin-bottom: auto;
}

.image {
  display: flex;
  align-items: center;
}

</style>
