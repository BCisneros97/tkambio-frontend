<template>
  <nav class="navbar header-navbar pcoded-header" header-theme="theme1" pcoded-header-position="fixed">
    <div class="navbar-wrapper">
      <div class="navbar-logo">
        
        <router-link to="/">
          <img
            class="img-fluid"
            src="../assets/logo-tkambio.svg"
            width="170px"
            style="padding-left: 30px"
            alt="Theme-Logo"
          />
        </router-link>
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
