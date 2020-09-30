import VueRouter from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: require('./pages/HomePage.vue').default
  },
  {
    name: 'engineer',
    path: '/engineer',
    component: require('./pages/EngineerPage.vue').default
  },
  {
    name: 'company',
    path: '/company',
    component: require('./pages/CompanyPage.vue').default
  },
  {
    name: 'student',
    path: '/student',
    component: require('./pages/StudentPage.vue').default
  },
  {
    name: 'mission',
    path: '/mission',
    component: require('./pages/MissionVisionPage').default
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

export default router
