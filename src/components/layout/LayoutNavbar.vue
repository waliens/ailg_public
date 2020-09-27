<template>
  <b-navbar type="is-black">
    <template slot="brand" :fixed-top="true">
      <b-navbar-item tag="router-link" :to="{ path: '/'}">
        <img class="ailg_logo" src="@/assets/images/logo_ailg.png" height="150px">
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-dropdown :label="$t('navbar.about')" class="first-navbar-item">
        <b-navbar-item tag="router-link" :to="{ path: '/mission' }">
          {{$t("navbar.vision")}}
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/history' }">
          {{$t("navbar.history")}}
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-item tag="router-link" :to="{ path: '/engineer' }">
        {{$t("navbar.engineer")}}
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/company' }">
        {{$t("navbar.company")}}
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/student' }">
        {{$t("navbar.student")}}
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/blog' }">
        {{$t("navbar.blog")}}
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
        {{$t("navbar.contact")}}
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>{{$t("navbar.login")}}</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "LayoutNavbar"
}
</script>

<style scoped lang="scss">
@import "@/assets/colors.scss";
/* TODO make it a float*/
.ailg_logo {
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 15px;
  margin-left: 25px;
  max-height: initial;
  max-width: initial;
  height: 70px;
}

.first-navbar-item {
  margin-left: 70px;
}
</style>