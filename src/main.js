import Vue from 'vue'
import App from './App.vue'
import './assets/style.scss'

import i18n from './i18n'

import VueRouter from 'vue-router'

import moment from 'moment'

import router from './router'

import store from './store'

import Buefy from 'buefy'

import axios from 'axios'
moment.locale(window.navigator.userLanguage || window.navigator.language || 'fr')
// moment.tz.setDefault(moment.tz.guess());
Vue.use(require('vue-moment'), { moment })
Vue.use(VueRouter)
Vue.use(Buefy, { defaultIconPack: 'fas' })
axios.defaults.baseURL = 'https://ailg.claroline.com/apiv2/'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')
