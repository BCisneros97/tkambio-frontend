<template>
  <app-layout-content>
    <template v-slot:header>
      <h5 class="m-b-10">Tipo de Cambio</h5>
      <p class="m-b-0">Getionar el tipo de cambio</p>
    </template>

    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Litado de TC</h5>
          </div>
          <div class="card-block table-border-style pt-0">
            <button
              v-if="opcionesAdmin"
              type="button"
              class="btn btn-success mb-3"
              @click="nuevo"
            >
              Nuevo
            </button>
            <div class="table-responsive">
              <table class="table table-sm table-hover">
                <thead>
                  <tr>
                    <th class="font-weight-bold">Id</th>
                    <th class="font-weight-bold">Creado el</th>
                    <th class="font-weight-bold">Compra</th>
                    <th class="font-weight-bold">Venta</th>
                    <th class="font-weight-bold">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in listadoTC" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.created_at | fechaConFormato }}</td>
                    <td>{{ item.tc_compra }}</td>
                    <td>{{ item.tc_venta }}</td>
                    <td>
                      <template v-if="opcionesAdmin">
                        <button
                          type="button"
                          class="btn btn-sm btn-primary"
                          @click="editar(item)"
                        >
                          <i class="fa fa-pencil"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-danger"
                          @click="eliminar(item.id)"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <app-tipo-cambio-form
          :tipo-cambio="tipoCambio"
          v-model="mostrarForm"
          @guardar="guardar"
        ></app-tipo-cambio-form>
      </div>
    </div>
  </app-layout-content>
</template>

<script>
import LayoutContent from '@/views/layout/LayoutContent.vue';
import tipoCambioService from "@/services/tipo-cambio.service.js";
import TipoCambio from "@/models/tipo-cambio.model.js";
import TipoCambioForm from "@/components/TipoCambioForm.vue";
import { customDateTimeFormat } from "@/services/datetime-format.service.js";
import {
  confirmDialog,
  successDialog,
  errorDialog,
} from "@/services/message-dialog.service.js";

export default {
  name: "TipoCambio",
  components: {
    "app-layout-content": LayoutContent,
    "app-tipo-cambio-form": TipoCambioForm,
  },
  data() {
    return {
      listadoTC: [],
      mostrarForm: false,
      tipoCambio: new TipoCambio(),
    };
  },
  mounted() {
    this.listar();
  },
  computed: {
    currentUser() {
      const authUser = this.$store.state.auth.user;
      return authUser ? authUser.user : {};
    },
    opcionesAdmin() {
      return this.currentUser.rol === "admin";
    },
  },
  filters: {
    fechaConFormato(fecha) {
      return customDateTimeFormat(fecha);
    },
  },
  methods: {
    listar() {
      tipoCambioService.fetchAll().then(({ data }) => {
        this.listadoTC = data;
      });
    },
    nuevo() {
      this.tipoCambio = new TipoCambio();
      this.mostrarForm = true;
    },
    editar(item) {
      Object.assign(this.tipoCambio, item);
      this.mostrarForm = true;
    },
    guardar() {
      const serviceMethod = this.tipoCambio.id
        ? tipoCambioService.update(this.tipoCambio)
        : tipoCambioService.create(this.tipoCambio);

      serviceMethod
        .then(() => {
          this.listar();
          this.mostrarForm = false;
          this.tipoCambio = new TipoCambio();
          successDialog(
            "TC guardado",
            "El tipo de cambio se ha guardado correctamente"
          );
        })
        .catch(() => {
          errorDialog(
            "Error al guardar",
            "Ocurrió un error al guardar el TC. Verifique los datos ingresados e inténtelo nuevamente."
          );
        });
    },
    eliminar(id) {
      confirmDialog(
        `¿Desea eliminar el tipo de cambio #${id}?`,
        "Sí, eliminar",
        "No, cancelar"
      )
        .then((result) => {
          if (result.isConfirmed) {
            tipoCambioService.delete(id).then(() => {
              this.listar();
              successDialog(
                "TC eliminado",
                `El tipo de cambio #${id} se eliminó correctamente.`
              );
            });
          }
        })
        .catch(() => {
          errorDialog(
            "Error al guardar",
            "Ocurrió un error al eliminar el TC. Inténtelo nuevamente."
          );
        });
    },
  },
};
</script>