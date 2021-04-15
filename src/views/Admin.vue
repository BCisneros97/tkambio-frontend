<template>
  <div id="pcoded" class="pcoded">
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
      <app-header></app-header>

      <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
          <nav class="pcoded-navbar">
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
                    <span id="more-details"
                      >John Doe<i class="fa fa-caret-down"></i
                    ></span>
                  </div>
                </div>
                <div class="main-menu-content">
                  <ul>
                    <li class="more-details">
                      <a href="auth-normal-sign-in.html"
                        ><i class="ti-layout-sidebar-left"></i>Cerrar sesión</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <ul class="pcoded-item pcoded-left-item">
                <li class="">
                  <router-link to="/" class="waves-effect waves-dark">
                    <span class="pcoded-micon"
                      ><i class="ti-home"></i><b>D</b></span
                    >
                    <span class="pcoded-mtext">Inicio</span>
                    <span class="pcoded-mcaret"></span>
                  </router-link>
                </li>
                <li class="">
                  <router-link
                    to="/tipo-cambio"
                    class="waves-effect waves-dark"
                  >
                    <span class="pcoded-micon"
                      ><i class="ti-bar-chart-alt"></i><b>C</b></span
                    >
                    <span class="pcoded-mtext">Tipo de Cambio</span>
                    <span class="pcoded-mcaret"></span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>

          <router-view />

          <div id="styleSelector"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Admin",
  components: {
    'app-header': Header,
  }
};
</script>