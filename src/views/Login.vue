<template>
  <section class="login-block">
    <!-- Container-fluid starts -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <!-- Authentication card start -->

          <form class="md-float-material form-material">
            <div class="text-center">
              <img src="../assets/logo-tkambio.svg" />
            </div>
            <div class="auth-box card">
              <div class="card-block">
                <div class="row m-b-20">
                  <div class="col-md-12">
                    <h3 class="text-center">Iniciar sesión</h3>
                  </div>
                </div>
                <div class="form-group form-primary">
                  <input type="text" name="email" class="form-control" />
                  <span class="form-bar"></span>
                  <label class="float-label">Usuario o email</label>
                </div>
                <div class="form-group form-primary">
                  <input type="password" name="password" class="form-control" />
                  <span class="form-bar"></span>
                  <label class="float-label">Contraseña</label>
                </div>
                <div class="row m-t-30">
                  <div class="col-md-12">
                    <button
                      type="button"
                      class="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <!-- end of form -->
        </div>
        <!-- end of col-sm-12 -->
      </div>
      <!-- end of row -->
    </div>
    <!-- end of container-fluid -->
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>