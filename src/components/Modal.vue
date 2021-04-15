<template>
  <div>
    <div class="modal fade" :class="{ show, 'd-block': activo }" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ titulo }}</h5>
            <button
              type="button"
              class="close"
              @click="$emit('toggle', false)"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activo" class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'activo',
    event: 'toggle'
  },
  props: {
    titulo: String,
    activo: Boolean
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    activo() {
      this.toggleModal();
    }
  },
  methods: {
    toggleModal() {
      const body = document.querySelector("body");
      this.activo
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");
      setTimeout(() => (this.show = !this.show), 10);
    }
  },
};
</script>