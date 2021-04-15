<template>
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
</template>

<script>
export default {
  name: "Header"
};
</script>
