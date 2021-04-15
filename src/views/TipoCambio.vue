<template>
  <div class="pcoded-content">
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="page-header-title">
              <h5 class="m-b-10">Tipo de Cambio</h5>
              <p class="m-b-0">Getionar el tipo de cambio</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pcoded-inner-content">
      <div class="main-body">
        <div class="page-wrapper">
          <div class="page-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Litado de TC</h5>
                  </div>
                  <div class="card-block table-border-style pt-0">
                    <button
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
                            <th>Id</th>
                            <th>Creado el</th>
                            <th>Compra</th>
                            <th>Venta</th>
                            <th>Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in listadoTC" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.created_at | fechaConFormato }}</td>
                            <td>{{ item.tc_compra }}</td>
                            <td>{{ item.tc_venta }}</td>
                            <td>
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-modal ref="modal" titulo="Tipo de cambio" v-model="mostrarModal">
      <form @submit.prevent="guardar">
        <div class="form-group">
          <label id="tc_compra">Compra</label>
          <input
            type="number"
            v-model="tipoCambio.tc_compra"
            id="tc_compra"
            name="tc_compra"
            class="form-control form-control-primary"
            min="0"
            step="0.001"
            required
          />
          <span class="form-bar"></span>
        </div>
        <div class="form-group">
          <label for="tc_venta">Venta</label>
          <input
            type="number"
            v-model="tipoCambio.tc_venta"
            id="tc_venta"
            name="tc_venta"
            class="form-control form-control-primary"
            min="0"
            step="0.001"
            required
          />
        </div>
      </form>

      <template v-slot:footer>
        <button type="button" class="btn btn-primary" @click="guardar">
          Guardar
        </button>
      </template>
    </app-modal>
  </div>
</template>

<script>
import tipoCambioService from "@/services/tipo-cambio.service.js";
import TipoCambio from "@/models/tipo-cambio.model.js";
import Modal from "@/components/Modal.vue";
import { customDateTimeFormat } from '@/services/datetime-format.service.js';
import {
  confirmDialog,
  successDialog,
  errorDialog,
} from "@/services/message-dialog.service.js";

export default {
  name: "TipoCambio",
  components: {
    "app-modal": Modal,
  },
  data() {
    return {
      listadoTC: [],
      mostrarModal: false,
      tipoCambio: new TipoCambio(),
    };
  },
  mounted() {
    this.listar();
  },
  filters: {
    fechaConFormato(fecha) {
      return customDateTimeFormat(fecha);
    }
  },
  methods: {
    listar() {
      tipoCambioService.fetchAll().then(({ data }) => {
        this.listadoTC = data;
      });
    },
    nuevo() {
      this.tipoCambio = new TipoCambio();
      this.mostrarModal = true;
    },
    editar(item) {
      Object.assign(this.tipoCambio, item);
      this.mostrarModal = true;
    },
    guardar() {
      const serviceMethod = this.tipoCambio.id
        ? tipoCambioService.update(this.tipoCambio)
        : tipoCambioService.create(this.tipoCambio);

      serviceMethod
        .then(() => {
          this.listar();
          this.mostrarModal = false;
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
        "¿Desea eliminar el tipo de cambio?",
        "Sí, eliminar",
        "No, cancelar"
      )
        .then((result) => {
          if (result.isConfirmed) {
            tipoCambioService.delete(id).then(() => {
              this.listar();
              successDialog(
                "TC eliminado",
                "El tipo de cambio se eliminó correctamente."
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