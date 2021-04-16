<template>
  <nav class="pcoded-navbar" navbar-theme="themelight1" active-item-theme="theme1" pcoded-navbar-position="fixed" sub-item-theme="theme2" active-item-style="style0">
    <div class="sidebar_toggle">
      <a href="#"><i class="icon-close icons"></i></a>
    </div>
    <div class="pcoded-inner-navbar main-menu">
      <div class="">
        <div class="main-menu-header">
          <img
            class="img-80 img-radius"
            src="../assets/avatar-4.jpg"
            alt="User-Profile-Image"
          />
          <div class="user-details">
            <span id="more-details">{{ currentUser.name }} ({{ currentUser.rol }})</span>
          </div>
        </div>
      </div>
      <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="none" subitem-border="true">
        <router-link tag="li" class="" to="/" :exact="true">
          <a class="waves-effect waves-dark">
            <span class="pcoded-micon"><i class="ti-home"></i><b>D</b></span>
            <span class="pcoded-mtext">Inicio</span>
            <span class="pcoded-mcaret"></span>
          </a>
        </router-link>
        <router-link tag="li" class="" to="/tipo-cambio">
          <a class="waves-effect waves-dark">
            <span class="pcoded-micon"
              ><i class="ti-bar-chart-alt"></i><b>C</b></span
            >
            <span class="pcoded-mtext">Tipo de Cambio</span>
            <span class="pcoded-mcaret"></span>
          </a>
        </router-link>
        <li class="">
          <a href="#" class="waves-effect waves-dark" @click.prevent="logout">
            <span class="pcoded-micon"
              ><i class="ti-layout-sidebar-left"></i><b>E</b></span
            >
            <span class="pcoded-mtext">Cerrar sesión</span>
            <span class="pcoded-mcaret"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    currentUser() {
      const authUser = this.$store.state.auth.user
      return authUser ? authUser.user : {};
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>