<template>
  <div id="pcoded" class="pcoded" fream-type="theme1" vertical-nav-type="expanded" theme-layout="vertical" nav-type="st2" vertical-placement="left" vertical-effect="shrink">
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
      <app-header></app-header>
      <div class="pcoded-main-container" style="margin-top: 56px;">
        <div class="pcoded-wrapper">
          <app-nav></app-nav>

          <router-view />

          <div id="styleSelector"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/layout/Header.vue";
import Nav from "@/views/layout/Nav.vue";

export default {
  name: "AdminLayout",
  components: {
    "app-header": Header,
    "app-nav": Nav
  },
  mounted() {
    if (this.$store.state.auth.status.loggedIn) {
      window.reload_js('pcodedJs');
      setTimeout(() => window.reload_js('themeJs'), 100);
    }
  }
};
</script>