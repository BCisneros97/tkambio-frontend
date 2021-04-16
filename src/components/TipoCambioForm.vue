<template>
  <app-modal
    ref="modal"
    :titulo="tituloForm"
    :activo="visible"
    @toggle="$emit('toggleForm', $event)"
  >
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
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "TipoCambioForm",
  model: {
    prop: "visible",
    event: "toggleForm",
  },
  props: {
    tipoCambio: Object,
    visible: Boolean,
  },
  components: {
    "app-modal": Modal,
  },
  computed: {
    tituloForm() {
      return this.tipoCambio.id
        ? "Tipo de cambio #" + this.tipoCambio.id
        : "Nuevo Tipo de Cambio";
    },
  },
  methods: {
    guardar() {
      this.$emit("guardar");
    },
  },
};
</script>