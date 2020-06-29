import VueRouter from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: require('./pages/HomePage.vue').default,
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
});

export default router;
