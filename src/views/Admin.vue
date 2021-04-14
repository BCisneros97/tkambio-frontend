<template>
  <div id="pcoded" class="pcoded">
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
      <nav class="navbar header-navbar pcoded-header">
        <div class="navbar-wrapper">
          <div class="navbar-logo">
            <a
              class="mobile-menu waves-effect waves-light"
              id="mobile-collapse"
              href="#!"
            >
              <i class="ti-menu"></i>
            </a>
            <div class="mobile-search waves-effect waves-light">
              <div class="header-search">
                <div class="main-search morphsearch-search">
                  <div class="input-group">
                    <span class="input-group-prepend search-close"
                      ><i class="ti-close input-group-text"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Keyword"
                    />
                    <span class="input-group-append search-btn"
                      ><i class="ti-search input-group-text"></i
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <a href="index.html">
              <img
                class="img-fluid"
                src="../assets/logo-tkambio.svg"
                width="170px"
                style="padding-left: 30px"
                alt="Theme-Logo"
              />
            </a>
            <a class="mobile-options waves-effect waves-light">
              <i class="ti-more"></i>
            </a>
          </div>
          <div class="navbar-container container-fluid">
            <ul class="nav-left">
              <li>
                <div class="sidebar_toggle">
                  <a href="javascript:void(0)"><i class="ti-menu"></i></a>
                </div>
              </li>
            </ul>
            <ul class="nav-right">
              <li class="user-profile header-notification">
                <a href="#!" class="waves-effect waves-light">
                  <img
                    src="../assets/avatar-4.jpg"
                    class="img-radius"
                    alt="User-Profile-Image"
                  />
                  <span>John Doe</span>
                  <i class="ti-angle-down"></i>
                </a>
                <ul class="show-notification profile-notification">
                  <li class="waves-effect waves-light">
                    <a href="auth-normal-sign-in.html">
                      <i class="ti-layout-sidebar-left"></i> Cerrar sesión
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
export default {
  name: 'Admin'
}
</script>