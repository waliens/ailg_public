<template>
  <div id="app" class="page-container">
    <layout-navbar></layout-navbar>

    <div class="app-content">
      <router-view v-if="initialized"></router-view>
    </div>

    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutNavbar from './components/layout/LayoutNavbar'
import LayoutFooter from './components/layout/LayoutFooter'
export default {
  name: 'ailg',
  components: {
    LayoutNavbar,
    LayoutFooter
  },
  computed: {
    initialized () {
      return this.$store.state.initialized
    }
  },
  created () {
    this.$store.dispatch('initializeStore')
  }
}
</script>

<style>
.page-container {
  position: relative;
  min-height: 100vh;
}
</style>
