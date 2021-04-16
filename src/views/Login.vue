<template>
  <section class="login-block">
    <!-- Container-fluid starts -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <!-- Authentication card start -->

          <form class="md-float-material form-material" @submit.prevent="login">
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
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    v-model="user.email"
                    class="form-control"
                    required
                  />
                  <span class="form-bar"></span>
                </div>
                <div class="form-group form-primary">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    v-model="user.password"
                    class="form-control"
                    required
                  />
                  <span class="form-bar"></span>
                </div>
                <div v-if="mensaje.length > 0" class="row m-t-30">
                  <div class="col-md-12">
                    <div class="alert alert-danger mb-0" role="alert">
                      {{ mensaje }}
                    </div>
                  </div>
                </div>
                <div class="row m-t-30">
                  <div class="col-md-12">
                    <button
                      type="submit"
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
import UserLogin from "@/models/user-login.model";

export default {
  name: "Login",
  data() {
    return {
      user: new UserLogin(),
      cargando: false,
      mensaje: "",
    };
  },
  methods: {
    login() {
      this.cargando = true;

      this.$store.dispatch("auth/login", this.user).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.cargando = false;
          this.mensaje = error.error;
        }
      );
    },
  },
};
</script>